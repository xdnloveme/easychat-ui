const path = require('path')
const merge = require('webpack-merge')
const webpackBaseConfig = require('./webpack.base')

module.exports = merge(webpackBaseConfig, {
  entry: './src/index.js',
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/dist/',
    chunkFilename: '[id].js',
    filename: 'easychat-ui.common.js',
    libraryExport: 'default',
    library: 'EASYCHAT',
    libraryTarget: 'commonjs2',
  },
})
