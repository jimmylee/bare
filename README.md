# Bare
> Single page application skeleton for production and development in 2015 & 2016.

I use this repository to start projects where I want to achieve the smallest filesize footprint possible while using my favorite tools. The notable tools I use are:

* [RiotJS](http://riotjs.com/)
* [Webpack](https://webpack.github.io/)
* [LESS](https://github.com/less/less.js)
* [Babel](https://babeljs.io/)
* [Eslint](http://eslint.org/)
* [PostCSS](https://github.com/postcss/postcss)

In your projects you will also find it really easy to expand and use different tools. You could also just use [React](https://facebook.github.io/react/) or [Preact](https://github.com/developit/preact) like everyone will tell you to do.

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

View /dist folder using finder or command line. Here are the sizes for the production build:

```sh
app.js - 22.5kb
app.css - 119 bytes
```

You could probably gzip `app.js` for more savings.

# Feedback
Just slang your feelings to me on twitter [@meanjim](https://www.twitter.com/meanjim).
