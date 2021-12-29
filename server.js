const http = require('http')
const fs = require('fs')
const path = require('path')

const indexHTML = fs.readFileSync(path.resolve('./index.html'), 'utf-8')
const styleCSS = fs.readFileSync(path.resolve('./style.css'), 'utf-8')
const clientJS = fs.readFileSync(path.resolve('./client.js'), 'utf-8')

function handleRequest(req, res) {
  console.log('path: ', req.method, req.url)
  if (req.url === '/style.css') {
    res.writeHead(200, {'Content-Type': 'text/css'})
    res.end(styleCSS)
    return
  }
  if (req.url === '/client.js') {
    res.writeHead(200, {'Content-Type': 'text/javascript'})
    res.end(clientJS)
    return
  }
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end(indexHTML)
}

const server = http.createServer(handleRequest)
server.listen(8080)
console.log('Server is running on port 8080')
