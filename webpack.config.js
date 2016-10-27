var pkg = require('./package.json');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: false,
  entry: {
    wePlayer : './src/wePlayer.js'
  },
  output: {
    path: './dist',
    filename: '[name].min.js',
    library: 'wePlayer',
    libraryTarget: 'umd',
    umdNameDefine: true
  },
  module: {
    loaders: [
      {
        test: /\.html$/, loader: 'html'
      },
      {
        test: /\.js$/, loader: 'babel'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      },
      {
        test: /\.json$/, loader: 'json'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin([
        pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
        'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
        pkg.license +' license'
    ].join('\n'))
    ,new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]

};