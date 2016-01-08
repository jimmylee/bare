var config = require('./webpack.config.options.js');

module.exports = {
    entry:   config['development_entry'],
    output:  config['development_output'],
    resolve: config['resolve'],
    eslint:  config['eslint'],

    module: {
        loaders: [
            config['development_loader_js'],
            config['development_loader_css'],
            config['loader_less'],
            config['loader_html']
        ]
    },

    plugins: config['development_plugins']
};
