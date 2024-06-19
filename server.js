const express = require('express')
const notFound = require('./middlewares/not-found')
const app = express()


app.use(notFound)

const PORT = 8000
app.listen(PORT, () => console.log("Server on port", PORT))