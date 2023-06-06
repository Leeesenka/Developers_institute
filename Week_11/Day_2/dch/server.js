const express = require('express')
const app = express()

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/');
});

app.get('/aboutMe/:hobby', (req,res)=>{
    console.log(req.params) 

    const hobby = req.params.hobby
    if(isNaN(hobby)) {
        return res.status(200).send(`This is my hobby: ${hobby}`)
    }
    else{
        res.status(404).send('hobyy not found')
    }
})
app.use('/', express.static(__dirname + '/public'))
// app.use(express.urlencoded({extended:true}))
// app.use(express.json)
app.get('/pic', (req,res)=>{
    res.sendFile(__dirname + '/public/index.html')
})
app.get('/form/',(req,res)=>{
    res.sendFile(__dirname + '/public/index2.html')
  })
  
app.get('/formData', (req,res)=>{
    console.log(req.query);
    res.send(`${req.query.email} sent you a message ${req.query.message}`)
  })

// app.post('/formData', (req,res)=>{
//     console.log(req.body);
//     res.send(`${req.body.email} sent you a message from post ${req.body.message}`)
//   })
  