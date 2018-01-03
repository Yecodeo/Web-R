:smile:
### WebR is a Webpack, ESlint, Babel, ReactJS starter kit

## Table of Contents


- [Available Scripts](#available-scripts)
  - [Yarn babel](#npm-start)
  - [Yarn webpack](#npm-test)
  - [Yarn watch](#npm-run-build)
  - [Yarn prod](#npm-run-eject)
  - [Yarn server](#npm-run-eject)
- [Supported Language Features and Polyfills](#supported-language-features-and-polyfills)
- [Syntax Highlighting in the Editor](#syntax-highlighting-in-the-editor)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Debugging in the Editor](#debugging-in-the-editor)
- [Formatting Code Automatically](#formatting-code-automatically)
- [Changing the Page `<title>`](#changing-the-page-title)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
- [Code Splitting](#code-splitting)
- [Adding a Stylesheet](#adding-a-stylesheet)
- [Post-Processing CSS](#post-processing-css)
- [Adding a CSS Preprocessor (Sass, Less etc.)](#adding-a-css-preprocessor-sass-less-etc)
- [Adding Images, Fonts, and Files](#adding-images-fonts-and-files)
- [Using the `public` Folder](#using-the-public-folder)
  - [Changing the HTML](#changing-the-html)
  - [Adding Assets Outside of the Module System](#adding-assets-outside-of-the-module-system)
  - [When to Use the `public` Folder](#when-to-use-the-public-folder)
- [Using Global Variables](#using-global-variables)
- [Adding Bootstrap](#adding-bootstrap)
  - [Using a Custom Theme](#using-a-custom-theme)
- [Adding Flow](#adding-flow)
- [Adding Custom Environment Variables](#adding-custom-environment-variables)
  - [Referencing Environment Variables in the HTML](#referencing-environment-variables-in-the-html)
  - [Adding Temporary Environment Variables In Your Shell](#adding-temporary-environment-variables-in-your-shell)
  - [Adding Development Environment Variables In `.env`](#adding-development-environment-variables-in-env)
- [Can I Use Decorators?](#can-i-use-decorators)
- [Integrating with an API Backend](#integrating-with-an-api-backend)
  - [Node](#node)
  - [Ruby on Rails](#ruby-on-rails)
- [Proxying API Requests in Development](#proxying-api-requests-in-development)
  - ["Invalid Host Header" Errors After Configuring Proxy](#invalid-host-header-errors-after-configuring-proxy)
  - [Configuring the Proxy Manually](#configuring-the-proxy-manually)
  - [Configuring a WebSocket Proxy](#configuring-a-websocket-proxy)
- [Using HTTPS in Development](#using-https-in-development)
- [Generating Dynamic `<meta>` Tags on the Server](#generating-dynamic-meta-tags-on-the-server)
- [Pre-Rendering into Static HTML Files](#pre-rendering-into-static-html-files)
- [Injecting Data from the Server into the Page](#injecting-data-from-the-server-into-the-page)
- [Running Tests](#running-tests)
  - [Filename Conventions](#filename-conventions)
  - [Command Line Interface](#command-line-interface)
  - [Version Control Integration](#version-control-integration)
  - [Writing Tests](#writing-tests)
  - [Testing Components](#testing-components)
  - [Using Third Party Assertion Libraries](#using-third-party-assertion-libraries)
  - [Initializing Test Environment](#initializing-test-environment)
  - [Focusing and Excluding Tests](#focusing-and-excluding-tests)
  - [Coverage Reporting](#coverage-reporting)
  - [Continuous Integration](#continuous-integration)
  - [Disabling jsdom](#disabling-jsdom)
  - [Snapshot Testing](#snapshot-testing)
  - [Editor Integration](#editor-integration)
- [Developing Components in Isolation](#developing-components-in-isolation)
  - [Getting Started with Storybook](#getting-started-with-storybook)
  - [Getting Started with Styleguidist](#getting-started-with-styleguidist)
- [Making a Progressive Web App](#making-a-progressive-web-app)
  - [Opting Out of Caching](#opting-out-of-caching)
  - [Offline-First Considerations](#offline-first-considerations)
  - [Progressive Web App Metadata](#progressive-web-app-metadata)
- [Analyzing the Bundle Size](#analyzing-the-bundle-size)
- [Deployment](#deployment)
  - [Static Server](#static-server)
  - [Other Solutions](#other-solutions)
  - [Serving Apps with Client-Side Routing](#serving-apps-with-client-side-routing)
  - [Building for Relative Paths](#building-for-relative-paths)
  - [Azure](#azure)
  - [Firebase](#firebase)
  - [GitHub Pages](#github-pages)
  - [Heroku](#heroku)
  - [Netlify](#netlify)
  - [Now](#now)
  - [S3 and CloudFront](#s3-and-cloudfront)
  - [Surge](#surge)
- [Advanced Configuration](#advanced-configuration)
- [Troubleshooting](#troubleshooting)
  - [`npm start` doesn’t detect changes](#npm-start-doesnt-detect-changes)
  - [`npm test` hangs on macOS Sierra](#npm-test-hangs-on-macos-sierra)
  - [`npm run build` exits too early](#npm-run-build-exits-too-early)
  - [`npm run build` fails on Heroku](#npm-run-build-fails-on-heroku)
  - [`npm run build` fails to minify](#npm-run-build-fails-to-minify)
  - [Moment.js locales are missing](#momentjs-locales-are-missing)
- [Something Missing?](#something-missing)

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
    actions/
    components/
    containers/
    images/
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
  "babel-preset-env": "^1.6.1",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-es2016": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "css-loader": "^0.28.7",
  "eslint": "^4.14.0",
  "eslint-config-airbnb": "^16.1.0",
  "eslint-import-resolver-node": "^0.3.1",
  "eslint-plugin-import": "^2.8.0",
  "eslint-plugin-jsx-a11y": "^6.0.3",
  "eslint-plugin-react": "^7.5.1",
  "file-loader": "^1.1.6",
  "style-loader": "^0.19.1",
  "webpack": "^3.10.0"
},
```
****Dependencies****

```
"dependencies": {
  "html-webpack-plugin": "^2.30.1",
  "path": "^0.12.7",
  "react": "^16.2.0",
  "react-dom": "^16.2.0",
  "babel-polyfill": "^6.26.0",
  "webpack-dev-server": "^2.9.7"
}
```
****Webpack configuation ****

```
var path = require('path');             // require to resolve paths
var webpack = require('webpack');       // :smile: why not

/*
* Routine for html-webpack-plugin
* here you can set the html file where the React library will called
*/
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

/*
* Var to save resolved path of public/ and src/
*/
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

```
