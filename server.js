// var webpack = require('webpack')
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');
//
// const PORT = 8080;
// const HOST = 'localhost';
// const HOST_URI = `http://${HOST}:${PORT}`;
//
// const statOptions = {
//   colors: true,
//   hash: false,
//   timings: false,
//   chunks: false,
//   chunkModules: false,
//   modules: false,
//   children: true,
//   version: true,
//   cached: false,
//   cachedAssets: false,
//   reasons: false,
//   source: false,
//   errorDetails: false
// };
//
// const devConfig = Object.assign({}, config.clientConfig, {
//   name: 'dev-server',
//   entry: [
//     'webpack/hot/only-dev-server',
//     `webpack-dev-server/client?${HOST_URI}`,
//     config.clientConfig.entry
//   ],
//   output: Object.assign({}, config.clientConfig.output, {
//     publicPath: `${HOST_URI}/`
//   }),
//   module: {
//     loaders: [
//       {
//         test: /\.js$/,
//         include: config.CLIENT_DIR,
//         loader: 'react-hot-loader!babel-loader',
//       }
//     ]
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
// });
//
// const devServer = new WebpackDevServer(webpack(devConfig), {
//   hot: true,
//   stats: statOptions
// });
//
// devServer.listen(PORT, HOST, function (err) {
//   if (err) throw err;
//   console.log(`Webpack dev server listening at ${HOST_URI}`);
// });
//
// webpack(config.serverConfig).watch({}, (err, stats) => {
//   if (err) return console.error(err.message);
//   console.log(stats.toString(statOptions));
// });

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
  console.log('user connected');
  connections.push(socket);
  userId += 1;

  socket.on('message', msg => {
    console.log('incoming message to server:' + msg.messageNum + ": " + msg.name + ": " + msg.message);
      connections.forEach(connectedSocket => {
        if (connectedSocket !== socket) {
          connectedSocket.emit('chat message', msg);
        }
      });
    });

    socket.on('disconnect', () => {
      console.log('user disconnected');
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
  console.log('listening on *:3000');
});
