const components = require.context('.', true, /\.\/(.*)\/index\.js$/);

components.keys().forEach(function(key) {
    components(key);
});
