require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.get("/twitter",(req,res) =>{
    res.send('twitter.url')
 })
 app.get("/login", (req,res) =>{
    res.send('<h1>hii am starting backend</h1>')
 })
 app.get("/chai", (req,res) =>{
     res.send('chai peio')
 })
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
