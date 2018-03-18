/* eslint-disable import/no-extraneous-dependencies */
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

module.exports = {
  entry: [
    './src/index.jsx',
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      title: 'millennial carcass',
    }),
  ],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },
}
