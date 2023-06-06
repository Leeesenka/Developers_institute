const http = require('http'); 
const first = '<h1>This is my first response</h1>'
const second = '<h1>This is my second response</h1>'
const third = '<p>This is my second response</p>'
const server = http.createServer((req, res) => {
    //1.
    res.statusCode = 200;
    //2.
    res.setHeader('Content-Type', 'text/html');
    //3
    res.write(first)
    res.write(second)
    res.write(third)
    res.end();

});

server.listen(3000); 
console.log('Node.js web server at port 3000 is running..')
