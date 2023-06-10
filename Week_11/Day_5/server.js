const express = require('express');
const ejs = require('ejs');

const app = express();
app.set('view engine', 'ejs')

app.listen(process.env.PORT||3030, ()=>{
    console.log(`run on ${process.env.PORT||3030}`);
})
app.get('/', (req, res)=>{
    // res.send('<h1>Hello EJS</h1>')
    // res.render('index',{
    //     'firstName': 'John',
    //     'lastName':'Due'
    // })
    let login = false
    let user = {
        'firstName': 'John',
        'lastName':'Due'
    }
    let student = {
        stu1: 'Mary',
        stu2: 'Kelly',
        stu3: 'Lura'
    }
    res.render('index', {
        login, 
        user,
        student
    })
})

app.get('/shop', (req, res)=>{
    res.render()
})