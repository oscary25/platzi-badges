const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js",
    publicPath: "http://localhost:3000/",
    chunkFilename: "js/[id].[chunkhash].js",
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    open: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/",
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      // title: "webpack-dev-server",
      template: path.resolve(__dirname, "public/index.html"),
    }),
  ],
};
