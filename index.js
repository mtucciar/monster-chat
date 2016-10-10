// import monsterServer from './server';
// import monsterSocketServer from './server/socket-server';
//
// var config = {};
//
// if (process.env.NODE_ENV === 'development') {
//   config.port = 3000;
//   config.host = 'localhost';
//   server.locals.assetPath = 'http://localhost:8080/';
//   server.locals.isDevelopment = true;
// }
//
// const theServer = monsterServer.listen(config.port, config.host, function (err) {
//   if (err) throw err;
//   console.log('Web server listening at http://%s:%d', config.host, config.port);
// });
//
// monsterSocketServer(theServer);

var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

app.use('/assets', proxy(url.parse('http://localhost:8081/assets')));

app.get('/*', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
