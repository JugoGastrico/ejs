const path = require('path');

const config = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
          test: /\.ejs$/,
          use: [
              {
                loader: "ejs-webpack-loader",
                options: {
                  data: {title: "New Title", someVar:"hello world"},
                  htmlmin: true
                }
              }
          ]
      }
    ]
  }
};