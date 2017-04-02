const webpack = require('webpack');

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
            options: {
              include: [
                'src/**/*.ts',
                'app/**/*.ts',
              ],
            },
          },
          {
            loader: 'angular2-template-loader',
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
  plugins: [],
  output: {
    path: `${__dirname}/build/`,
    publicPath: '/build/',
    filename: 'app.js'
  }
};

if (process.env.NODE_ENV === 'prod') {
  config.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      }
    }),
  ];

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
