import * as express from 'express';

express()
    .get('/ping', (req, res) => res.send('pong'))
    .listen(8080, 'localhost')
