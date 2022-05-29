import * as express from 'express';
import * as cors from 'cors';

const port = process.env.port || 3000;

express()
    .use(cors())
    .get('/', (req, res) => {
        const info = {
            'string_value': 'Learn Nodejs',
            'number_value': 1985
        }
        res.json(info)
    })
    .listen(port, () => console.log(`Node.js is listening on port ${port}`))