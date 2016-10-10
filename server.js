var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var express = require('express');
var proxy = require('proxy-middleware');
var url = require('url');

var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var userId = 0;
const connections = [];

io.on('connection', function(socket){
  connections.push(socket);
  userId += 1;

  console.log('Server: User ' + userId + ' connected');

  socket.on('recieve message', msg => {
    console.log('Server: incoming message: ' + msg.name + ": " + msg.message);
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('new message', msg);
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('Server: User ' + userId + ' disconnected');
      const index = connections.indexOf(socket);
      connections.splice(index, 1);
    });
});

var server = new WebpackDevServer(webpack(config.clientConfig), {
    contentBase: __dirname,
    hot: true,
    quiet: false,
    noInfo: false,
    publicPath: "/assets/",

    stats: { colors: true }
});

server.listen(8081, "localhost", function() {});
app.listen(8083);
http.listen(3000, function(){
  console.log('Socket.IO listening on *:3000');
});
