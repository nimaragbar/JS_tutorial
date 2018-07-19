// first import out module, http is built-in module it's not need to be downloaded

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Hello World from new server');
});

server.listen(port, hostname, () => {
    console.log('Server started on port ' + port)
});