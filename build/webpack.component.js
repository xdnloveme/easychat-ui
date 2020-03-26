const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')
const components = require('../components.json')

module.exports = merge(webpackBaseConfig, {
  entry: components,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    chunkFilename: '[id].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
})
