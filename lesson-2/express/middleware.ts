import * as express from 'express';

type TOption = { greeting: string }

export const getting = (options:TOption = { greeting: '' }) => {
    
    const router = express.Router();

    router.get('/greet', (req, res, next) => res.end(options.greeting))

    return router
}