import * as http from 'http';

const server = (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text-plain' });
    res.write('Hello, World!\n');
    res.end()
}

http.createServer(server).listen(1337)