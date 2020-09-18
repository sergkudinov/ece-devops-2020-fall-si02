const express = require('express')
const dbClient = require('./dbClient')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

dbClient.on("error", function(error) {
  console.error(error);
});

const server = app.listen(port, (err) => {
  if (err) throw err
  console.log("Server listening the port " + port)
})

module.exports = server
