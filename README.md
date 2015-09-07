# Bare
> Single page application skeleton for production and development in 2015.

Out of my passion for minimal surface area tools and my desire to become more familiar with new tools, I’ve produced a skeleton for projects that I now use for front end engineering labor in production. These are the notable tools that are used:

* RiotJS
* Webpack
* LESS
* ES6 via Babel
* ESLint

With these tools, my research and this skeleton, I’ve managed to ship products to users while keeping the bundle size under 200kbs before gzip.

##Prerequisites
* [Node.js](http://nodejs.org/)
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
