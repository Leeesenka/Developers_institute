// const http = require('http');
// const largeNumber = require('./main');

// const b = 5;
// const sum = largeNumber + b;

// const server = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'text/html');
//     res.end(`<p>My Module is ${sum}</p><h1>Hi there at the frontend</h1>`);
// });

// server.listen(3000, () => {
//     console.log("I'm listening");
// });

const http = require('http');
const main = require('./main');
const getCurrentDateTime = main.getCurrentDateTime;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`<p>The current date and time is: ${getCurrentDateTime()}</p>`);
});

server.listen(8080, () => {
    console.log('Server is listening on port 8080');
});
