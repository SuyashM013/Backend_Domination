const express = require('express');
const app = express();
const socketIO = require('socket.io')
const http = require('http');

const server = http.createServer(app);
const io = socketIO(server);

const path = require('path');

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket)=> {
    socket.on('signalingMessage', (message) => {
        socket.broadcast.emit('signalingMessage', message)
    })

})

app.get('/', (req, res) => {
    res.render('index')
})

server.listen(2000, () => {
    console.log('Server is running on port 2000')
})