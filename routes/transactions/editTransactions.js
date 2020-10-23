const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const authorization = require('../../middleware/authorizationMiddleware')
app.use(authorization)

app.patch('/transactions', (req, res) => {
    const { id } = req.body
    const result = db.edit('transactions', id, req.body);
    if (!result) {
        res.status(400).send('Wrong body');
    } else {
        res.send(result);
    }
}
)

module.exports = app