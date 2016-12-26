
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './main.js',

  output: {
    path: './',
    filename: 'index.build.js',
  },

  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
    contentBase: './'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        query: {
          presets: ['es2015', 'react'],
          "plugins": ["transform-es2015-destructuring", "transform-object-rest-spread"]
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
      {test: /\.(png|jpg|jpeg|gif|bmp)$/i, loader: "url-loader?limit=10000"},
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