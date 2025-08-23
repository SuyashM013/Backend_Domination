const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    if(req.url === "/") { res.end('hey') }
    else if(req.url === "/profile") { res.end('page') }
    else { res.end("Page not Found") }
    
})

server.listen(3000); 