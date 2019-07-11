let request = require('request-promise');
let express = require('express');
let bodyParser = require('body-parser');
let numResults=60;
const link = 'https://newsapi.org/v2/everything?q='+ 'Brexit' +'&pageSize='+numResults+ '&apiKey=f4c9cef82d2745cf955c392b9e6284c1'
let app = express();

let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended:false}))

//helper for getting the request
async function everythingContent(phrase){ 
    let listOfUrls;
    await request({url:link, json:true}, function(err, res, json){
        if(err){
            throw err;
        }
        listOfUrls = addUrlList(json);
    });
    return listOfUrls;
}

//url into list helper
function addUrlList(cont){
    let listUrl=[];
    cont.articles.forEach(function(element){
        
        listUrl.push(element.url);
        
    });
    listUrl.forEach(function(element){
        
        console.log(element);
        
    });
    return listUrl;
}

app.get("/urls", async function(request, response){
    
    let valList = await everythingContent('Brexit');
});


// post the results
async function getAnalysis(urls, phrase){
    let analysis = await request.post(
        {
            url:"https://bcd633f7.ngrok.io/analysis", 
            json:true,
            body:{'urls': urls, 'searchterm':phrase}, 
            headers:{'Content-Type': 'application/json'}
            }, function(err, res, json){
            if(err){
                throw err;
            }
            console.log(json);
        });
    return analysis;
}

app.post("/search", jsonParser, async function(request, response){
    console.log(request.body);
    if(!request.body.search){
        return response.status(400).send({
            success:'false',
            message:'search phrase is required'
        });
    }
    let phrase = request.body.search;
    let valList = await everythingContent(phrase);
    response.send(getAnalysis(valList,phrase));
});

// start the server
app.listen(8081,err=>{
    if(err) console.log(err)
    else{
        console.log('Server listening on port: 8081')
        console.log('http://127.0.0.1:8081/')
    }
})

