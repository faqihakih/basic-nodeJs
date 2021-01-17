const http = require('http');
const hello = require('./helloWorld');
const moment = require('moment');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader = 'Content-Type', 'text/plain';
    // res.write(hello); // Hello World!
    // res.write(hello.hello()); // Hello
    // res.write(hello.world()); // World!
    res.write(moment().calendar()); // moment show date time
    res.write(JSON.stringify({
        'status': 'success',
        'massage': 'response success'
    })) // => response with json
    const url = req.url
    if (url === '/employee') {
        res.write('ini data karayawan yang kamu butuhkan')
    }else{
        res.write('data apa yang kamu butuhkan ?')
    }
    res.end();
});

const hostname = '127.0.0.1';
const port = 3000;
server.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});