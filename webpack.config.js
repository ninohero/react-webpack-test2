var webpack = require('webpack');  
var path = require('path');

module.exports = {  
  entry: [
    'webpack/hot/only-dev-server',
    "./js/app.js"
  ],
  resolve: {
    alias: {
      jquery: path.resolve(__dirname, 'resources', 'js', 'jquery-1.11.3.min.js')
    }
  },
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loaders: 'json-loader' }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ]

};
