var path = require('path');
var webpack = require('webpack');
var cleanBuild = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

if (process.env.NODE_ENV !== 'development') {
  module.exports = {
    devtool: 'source-map',
    entry: [
      './src/index.jsx'
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js',
      // export itself to a UMD require library convention
      libraryTarget: "umd",
      // name of the global var
      library: "dgxReactButtons"
    },
    externals: {
      // Required in order to ignore library within other components
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['babel']
        }
      ]
    },
    plugins: [
      new cleanBuild(['dist']),
      new ExtractTextPlugin('styles.css'),
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        compress: {
          warnings: true
        }
      })
    ]
  };
} else {
  module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/only-dev-server',
      './src/app.jsx'
    ],
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'index.min.js',
      publicPath: '/'
    },
    plugins: [
      new cleanBuild(['dist']),
      new ExtractTextPlugin('styles.css'),
      new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.scss?$/,
          loader: 'style!css!sass',
          include: path.resolve(__dirname, 'src/styles')
        }
      ]
    }
  };
}