import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs'

const httpsOptions = {
    key: fs.readFileSync('./https/key.pem'),
    cert: fs.readFileSync('./https/cert.pem')
}

const app = (req, res) => {
    res.writeHead(200);
    res.end("hello world\n");
}

http.createServer(app).listen(8888);
https.createServer(httpsOptions, app).listen(4433);