// mongodb://localhost:27017 -------> this is my Mongodb connection string
const connectToMongoose = require("./db")
var cors = require("cors")
connectToMongoose()

const express = require('express')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
//my Routs
app.use("/api/auth",require("./routs/auth.js"))
app.use("/api/notes",require("./routs/notes.js"))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})