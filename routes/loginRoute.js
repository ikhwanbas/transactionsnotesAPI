const express = require('express')
const hyperid = require('hyperid')
const app = express.Router()
const db = require('../controller/dbController')

app.post('/login', (req, res) => {
  const result = db.get('users', req.body)
  if (result) {
    const instance = hyperid()
    result.token = instance()
    res.send(result)
  } else {
    res.status(401).send('unauthorized cuy')
  }
})

// hello world! 

module.exports = app