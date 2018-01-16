const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  module: {
    rules: [
    {
      enforce: "pre",
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: "eslint-loader",
    }, {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        // loader: 'wp-loader',
        // options: {
        //   presets: ['@babel/preset-env'],
        //   plugins: [require('@babel/plugin-transform-object-rest-spread')]
        // }
      }
    }, {
      test: /\.css$/,
      use:  ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
    }, {
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader",
        options: {
          strictMath: true,
          noIeCompat: true
        }

      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      }]
    }, {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    }]
  },
  resolve: {
    //给模块定义别名
    alias: {

    }
  },
  //声明外部模块
  // externals: ["react"],
  plugins: [
    new CleanWebpackPlugin(['dist']),
    
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html'
    }),

    new ExtractTextPlugin('[name].css')
    // new webpack.optimize.CommonsChunkPlugin({
    //    name: 'common' // Specify the common bundle's name.
    // })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    publicPath: '/'
  }
};