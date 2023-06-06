const express = require('express');

const {products} = require('./config/data.js') 
const app = express();

// user request ->medleware
const logger = (req, res, next) => {
    console.log('url=>', req.url);
    console.log('params=>', req.params);
    console.log('query=>',req.query);
    console.log('body=>',req.body);
    next()
}
const auth = (req, res, next) => {
    const user = req.query.user;
    if(user === "admin") {
        next()
    }
    else{
        res.status(401).send('Unauthorized')
    }
}


app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.listen(3001, () =>{
    console.log('server is running on port 3001');
})
// //http://localhost:3001/api/products
// app.get('/api/users', (req,res) => {
//     res.send('hello')
// })
app.get('/api/products', auth, (req,res) => {
    res.json(products)
})
app.use('api/products', logger)
app.use('api/products', auth)
// app.post('/api/products', (req, res)=>{
//     console.log(req.body);
//     res.send('ok from post')
// })

app.post('/api/products', (req, res)=>{
    products.push(req.body);
    res.status(201).json(products)

})
//delete
app.delete('/api/products/:products_id', (req,res)=>{
    const id = req.params.products_id;
    const index = products.find(item => item.id == id);

    if(index ===  -1) {
        return res.status(404).json({message:'Product not found'})
    }
    products.splice(index,1);
    res.status(200).json(products)
})

//put-update
app.put('/api/products/:products_id', (req, res) => {
    const id = req.params.products_id;
    const index = products.findIndex(item => item.id == id);

    if(index ===  -1) {
        return res.status(404).json({message:'Product not found'})
    }
    products[index] = {
        ...products[index],
        name:req.body.name,
        price:req.body.price
    }
    res.status(200).json(products)
})



app.get('/api/products/:products_id', (req,res)=>{
    console.log(req.params) 
    // res.send('OK')
    const id = req.params.products_id;
    const product = products.find(item => item.id == id);
    if(!product) {
        return res.status(404).json({message:'Product not found'})
    }
    
    res.status(200).json(product)
})
app.get('/api/search', (req,res)=>{
    console.log(req.query) 
    
    const name_id = req.query.name;
    const product_name = products.filter(item => {
        return item.name.toLowerCase().includes(name_id.toLowerCase())
    })
    if(product_name.length ===0) {
        return res.status(200).json({message:'no Product not found'})
    }
    res.json(product_name)
})