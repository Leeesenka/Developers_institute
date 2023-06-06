// Exercise 1 : Express & JSON
const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});
// const user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }

// app.get('/', (req, res) => {
//     console.log(user)
//     res.json(user)
// })


// Exercise 2 : Express & Parameters
// app.get('/:id', (req,res)=>{
//     console.log(req.params) 
//     res.send(req.params)
 
// })
// Exercise 3: Express & Static Files
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
   
})