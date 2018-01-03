var path = require('path');
var webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');


var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['react', 'env']
            }
        }
    },

    ],
    loaders: [
      // Transform all ES6 files to plain old ES5.
      			{
      				test: /\.(js|jsx)$/,
      				exclude: [/bower_components/, /node_modules/, /styles/],
      				loader: 'babel-loader',
      			},
      			// Load images.
      			{
      				test: /\.(gif|jpe?g|png)$/,
      				loader: 'url-loader?limit=25000',
      				query: {
      					limit: 10000,
      					name: 'static/media/images/[name].[hash:8].[ext]'
      				}
      			},
      			{
      				test: /\.scss$/,
      				loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
      				include: path.resolve(__dirname, '../../')
      			},
      			{
      				test: /\.css$/,
      				loader: 'style!css?importLoaders=1'
      			},
      			// Fonts
      			{
      				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      				loader: 'url-loader?limit=10000&mimetype=application/font-woff',
      				query: {
      					name: 'static/media/files/[name].[hash:8].[ext]'
      				}
      			},
      			{
      				test: /\.svg$/,
      				use: [
      					{
      						loader: 'babel-loader',
      						query: {
      							presets: ['airbnb'],
      						},
      					},
      					{
      						loader: 'react-svg-loader',
      						query: {
      							jsx: true,
      						},
      					},
      				],
      			},
    ]
  },
 plugins: [HtmlWebpackPluginConfig]

};

module.exports = config;
