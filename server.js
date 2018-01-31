const express = require('express')
const path    = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const config = require('./config')
const sortJsonArray = require('sort-json-array')

const app = express()
var queue =[]
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'client/build')))

function getData(options){
  return new Promise(function(resolve, reject) {
    request(options, function (err, httpResponse, body){
      if(err) {
        return console.error('failed! '+err)
      }
      data = body
      resolve(data)
    })
  })
}

app.post('/api', (req, res) => {
  const body = req.body
  const action = body.action
  console.log('/api/'+action)

  const url = config.logicApp
  const options = {
        url: url,
        method: "POST",
        json: true,
        body: body
  }

  async function run() {
    var response = await getData(options)
    switch (action) {
      case 'createDocument':
        console.log(response)

        break

      case 'getDocument':
        res.send(response)

        break

      case 'getAllDocuments':
        sortedDocuments = sortJsonArray(response, '_ts', 'des')
        res.send(JSON.stringify(sortedDocuments))

        break
      case 'deleteDocument':

        break
      default:
        console.log('Sorry, unable to process api call')
    }
  }
run()
})

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'))
// })

const port = process.env.PORT || 3001
app.listen(port)

console.log(`Server listening on port: ${port}`)
