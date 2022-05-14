# Learn Experience Node.js

Some relevant explanations about code snippets from learn experience coding. Enjoy!

#### Chapter 1 (examples)

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
  :link: [Reference file](/chapter-1/server.ts)
  
</details>
