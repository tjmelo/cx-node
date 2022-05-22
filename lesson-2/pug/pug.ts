import * as express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'pug');
app.set('views', 'src/views');

app.get('/', (req, res) => res.render('index', { title: 'Hey', message: 'Hello there!' }));

app.listen(PORT, (err) => !err && console.log('Server is running', PORT))