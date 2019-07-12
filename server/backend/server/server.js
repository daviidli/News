// Uncomment following to enable zipkin tracing, tailor to fit your network configuration:
// var appzip = require('appmetrics-zipkin')({
//     host: 'localhost',
//     port: 9411,
//     serviceName:'frontend'
// });

require('appmetrics-dash').attach();
require('appmetrics-prometheus').attach();
const appName = require('./../package').name;
const http = require('http');
const express = require('express');
const log4js = require('log4js');
const localConfig = require('./config/local.json');
const path = require('path');

const logger = log4js.getLogger(appName);
logger.level = process.env.LOG_LEVEL || 'info'
const app = express();
const server = http.createServer(app);
let request = require('request-promise');
let bodyParser = require('body-parser');
let jsonParser = bodyParser.json();

//helper for getting the request
async function everythingContent(phrase){ 
    let listOfUrls;
    let numResults=60;
    let link = 'https://newsapi.org/v2/everything?q='+ phrase +'&pageSize='+numResults+ '&apiKey=f4c9cef82d2745cf955c392b9e6284c1'
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
            url:"https://ml-ibmhackathon.herokuapp.com/analysis", 
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

app.use(log4js.connectLogger(logger, { level: logger.level }));
const serviceManager = require('./services/service-manager');
require('./services/index')(app);
require('./routers/index')(app, server);

// Add your code here

const port = process.env.PORT || localConfig.port;
server.listen(port, function(){
  logger.info(`nodejswebapp listening on http://localhost:${port}/appmetrics-dash`);
  logger.info(`nodejswebapp listening on http://localhost:${port}`);
});

app.use(function (req, res, next) {
  res.sendFile(path.join(__dirname, '../public', '404.html'));
});

app.use(function (err, req, res, next) {
	res.sendFile(path.join(__dirname, '../public', '500.html'));
});

module.exports = server;