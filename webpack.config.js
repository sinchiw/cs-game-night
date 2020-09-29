const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    port: 8080,
    proxy: {
      '/': 'http://localhost:4000',
    },
    hot: true,
  },
  entry: './client/index.js',
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx',]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './client/index.html',
    }),
  ]
}