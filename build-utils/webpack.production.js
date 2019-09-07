const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
  output: {
    filename: '[name].[contenthash].js'
  },

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: {
          loader: 'elm-webpack-loader',
          options: {
            optimize: true,
          },
        },
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

  optimization: {
    minimizer: [
      // https://elm-lang.org/0.19.0/optimize
      new TerserPlugin({
        terserOptions: {
          mangle: false,
          compress: {
            pure_funcs: ['F2','F3','F4','F5','F6','F7','F8','F9','A2','A3','A4','A5','A6','A7','A8','A9'],
            pure_getters: true,
            keep_fargs: false,
            unsafe_comps: true,
            unsafe: true,
          },
        },
      }),
      new TerserPlugin({
        terserOptions: { mangle: true },
      }),
    ],
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css',
    }),

    new PurgecssPlugin({
      paths: glob.sync(path.join(__dirname, '../src/**/*.elm'), { nodir: true }),
    }),

    new CopyWebpackPlugin([
      { from: 'src/assets/images', to: 'assets/images' },
    ]),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      cache: true,
    }),

    new OptimizeCSSAssetsPlugin()
  ]
});
