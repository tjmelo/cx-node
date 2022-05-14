# Learn Experience Node.js

Relevants snippets code

#### Chapter 1 (examples)

<details>
  <summary>Simple server</summary>
  ```javascript

        import * as http from 'http';
        const server = (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text-plain' });
            res.write('Hello, World!\n');
            res.end()
        }

        http.createServer(server).listen(1337)

  
</details>