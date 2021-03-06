const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  entry: './index.jsx',
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8080/',
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
    },
    contentBase: ['./', './src', './public'],
    inline: true,
    hot: true,
  },
};

module.exports = merge(commonConfig, devConfig);
