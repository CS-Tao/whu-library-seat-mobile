require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var { say } = require('cfonts')
var chalk = require('chalk')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

compiler.plugin('watch-run', (compilation, done) => {
  done()
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))


// serve Cordova javascript and plugins
var cordovaPlatformPath = path.join(__dirname, '../platforms/browser/www')
app.use('/plugins', express.static(path.join(cordovaPlatformPath, 'plugins')))
app.get(
  [
    '/cordova.js',
    '/cordova_plugins.js',
  ],
  function (req, res) {
    try {
      res.sendFile(path.join(cordovaPlatformPath, req.path))
    } catch(err) {
      console.log(err)
    }
})

function greeting () {
  const cols = process.stdout.columns
  let text = ''

  if (cols > 104) text = 'cordova-vue'
  else if (cols > 76) text = 'cordova-|vue'
  else text = false

  if (text) {
    say(text, {
      colors: ['yellow'],
      font: 'simple3d',
      space: false
    })
  } else console.log(chalk.yellow.bold('\n  cordova-vue'))

  var uri = 'http://localhost:' + port
  console.log(chalk.blue('  listening at ' + uri) + '\n')
  console.log(chalk.hex('#3eaf7c')('  getting ready...') + '\n')

  // when env is testing, don't need open it
  if (process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
}

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  greeting()
})
