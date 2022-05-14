# Learn Experience Node.js

Relevants snippets code from Lean experience coding

#### Chapter 1 (examples)

[Reference file] (/chapter-1/server.ts)

<details>
  <summary>Simple server</summary>
  
```js
        //Importing http module
        import * as http from 'http';
        //Simple function config server
        const server = (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text-plain' });
            res.write('Hello, World!\n');
            res.end()
        }
        //Instance create server
        http.createServer(server).listen(1337)
```
  
</details>