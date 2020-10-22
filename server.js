const express = require('express')
const bodyParser = require('body-parser')

const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addItems = require('./routes/items/addItems')
const getItems = require('./routes/items/getItems')
// const editItems = require('./routes/items/editItems')

const addTransactions = require('./routes/transactions/addTransactions')
const getTransactions = require('./routes/transactions/getTransactions')

const app = express()
app.use(bodyParser.json())
app.use(rootRoute)

app.use(registerRoute)
app.use(loginRoute)

app.use(addItems)
app.use(getItems)
// app.use(editItems)

app.use(addTransactions)
app.use(getTransactions)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
