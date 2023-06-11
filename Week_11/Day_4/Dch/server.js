const express = require('express')
const dotenv = require('dotenv')
const cors  = require('cors')
// const reg_router =require('./routers/register.js')



const app = express()
dotenv.config()

app.listen(process.env.PORT||3030, () =>{
console.log('run')
})

// app.use('/', express.static(__dirname + '/public'))
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// app.use(reg_router.router)
app.use(express.static('public'));

var path = require('path');

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/login.html'));
});


