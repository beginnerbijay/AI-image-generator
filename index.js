const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,("public"))))
app.use('/openai',require('./routes/route'))

app.listen(port,()=>console.log(`server is running at ${port}`))