const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container
const path = require('path')

module.exports = (_, argsv) => ({
  // entry: './src/index',
  // mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8080,
    hotOnly: true
  },
  output: {
    publicPath: argsv.mode === 'development' ? 'http://localhost:8080/' : 'https://mf-host-app.vercel.app/'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react']
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {},
      shared: require('./package.json').dependencies
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
})
