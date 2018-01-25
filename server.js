const express = require('express');
const path    = require('path');
const request = require('request');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')));


app.post('/api/formPost', function(req, res){
  console.log(req.body);
});

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });

const port = process.env.PORT || 3001;
app.listen(port);

console.log(`Server listening on port: ${port}`);
