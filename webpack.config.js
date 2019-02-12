const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
	entry: {
    popin_bundle: ['./assets/js/bundle.js', './assets/sass/styles.scss' ]
	},
	output: {
		filename: './dist/[name].js',
		sourceMapFilename: './assets/[name].map',
	},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [require('babel-plugin-transform-object-rest-spread')]
          }
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                sourceMap: true,
                sourceMapFilename: 'style.css.map'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                sourceMapFilename: 'style.css.map',
                plugins: () => [autoprefixer]
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,

              }
            },
          ],
          fallback: 'style-loader',
          publicPath: '/assets'
        })
      },
    ]
  },
  devtool: 'source-map',
  plugins: [
    // Destroy/Cleans ./dist folder
    new CleanWebpackPlugin('./dist/'),
    // Create/Compiles CSS file
    new ExtractTextPlugin({
      filename: './dist/popin_styles.css',
      allChunks: true
    }),
    // Uglify
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_console: true
        }
      }
    })
  ]
}