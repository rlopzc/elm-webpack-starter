const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  output: {
    filename: '[name].[hash].js'
  },

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: 'elm-webpack-loader'
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      }
    ]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    }),

    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, '../src/**/*.elm')),
      verbose: true,
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
    ]),

    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

    new UglifyJsPlugin({
      cache: true,
      parallel: true,
    }),

    new OptimizeCSSAssetsPlugin()
  ]
});
