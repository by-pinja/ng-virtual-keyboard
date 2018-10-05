const webpack = require('webpack');
const path = require('path');

const _root = path.resolve(__dirname, '..');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);

  return path.join.apply(path, [_root].concat(args));
}

const config = {
  resolve: {
    extensions: [
      '.ts',
      '.webpack.js',
      '.web.js',
      '.js',
    ],
    alias: {
      '@protacon/ng-virtual-keyboard': '../src/index.ts',
    }
  },
  devtool: 'source-map',
  entry: './app/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'angular2-template-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'raw-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'raw-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      root('./src'), // location of your src
      {} // a map of your routes
    ),
  ],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

if (process.env.NODE_ENV === 'prod') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    })
  );

  config.module.rules.push({
    test: /\.ts$/,
    use: [
      {
        loader: 'strip-loader?strip[]=debug,strip[]=console.log',
      },
    ],
  });
}

module.exports = config;
