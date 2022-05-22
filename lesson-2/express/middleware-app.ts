import * as express from 'express';
import { getting } from './middleware';

express()
    .get('/api/v1/', (req, res, next) => getting({ greeting:'Hello world' }))
    .listen(8080)