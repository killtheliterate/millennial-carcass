/* eslint-disable import/no-extraneous-dependencies */
import { HotModuleReplacementPlugin } from 'webpack'
import merge from 'webpack-merge'
import common from './webpack.common.config.babel'

module.exports = merge(common, {
  entry: [
    'react-hot-loader/patch',
  ],
  devServer: {
    hot: true,
    host: '0.0.0.0',
    port: 4000,
  },
  mode: 'development',
  plugins: [
    new HotModuleReplacementPlugin(),
  ],
})
