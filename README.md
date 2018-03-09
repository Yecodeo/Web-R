:smile:
### WebR is a Webpack, ESlint, Babel, ReactJS starter kit

## Information

I will add some features later if you think that i should add something please open an issues

## Sending Feedback

We are always open to [your feedback](https://github.com/yecodeo/WebR/issues).

## Available Scripts

In the project directory, you can run:

### `yarn babel`

This allows you run the babel from your commandeLine

### `yarn webpack`

This allows you run the webpack from your commandeLine


### `yarn watch`

This commande will run the server in watch mode any change made in source code
will compiled after.

### `yarn server`

Run the internal server [ it using the webpack-dev-server package]

### `yarn prod`

Build the production project in /public folder.

##  Folder Structure

After cloning the repo , your project should look like this:

```
Web-R/
  src/
    components/
    containers/
    redux/
        actions/
        reducers/
    styles/
    utiles/
    public/
    App.css
    index.js
    index.css
    index.html
  README.md
  package.json
```
The **index.html** include the JavaScript automatically and compile it in /public
see *html-webpack-plugin*

## Included packages

****Developement Dependencies****
```
 "devDependencies": {
    "babel-core": "^6.26.0",
    "babel-eslint": "^8.1.2",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.6.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-es2016": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "css-loader": "^0.28.8",
    "eslint": "^4.14.0",
    "eslint-config-airbnb": "^16.1.0",
    "eslint-import-resolver-node": "^0.3.1",
    "eslint-plugin-babel": "^4.1.2",
    "eslint-plugin-import": "^2.8.0",
    "eslint-plugin-jsx-a11y": "^6.0.3",
    "eslint-plugin-react": "^7.5.1",
    "file-loader": "^1.1.6",
    "node-sass": "^4.7.2",
    "resolve-url-loader": "^2.2.1",
    "sass-loader": "^6.0.6",
    "style-loader": "^0.19.1",
    "webpack": "^3.10.0",
    "webpack-merge": "^4.1.2"
  }
```
****Dependencies****

```
  "dependencies": {
    "axios": "^0.17.1",
    "babel-polyfill": "^6.26.0",
    "capitalize": "^1.0.0",
    "classnames": "^2.2.5",
    "date-fns": "^1.29.0",
    "html-webpack-plugin": "^2.30.1",
    "path": "^0.12.7",
    "prop-types": "^15.6.0",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.6",
    "react-transition-group": "1",
    "reactstrap": "^4.8.0",
    "redux": "^3.7.2",
    "redux-promise": "^0.5.3",
    "shortid": "^2.2.8",
    "webpack-dev-server": "^2.9.7"
  }
```
****Webpack configuation****

```
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


```
