import * as http from 'http';
import { routes } from './routes'

const server = (req, res) => {
    if(req.url in routes){
        return routes[req.url](req, res)
    } 

    res.writeHead(404);
    res.end(http.STATUS_CODES[404])
}

http.createServer(server).listen(1337)