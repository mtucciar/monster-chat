import monsterServer from './server';
import monsterSocketServer from './server/socket-server';

var config = {};

if (process.env.NODE_ENV === 'development') {
  config.port = 3000;
  config.host = 'localhost';
  server.locals.assetPath = 'http://localhost:8080/';
  server.locals.isDevelopment = true;
}

const theServer = monsterServer.listen(config.port, config.host, function (err) {
  if (err) throw err;
  console.log('Web server listening at http://%s:%d', config.host, config.port);
});

monsterSocketServer(theServer);
