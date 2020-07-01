const http = require('http');
const fs = require('fs'); // File System

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
    if(url==='/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
        res.write('</html>');
    
        return res.end();
    }
    if(url==='/message' && method === 'POST'){
        fs.writeFileSync('message.txt', "DUMMY");
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Post Message</title></head>');
        res.write('<body><h1>Message Received</h1></body>');
        res.write('</html>');
    
        return res.end();
    
});

server.listen(3000);

