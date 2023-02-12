const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == "/") {
        const data = fs.readFileSync('home.html', 'utf-8');
        res.end(data);
    }
    else if (req.url == "/contact") {
        const data = fs.readFileSync('contact.html', 'utf-8');
        res.end(data);
    }
    else if (req.url == "/about") {
        const data = fs.readFileSync('about.html', 'utf-8');
        res.end(data);
    }
    else if (req.url) {
        res.end('404!Not Found')
    }

});

server.listen(5001);
console.log("Server is running");