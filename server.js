const express = require('express')
const path    = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const config = require('./config')
const sortJsonArray = require('sort-json-array')

const app = express()
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

function jsonParser(json, root){
  if (root == "FORM") {
    json[root] = JSON.parse(json[root].replace(/[\[\]']+/g,''))

  } else if (root == "FORMS"){
    json[root] = sortJsonArray(JSON.parse(json[root]), 'TIME_STAMP', 'des')
  }

  return json
}

app.post('/api', (req, res) => {
  const body = req.body
  const action = body.action
  console.log('/api/'+action)
  console.log(body)

  const url = config.logicApp
  const options = {
        url: url,
        method: "POST",
        json: true,
        body: body
  }

  async function run() {
    var response = await getData(options)
    console.log('Data recieved: ' + JSON.stringify(response))
    switch (action) {
      case 'STORE_FORM_DATA':
        console.log('Form has been saved!')

        break

      case 'SEND_FORM_DATA':
        console.log('Sending form!')
        formatted_json = jsonParser(response[0], "FORM")

        res.send(formatted_json)

        break

      case 'SEND_ALL_FORM_DATA':
        console.log('Sending all forms!')
        formatted_json = jsonParser(response[0], "FORMS")

        res.send(JSON.stringify(formatted_json))

        break

      case 'updateDocument':
        console.log('Form updated!')

        break

      case 'DELETE_FORM_DATA':
        console.log('Form deleted!')

        break

      default:
        console.log('Sorry, unable to process api call')
    }
  }

run()
})

app.get('/', (req, res) => {
  console.log('client')
  // res.sendFile(path.join(__dirname+'/client/build/index.html'))
})

const port = process.env.PORT || 3001
app.listen(port)

console.log(`Server listening on port: ${port}`)
