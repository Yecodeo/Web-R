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
                presets: ['react', 'env'],
                plugins: ['transform-class-properties']
            }
        }
      },
      {
				test: /\.sass$/,
        exclude: /(node_modules|bower_components)/,
        use: ["style-loader", "css-loader","sass-loader" ] // compiles Sass to CSS
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}  
          }
        ]
      },
    ],
    loaders: [
			{
				test: /\.sass$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader', 'resolve-url-loader?sourceMap', 'sass-loader?sourceMap'],
				include: path.resolve(__dirname, '../../')
			},
			{
				test: /\.css$/,
				loader: 'style!css?importLoaders=1'
			}
    ]
  },
 plugins: [HtmlWebpackPluginConfig]

};

module.exports = config;
