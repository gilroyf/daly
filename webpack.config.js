const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [ 
          'style-loader', 
          'css-loader', 
          'sass-loader'
        ]
      },
      { 
        test: /\.(png|jpg|gif)$/,
        include: path.join(__dirname, 'dist/images'),
        loader: 'url-loader' 
     } 
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    historyApiFallback: true
  }
};