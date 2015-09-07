var config = require('./webpack.config.options.js');

module.exports = {
    entry: config['production_entry'],
    output: config['production_output'],
    resolve: config['resolve'],
    eslint: config['eslint'],

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
