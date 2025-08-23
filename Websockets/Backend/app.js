const express = require('express');
const app = express();
const http = require('http');

const Socketio = require('socket.io');


const server = http.createServer(app); // socketio runs on http server
const io = Socketio(server); // socketio is HTTP server pr chalega

app.set('view engine', 'ejs');

io.on('connection', (socket) => {
    console.log('User Connected')
    console.log(socket.id)
    socket.on('disconnect', () => {
        console.log('User Disconnected')
    })
})


app.get('/', (req, res) => {
    res.render('index')
})

// io.on('connection', (socket) => {
//     console.log('User Connected')
//     console.log(socket.id)

//     socket.on('disconnect', () => {
//         console.log('User Disconnected')
//     })

//     socket.on('abcd', (data) => {
//         console.log(data)  // data a raha
//         // io.emit('defg')
//         socket.emit('1defg') // data bhej rahe singly yh sabhi ko
//     })

//     socket.on('typing', () => {
//         socket.broadcast.emit('typing')
//     })


//     // socket.join('room1')
// })



server.listen(3000);