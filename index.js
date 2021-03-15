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


app.get('/posts', (req, res) => {
  res.send('<h1><a href="/">Home</a> ipsum dolor sit amet consectetur adipisicing elit. Autem aliquam, atque voluptate totam! Distinctio cum dolorem, aperiam doloribus eveniet nesciunt temporibus, nemo aspernatur! Quaerat suscipit sunt ipsa cumque omnis ea?</h1></h1>\
\
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing, elit. Iure at fugiat aperiam laborum itaque provident, voluptas iusto harum eaque rem quam illo recusandae, ratione! Et corrupti a iste labore alias!</p></p> 	')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})