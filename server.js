var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

const PORT = 8080;
const HOST = 'localhost';
const HOST_URI = `http://${HOST}:${PORT}`;

const statOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};

const devConfig = Object.assign({}, config.clientConfig, {
  name: 'dev-server',
  entry: [
    'webpack/hot/only-dev-server',
    `webpack-dev-server/client?${HOST_URI}`,
    config.clientConfig.entry
  ],
  output: Object.assign({}, config.clientConfig.output, {
    publicPath: `${HOST_URI}/`
  }),
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: config.CLIENT_DIR,
        loader: 'react-hot-loader!babel-loader',
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});

const devServer = new WebpackDevServer(webpack(devConfig), {
  hot: true,
  stats: statOptions
});

devServer.listen(PORT, HOST, function (err) {
  if (err) throw err;
  console.log(`Webpack dev server listening at ${HOST_URI}`);
});

webpack(config.serverConfig).watch({}, (err, stats) => {
  if (err) return console.error(err.message);
  console.log(stats.toString(statOptions));
});
