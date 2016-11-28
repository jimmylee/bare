# Bare
> Single page application skeleton for production and development in 2015 & 2016.

I use this repository to start projects where I want to achieve a small filesize footprint while using popular tools.

* [Preact](http://preactjs.com/)
* [Webpack](https://webpack.github.io/)
* [LESS](https://github.com/less/less.js)
* [Babel](https://babeljs.io/)
* [Eslint](http://eslint.org/)
* [PostCSS](https://github.com/postcss/postcss)

##Prerequisites
* [Node.js](http://nodejs.org/)
* Please update node if you already have it.
* Git installed, use 'git --version' to check.

##Setup Development
```sh
git clone https://github.com/meanJim/bare.git && cd bare && npm install
npm start
```

View **localhost:3001** in your browser. Now you have development with hot loading and autoprefixing.

##Run Production
```sh
npm run deploy
```

View **localhost:3000** in your browser. You can use this when you're deploying on some box somewhere.

##Just Build Production Assets
```sh
npm run production
```

View /dist folder using finder or command line. Here is what you start out with.

```sh
app.js - 10.8kb
app.css - 119 bytes
```

You could probably gzip `app.js` for more savings.

# Feedback
Just slang your feelings to me on twitter [@meanjim](https://www.twitter.com/meanjim).
