const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const srcPath = path.resolve(__dirname, 'src');

module.exports = {
  context: srcPath,
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    mainFields: ['browser', 'module', 'main'],
  },
  entry: {
    app: ['babel-polyfill', './index.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader",
        options: {
          useBabel: true,
        },
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendorGroup: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: 'index.html', //Name of template in ./src
      hash: true,
      chunks: ['manifest', 'vendor', 'app'],
      chunksSortMode: 'manual',
    })
  ],
};
