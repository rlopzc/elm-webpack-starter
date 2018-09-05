const path = require("path");
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: 'elm-webpack-loader',
            options: {
              cwd: path.join(__dirname, '../'),
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
    contentBase: './src',
    historyApiFallback: true,
    inline: true,
    stats: 'errors-only',
  }
});
