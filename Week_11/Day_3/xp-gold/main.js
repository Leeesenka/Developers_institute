// const fs = require('fs');
// const express = require('express')
// const app = express()
// app.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000/');
// });
// app.use('/', express.static(__dirname + '/public'))
// const products = [
//     {id: 102, name: 'iphone', price: 800},
//     {id: 103, name: 'iphoneMax', price: 900},

// ]
// fs.writeFileSync('product.json',JSON.stringify(products), 'utf-8', (err, data)=>{
//    if(err){
//     console.log(data)
// }
// })

const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/public'));

// app.get('/form/', (req, res) => {
//   res.sendFile(__dirname + '/public/index.html');
// });

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }));
// app.get('/formData', (req,res)=>{
//     console.log(req.query);
//     res.send(`${req.query.name} and ${req.query.price}`)
//   
//   })  

app.post('/formData', (req,res)=>{
    console.log(req.body);
    res.send(`${req.body.name} and ${req.body.price}`)
  })

  app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
  });  