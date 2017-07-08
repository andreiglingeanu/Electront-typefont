var webpack = require('webpack');
var path = require('path');

module.exports = {
  watch: true,
  entry: {
    app: ['webpack/hot/dev-server', './app/entry.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/',
  },
  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
