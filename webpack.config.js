const path = require('path');
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

      entry: {
        main: path.join(__dirname, './src/index.js'),
        vendor: path.join(__dirname, './src/assets/js/vendor.js'),
      },

      plugins: [
        new HtmlWebpackPlugin({
          template: 'src/assets/index.html',
          inject: 'body',
          filename: 'index.html',
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
