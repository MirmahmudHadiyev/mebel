
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack");
// const CopyPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: path.resolve(__dirname, '../src/index.tsx'),
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Mebel',
      favicon: "./src/assets/images/Logo1.png",
      template: path.resolve(__dirname, '..', './public/index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_URL' : JSON.stringify('https://fakestoreapi.com/'),
      }
    })
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/app/components/'),
      store: path.resolve(__dirname, '../src/app/store/'),
      assets: path.resolve(__dirname, '../src/assets/'),
      constants: path.resolve(__dirname, '../src/constants/'),
      hooks: path.resolve(__dirname, '../src/app/hooks'),
    },
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  stats: 'errors-only',
  performance: {
    hints: false
  }
}
