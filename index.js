const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {

  var data = {name:'Faiz','lastName':'Dae',phone:'0793523035',email:'faiz@gmail.com'};
  
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})