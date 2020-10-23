const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

const authorization = require('../../middleware/authorizationMiddleware')
app.use(authorization)

app.delete('/items', (req, res) => {
    const id = req.query.id
    console.log(id);
    const result = db.remove('items', id);
    console.log(result);
    if (!result) {
        res.status(404).send('Error: Not found');
    } else {
        res.send(result);
    }
    return;
});

module.exports = app