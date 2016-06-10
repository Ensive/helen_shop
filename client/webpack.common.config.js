const path = require('path');

module.exports = {
  context: __dirname,
  entry: ['./assets/javascripts/App'],

  resolve: {
    root: [
      path.join(__dirname, 'scripts'),
      path.join(__dirname, 'assets/javascripts')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.config.js']
  },

  module: {
    loaders: [
      // {
      //   // test: /\.jsx$/,
      //   exclude: /(node_modules|bower_components)/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['es2015', 'react']
      //   }
      // }
    ]
  }
};