/**
 * Created by saikrishna on 16/10/18.
 */
'use strict'
require('eventsource-polyfill')
// var hotClient = require('webpack-hot-middleware/client?noInfo=true&reload=true')
var hotClient = require('webpack-hot-middleware/client?path=/newView/__webpack_hmr&noInfo=true&reload=true')
hotClient.subscribe(function (event) {
  if (event.action === 'reload') {
    window.location.reload()
  }
})
