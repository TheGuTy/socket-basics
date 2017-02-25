var PORT = process.env.PORT || 3000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static(__dirname + '/public'));

// on() is going to let you listen for events
io.on('connection', function (socket) {
  console.log('user connected via socket.io!');

  socket.on('message', function (message) {
    console.log('Message received: ' + message.text);
    socket.broadcast.emit('message', message);  // send the message to everybody but the person who sends it
  });

  socket.emit('message', {
    text: "Welcome to the chat application!"
  });
});

http.listen(PORT, function () {
  console.log('Server started!');
});
