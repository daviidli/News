from flask import Flask, request
from flask_cors import CORS
import os
import string
from nltk import tokenize
app = Flask(__name__)
CORS(app)
from newspaper import Article, Config
import json
import math
from textblob import TextBlob
from sklearn.cluster import KMeans
from sklearn.feature_extraction.text import TfidfVectorizer
import collections
from nltk import word_tokenize
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

# On IBM Cloud Cloud Foundry, get the port number from the environment variable PORT
# When running this app on the local machine, default the port to 8000 test
port = int(os.getenv('PORT', 5000))

def clean(doc: str) -> list:
	doc = doc.lower()
	doc = doc.split()
	cleaned = [word for word in doc if (word not in stopwords.words('english') and word not in string.punctuation)]
	return cleaned

def createWordDict(doc: list) -> dict:
	dic = {}
	for word in doc:
		if word in dic:
			dic[word] += 1
		else:
			dic[word] = 1
	return dic


# term frequency calculator
def TFID(doc: str) -> dict:
	cleaned_doc = clean(doc)
	TFVals = createWordDict(cleaned_doc)
	for key, value in TFVals.items():
		TFVals[key] = TFVals[key]/len(cleaned_doc)
	# print(TFVals)
	TFSentences = {}
	sentences = tokenize.sent_tokenize(doc)
	sentences = [sent.strip() for sent in sentences if sent != '']
	for sentence in sentences:
		no_stop_sentence = clean(sentence)
		split_sentences = sentence.split(" ")
		temp_add = 0.0
		# print(split_sentences)
		for word in split_sentences:
			if word.lower() in TFVals:
				temp_add += TFVals[word.lower()]

		TFSentences[sentence] = temp_add/len(no_stop_sentence)
	return TFSentences

# inverse doc freq calculator
def IDF(doc: str)-> dict:
	cleaned_doc = clean(doc)
	word_dict = createWordDict(cleaned_doc)
	for key, value in word_dict.items():
		word_dict[key] = word_dict[key] / len(cleaned_doc)

	sentences = tokenize.sent_tokenize(doc)
	sentences = [sent.strip() for sent in sentences if sent != '']
	word_count_sentence = []
	for sent in sentences:
		word_count_sentence.append(createWordDict(clean(sent)))
	IDFVals = {}
	for unique_word in word_dict:
		temp_add = 0
		for wc_sent in word_count_sentence:
			if unique_word in wc_sent:
				temp_add += 1


		IDFVals[unique_word] = 0 if temp_add == 0 else math.log10(word_dict[unique_word]/temp_add)
	IDFSentences = {}
	for sentence in sentences:
		no_stop_sentence = clean(sentence)
		split_sentences = sentence.split(" ")
		temp_add = 0.0
		for word in split_sentences:
			if word.lower() in IDFVals:
				temp_add += IDFVals[word.lower()]

		IDFSentences[sentence] = temp_add / len(no_stop_sentence)
	return IDFSentences

# generates article summary
def generateSummary(article):

	doc = article.text
	doc.replace("\n\n", ".")
	article.nlp()
	TFVals = TFID(doc)
	IDFVals = IDF(doc)
	TF_dict = {}
	for k, v in TFVals.items():
		if k in IDFVals:
			TF_dict[k] = v * IDFVals[k]
	m1 = 0.0
	m2 = 0.0
	m3 = 0.0

	max_sent1 = ""
	max_sent2 = ""
	max_sent3 = ""
	for key, value in TF_dict.items():
		value = abs(value)
		if value > m1:
			m1 = value
			max_sent1 = key
		elif value > m2 and value < m1:
			m2 = value
			max_sent2 = key
		elif value > m3 and value < m2 and value < m1:
			m3 = value
			max_sent3 = key
	shorten_summary = article.summary.split()
	return (list(filter(None, article.summary.split('\n') + [max_sent1, max_sent2, max_sent3])), article.summary)

def wordTokenizer(text):
	tokens = word_tokenize(text)
	stemmer = PorterStemmer()
	tokens = [stemmer.stem(t) for t in tokens if t not in stopwords.words('english')]
	return tokens

# cluster sentences together
def clusterSentences(sentences, nb_of_clusters=3):
		tfidf_vectorizer = TfidfVectorizer(tokenizer=wordTokenizer,
										stop_words=stopwords.words('english'),
										max_df=0.9,
										min_df=0.1,
										lowercase=True)
		#builds a tf-idf matrix for the sentences
		tfidf_matrix = tfidf_vectorizer.fit_transform(sentences)
		kmeans = KMeans(n_clusters=nb_of_clusters)
		kmeans.fit(tfidf_matrix)
		clusters = collections.defaultdict(list)
		for i, label in enumerate(kmeans.labels_):
				clusters[label].append(i)
		return dict(clusters)

def convertNum(_id: int) -> int:
	if _id == 0:
		return 2
	elif _id == 1:
		return 0
	elif _id == 2:
		return 1
	return -1

# api to give analysis
@app.route('/analysis', methods=['POST'])
def analysis():
	articles = request.data
	articles = json.loads(articles)
	urls = articles['urls']
	summaries = []
	results = []
	config = Config()
	config.MAX_SUMMARY_SENT = 2
	for pairs in urls:
		url = pairs['url']
		source = pairs['source']

		print(url)
		article = Article(url, config=config)
		article.download()
		article.parse()
		summary, summary2 = generateSummary(article)
		str_summary = ' '.join(summary)
		blob = TextBlob(str_summary)
		summaries.append(str_summary)
		print(str_summary)
		subjectivity = []
		polarity = []
		for sentence in blob.sentences:
			subjectivity.append(sentence.sentiment.subjectivity)
			polarity.append(sentence.sentiment.polarity)
		subj_sum = 0.5 if len(subjectivity) == 0 else sum(subjectivity)/len(subjectivity)
		pol_sum = 0.5 if len(polarity) == 0 else ((sum(polarity) / len(polarity)) + 1)/2
		results.append({"headline": article.title, "summary": summary2, "_summary": str_summary, "image": article.top_image, "subjectivity": subj_sum, "p_group": pol_sum, "url": url, "source": source, "keywords": article.keywords})
	clusters = clusterSentences(summaries, 3)
	for cluster in range(3):
		for i, article_summary in enumerate(clusters[cluster]):
			for res in results:
				if res['_summary'] == summaries[article_summary]:
					print("FOUND")
					res['group'] = convertNum(cluster)
	return json.dumps({"results": results})



if __name__ == '__main__':

	app.run(port=port)
