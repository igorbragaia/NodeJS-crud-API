const bodyParser = require('body-parser')
const express = require('express')
const db = require('./queries')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(bodyParser.json())
  .use(
    bodyParser.urlencoded({
      extended: true,
    })
  )
  .use(express.static(path.join(__dirname, 'client/build')))
  .get('/users', db.getUsers)
  .get('/users/:id', db.getUserById)
  .post('/users', db.createUser)
  .put('/users/:id', db.updateUser)
  .delete('/users/:id', db.deleteUser)
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
