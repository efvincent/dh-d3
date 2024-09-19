const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/chart.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  devtool: "source-map",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "content/*", to: "[name][ext]" },
        { from: "index.html", to: "index.html" },
      ],
    }),
  ],
};
