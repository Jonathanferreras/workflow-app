const express = require('express');
const path    = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const config = require('./config');
const sortJsonArray = require('sort-json-array')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));

function getData(options){
  return new Promise(function(resolve, reject) {
    request(options, function (err, httpResponse, body){
      if(err) {
        return console.error('failed! '+err);
      }
      data = body
      resolve(data);
    });
  });
}


app.post('/api/getForm', function(req, res){
  console.log('/api/getForm');
  const formid = req.body.id;

  var postUrl = config.logicApp.getDocument;
  var options = {
    url: postUrl,
    method: "POST",
    json: true,
    body: { id:formid }
  }

  async function run(){
    var response = await getData(options);
      res.send(JSON.stringify(response));
  }

  run();
})

app.post('/api/getAllForms', function(req, res){
  console.log('/api/getAllForms');
  var postUrl = config.logicApp.getAllDocuments;
  var options = {
    url: postUrl,
    method: "POST",
  }

  async function run(){
    var response = await getData(options);
    var documents = JSON.parse(response)
    sortedDocuments = sortJsonArray(documents, '_ts', 'des');
    res.send(sortedDocuments);
  }

  run();
})


app.post('/api/postForm', function(req, res){
  console.log('/api/postForm');
  console.log("Form: " + JSON.stringify(req.body));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Server listening on port: ${port}`);
