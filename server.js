const express = require('express');
const path    = require('path');
const request = require('request');
const bodyParser = require('body-parser');
const config = require('./config');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/getData', function(req, res){
  const formid = "hello";
  var data;

  var postUrl = config.urls.getData;
  var options = {
    url: postUrl,
    method: "POST",
    json: true,
    body: {}
  }

  function getData(){
    return new Promise(function(resolve, reject) {
      request(options, function (err, httpResponse, body){
        if(err) {
          return console.error('failed! '+err);
        }
        data = JSON.stringify(body)
        resolve(data);
      });
    });
  }

  async function run(){
    var response = await getData();
    console.log(response)
      res.send(response);
  }

  run();
})


app.post('/api/postForm', function(req, res){
  console.log("Form: " + JSON.stringify(req.body));
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Server listening on port: ${port}`);
