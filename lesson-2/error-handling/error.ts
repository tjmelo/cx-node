import * as express from 'express';
const app = express();

app.get('/names/:name', (req, res, next) => {
    req.params.name === 'john'
    ? res.send('Valid Name')
    : next(new Error('Not valid name'))
})

app.use((err, req, res, next) => {
    console.log(err.stack);
    return res.status(500).send('Internal Server Ocurred');
})

app.listen(3000)