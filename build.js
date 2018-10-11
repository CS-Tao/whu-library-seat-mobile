'use strict'

process.env.NODE_ENV = 'production'

const chalk = require('chalk')
const del = require('del')
const webpack = require('webpack')
const webConfig = require('./webpack.config')
const doneLog = chalk.bgGreen.white(' DONE ') + ' '

if (process.env.BUILD_TARGET === 'clean') clean()
else web()

function clean () {
  del.sync(['cordova/www/*', '!.gitkeep'])
  console.log(`\n${doneLog}\n`)
  process.exit()
}

function web () {
  del.sync(['cordova/www/*', '!.gitkeep'])
  webpack(webConfig, (err, stats) => {
    if (err || stats.hasErrors()) console.log(err)
    console.log(stats.toString({
      chunks: false,
      colors: true
    }))
    process.exit()
  })
}
