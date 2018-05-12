const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');

let app = express();
let server = http.createServer(app);

const publicPath = path.join(__dirname + '/../public');
const port = process.env.PORT || 3000;
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New client connected');

  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat room'));
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });

  socket.on('createMessage', (message, callback) => {
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback();
  });

  socket.on('createLocationMessage', (position) => {
    io.emit('newLocationMessage', generateLocationMessage('Admin', position.latitude, position.longitude));
  });
});

server.listen(port, () => {
  console.log(`Started on port ${port}`);
});
