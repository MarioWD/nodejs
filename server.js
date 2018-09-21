const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('home page');
        res.end();
    }

    if (req.url == '/json/please') {
        res.write(JSON.stringify(this));
        res.end();
    }
});

server.listen(3000);
console.log('listening to port 3000');
