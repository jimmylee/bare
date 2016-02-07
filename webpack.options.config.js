var webpack           = require('webpack');
var crypto            = require('crypto');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var autoprefixer      = require('autoprefixer');

var current_date      = (new Date()).valueOf().toString();
var random            = Math.random().toString();
var runtimeSha        = crypto.createHash('sha1').update(current_date + random).digest('hex');

module.exports = {
  'development_loader_js': {
    test: /\.js$/,
    loaders: [
      'babel-loader?cacheDirectory&presets[]=stage-2,presets[]=es2015',
      'eslint-loader'
    ],
    exclude: [/node_modules/]
  },

  'production_loader_js': {
    test: /\.js$/,
    loaders: [
      'babel-loader?cacheDirectory&presets[]=stage-2,presets[]=es2015',
      'eslint-loader'
    ],
    exclude: [/node_modules/]
  },

  'development_loader_css': {
    test: /\.css$/,
    loaders: [
      'style-loader',
      'css-loader?modules',
      "postcss-loader"
    ]
  },

  'production_loader_css': {
    test: /\.css$/,
    loader: ExtractTextPlugin.extract(
      "style-loader",
      "css-loader?modules",
      "postcss-loader"
    )
  },

  'loader_less': {
    test: /\.less$/,
    loaders: [
      'style-loader',
      'css-loader?modules',
      'postcss-loader',
      'less-loader'
    ]
  },

  'production_loader_less': {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract(
      "style-loader",
      "css-loader?modules&!postcss-loader!less-loader"
    )
  },

  'loader_html': {
    test: /\.html$/,
    loaders: [
      'html'
    ]
  },

  'resolve': {
    extensions: [
      '',
      '.js'
    ]
  },

  'development_output': {
    path: __dirname,
    publicPath: 'http://localhost:3001/',
    filename: "./dist/app.js"
  },

  'production_output': {
    path: __dirname + '/dist',
    filename: 'app.js'
  },

  'development_entry': {
    app: [
      "webpack/hot/dev-server",
      "./client/index.js"
    ]
  },

  'production_entry': {
    app: [
      "./client/index.js"
    ]
  },

  'postcss': function () {
    return [autoprefixer];
  },

  'eslint': {
    configFile: '.eslintrc',
    formatter: require('eslint-friendly-formatter')
  },

  'development_plugins': [
    new HtmlWebpackPlugin({
      template: __dirname + '/server/index.ejs',
      filename: 'index.html',
      inject: false,
      development: true,
      production: false
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: false
    })
  ],

  'production_plugins': [
    new ExtractTextPlugin('app.css'),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      exclude: [
        /test.*.js/,
        /fixture.*.js/
      ],
      minimize: true,
      mangle: true,
      compress: {
        drop_debugger: true,
        drop_console: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      template: __dirname + '/server/index.ejs',
      filename: 'index.html',
      inject: false,
      production: true,
      development: false,
      sha: runtimeSha
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: true,
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    })
  ]
};
