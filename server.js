const express = require('express');
let app = express();
let server = app.listen(3000);

app.use(express.static('public'));

let socket = require('socket.io');
let io = socket(server);

io.on('connection', function newConnection(socket) {
    console.log('new connection: ' + socket.id);
    socket.on('mouse', function mouseMsg(data) {
        socket.broadcast.emit('mouse', data);
    });
});



