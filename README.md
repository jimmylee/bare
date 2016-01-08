# Bare
> Single page application skeleton for production and development in 2015 & 2016.

I use this repository to start projects where I want to achieve the smallest filesize footprint possible while using my favorite tools. The notable tools I use are:

* [RiotJS](http://riotjs.com/)
* [Webpack](https://webpack.github.io/)
* [LESS](https://github.com/less/less.js)
* [Babel](https://babeljs.io/)
* [eslint](http://eslint.org/)

In your projects you will also find it really easy to expand and use different tools.

##Prerequisites
* [Node.js](http://nodejs.org/)
* Please update node if you already have it.
* Git installed, use 'git --version' to check.

##Setup Development
```sh
git clone https://github.com/meanJim/bare.git && cd bare && npm install
npm start
```

View **localhost:3001** in your browser

##Run Production
```sh
npm run deploy
```

View **localhost:3000** in your browser

##Just Build Production Assets
```sh
npm run production
```

View /dist folder using finder or command line. The default production bundle size pre gzip is 14 kb.

# Feedback
Just slang your hate to me on twitter [@meanjim](https://www.twitter.com/meanjim).
