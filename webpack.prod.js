const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const distPath = path.resolve(__dirname, 'dist');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  output: {
    path: distPath,
    filename: '[chunkhash].[name].js',
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
    }),
  ],
});
