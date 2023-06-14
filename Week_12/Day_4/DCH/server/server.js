const express = require('express')
const app = express()
const cors  = require('cors')
const bodyParser = require('body-parser');


app.listen(process.env.PORT||3030, () =>{
console.log('run')
})
app.use(bodyParser.text());
app.use(cors());
app.use('/', express.static(__dirname + '/public'))
app.use(express.json())

app.get('/api/hello', (req,res) => {
    res.send('Hello From Express')
})


app.post('/api/word', (req, res) => {
  console.log(req.body);
  res.json({
    message: `I received your POST request. This is what you sent me: ${req.body}`,
  });
});