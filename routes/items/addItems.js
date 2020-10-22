const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const authorization = require('../../middleware/authorizationMiddleware')
app.use(authorization)

app.post('/items', (req, res) => {
    const body = req.body
    const result = db.add('items', body)
    if (!result) {
        res.status(400).send('wrond body structure')
    } else {
        res.send(result)
    }
    return
})

module.exports = app