const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

let app = express();
let server = http.createServer(app);

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('createMessage', (message) => {
    socket.emit('newMessage', Object.assign(message, {createdAt: new Date()}));
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
