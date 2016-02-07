var config = require('./webpack.options.config.js');

module.exports = {
  entry: config['production_entry'],
  output: config['production_output'],
  resolve: config['resolve'],
  eslint: config['eslint'],
  postcss: config['postcss'],

  module: {
    loaders: [
      config['production_loader_js'],
      config['production_loader_css'],
      config['production_loader_less'],
      config['loader_html']
    ]
  },

  plugins: config['production_plugins']
};
