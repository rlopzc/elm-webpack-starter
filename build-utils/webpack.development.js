const path = require("path");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = () => ({
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    path.join(__dirname, '../src/index.js')
  ],

  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'elm-hot-loader'
          },
          {
            loader: 'elm-webpack-loader',
            options: {
              verbose: true,
              warn: true,
              debug: true
            }
          }
        ]
      },
      {
        test: /\.s?css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },

  plugins: [
    new DashboardPlugin(),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './src',
    inline: true,
    stats: 'errors-only',
  }
});
