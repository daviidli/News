let request = require('request-promise');
let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let jsonParser = bodyParser.json();

//helper for getting the request
async function everythingContent(phrase){ 
    let listOfUrls;
    let numResults=60;
    let link = 'https://newsapi.org/v2/everything?q='+ 'Brexit' +'&pageSize='+numResults+ '&apiKey=f4c9cef82d2745cf955c392b9e6284c1'
    await request({url:link, json:true}, function(err, res, json){
        if(err){
            throw err;
        }
        listOfUrls = addUrlSrcList(json);
    });
    return listOfUrls;
}



//url into list helper
function addUrlSrcList(cont){
    let listUrlSrcObj=[];
    cont.articles.forEach(function(element){
        let obj = {
            'url':element.url,
            'source':element.source.name
        }
        listUrlSrcObj.push(obj);
        
    });
    listUrlSrcObj.forEach(function(element){
        
        console.log(element);
    });
    
    return listUrlSrcObj;
}


app.get("/vals", jsonParser, async function(request, response){
let valList = await everythingContent("Brexit");
});

// get the analysis results
async function getAnalysis(urlSrc, phrase){
    let analysis = await request.post(
        {
            url:"https://bcd633f7.ngrok.io/analysis", 
            json:true,
            body:{'urls': urlSrc, 'searchterm':phrase}, 
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

