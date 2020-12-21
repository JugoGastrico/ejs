const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: false,
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "myapp"),
  },
};
