/* eslint-disable */
require('eventsource-polyfill')
var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')

hotClient.subscribe(function (event) {
  /**
   * Reload browser when HTMLWebpackPlugin emits a new index.html
   *
   * Currently disabled until jantimon/html-webpack-plugin#680 is resolved.
   * https://github.com/SimulatedGREG/electron-vue/issues/437
   * https://github.com/jantimon/html-webpack-plugin/issues/680
   */
  // if (event.action === 'reload') {
  //   window.location.reload()
  // }
})
