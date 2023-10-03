// Express Module
const express = require('express')
// dotenv module
const dotenv = require('dotenv')
// setting
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

console.log(HOST)
console.log(PORT)

// Web server
const app = express()

// Routing
app.get('/', (req, res) => {
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)
    // From server's request
    res.send('Hello!!!')
})

app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait....')
})