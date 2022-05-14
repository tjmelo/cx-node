const routes = {
    '/': (req, res) => {
        res.writeHead(200);
        res.end('Hello, Wordl!');
    },
    '/foo': (req, res) => {
        res.writeHead(200);
        res.end('You are now viewing "fooo"')

    }
}

export { routes }