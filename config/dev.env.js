/**
 * Created by saikrishna on 16/10/18.
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')



module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
