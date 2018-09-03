const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin');

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  console.log(`Building for: ${mode}`);

  return webpackMerge(
    {
      mode,

      resolve: {
        alias: { // Delete this if you don't need jQuery
          jquery: 'jquery/dist/jquery.min.js'
        }
      },

      module: {
        noParse: /\.elm$/,
        rules: [
          {
            test: /\.(eot|ttf|woff|woff2|svg)$/,
            use: 'file-loader?publicPath=../../&name=assets/css/[hash].[ext]',
          },
        ]
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/assets/index.html',
          inject: 'body',
          filename: 'index.html',
        }),

        new webpack.ProvidePlugin({ //Delete this plugin if you don't need jQuery/Bootstrap
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          Popper: 'popper',
        }),

        new StyleLintPlugin(),

        new CopyWebpackPlugin([
          { from: 'src/assets/favicon.ico' }
        ]),
      ]
    },
    modeConfig(mode),
    presetConfig({ mode, presets }),
  )
};
