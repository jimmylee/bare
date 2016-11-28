var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.development.config.js');

var app = express();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, '..', 'dist');

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

if (!isProduction) {
  var bundleStart = null;
  var compiler = webpack(webpackConfig);

  var bundler = new webpackDevServer(compiler, {
    publicPath: '/',
    contentBase: publicPath,
    inline: false,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: {
      colors: true
    },
    historyApiFallback: true
  });

  bundler.listen(3001, 'localhost', function () {
    console.log('Loaded: 127.0.0.1:3001');
  });
} else {
  app.use(express.static(publicPath));

  app.get('/*', function(req, res){
    res.sendFile(publicPath + '/index.html');
  });

  app.listen(port, function () {
    console.log('Loaded: 127.0.0.1:' + port);
  });
}
