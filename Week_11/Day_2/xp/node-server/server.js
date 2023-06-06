
// Exercise 2 : HTTP & JSON
const user = {
    firstname: 'John',
    lastname: 'Doe'
}

const http = require('http'); 
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
   
    
    res.end(JSON.stringify(user))

});

server.listen(8080); 
console.log('Node.js web server at port 8080 is running..')



