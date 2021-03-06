const webpack = require('webpack')
const path = require('path')

module.exports = [
  {
    target: 'node',
    entry: path.join(__dirname, 'src/index.js'),
    output: {
      filename: 'index.js',
      path: path.join(__dirname, 'dist')
    },
    devtool: 'inline-source-map',
    node: {
      __dirname: false,
      __filename: false
    },
    plugins: [
      new webpack.EnvironmentPlugin({
        NODE_ENV: 'development'
      })
    ],
    externals: [require('webpack-node-externals')()],
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              ['env', {
                targets: {
                  node: 'current'
                }
              }]
            ]
          }
        }
      ]
    }
  }
]
