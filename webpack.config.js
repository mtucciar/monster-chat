var path = require('path');
var webpack = require('webpack');

const CLIENT_DIR = path.resolve(__dirname, 'client/src');
const SERVER_DIR = path.resolve(__dirname, 'server/generated');
const DIST_DIR = path.resolve(__dirname, 'dist');

var babelLoader = {
  test: /\.jsx?$/,
  loader: 'babel-loader',
  include: CLIENT_DIR,
  query: {
      presets: ['es2015', 'react'],
      plugins: ["transform-object-rest-spread"]
    }
};

var reactHotAndBabelLoader = {
  test : /\.jsx?/,
  include : CLIENT_DIR,
  loaders: ['react-hot', 'babel?cacheDirectory']
};

var clientConfig = {
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    modulesDirectories: ['node_modules']
  },
  module: {
    loaders : [babelLoader, reactHotAndBabelLoader],
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

var serverConfig = {
  target:'node',
  context: CLIENT_DIR,
  entry: {
    app: './index.js'
  },
  output: {
    path: SERVER_DIR,
    filename: 'server.js'
  },
  module: {
    loaders : [babelLoader, reactHotAndBabelLoader],
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};

module.exports = {CLIENT_DIR, SERVER_DIR, DIST_DIR, clientConfig, serverConfig};
