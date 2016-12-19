
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',

  output: {
    path: './',
    filename: 'index.js',
  },

  devServer: {
    inline: true,
    port: 8080
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallbackLoader: 'style-loader',
          loader: 'to-string-loader!css-loader!resolve-url-loader'
        })
        // loaders: ['to-string-loader', 'css-loader', 'resolve-url-loader']
      },
      {test: /\.(svg|woff|woff2|ttf|eot)$/i, loader: "file?name=/assets/fonts/[name].[ext]"},
      {test: /\.(png|jpg|jpeg|gif|bmp)$/i, loader: "file?name=/assets/images/[name].[ext]"},
      /*
       * Json loader support for *.json files.
       *
       * See: https://github.com/webpack/json-loader
       */
    ]
  },
  plugins: [
    new ExtractTextPlugin( "App.css" )
  ],
  node: {
    fs: "empty"
  }
};