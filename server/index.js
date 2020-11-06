const express = require('express')
const controller = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db', db)
    console.log('connected to the database')
}).catch(err => {
    console.log('we have a problem')
})

app.use(express.json())

app.get('/api/inventory', controller.getInventory)
app.post('/api/product', controller.addProduct)

app.listen(SERVER_PORT, () => {
    console.log(`server listening on port ${SERVER_PORT} dawg`)
})