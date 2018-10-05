let path = require('path');
let webpack = require('webpack');

module.exports = {
  entry: {
    '@protacon/ng-virtual-keyboard': path.join(__dirname, 'src', 'index.ts'),
  },
  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.json',
      '.css',
      '.html',
    ],
  },
  /*
  resolveLoader: {
    root: path.join(__dirname, 'node_modules'),
  },
  */
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'ng-virtual-keyboard.umd.js',
    library: [
      'ng-virtual-keyboard',
    ],
    libraryTarget: 'umd',
  },
  externals: [
    /^rxjs\//,    //.... any other way? rx.umd.min.js does work?
    /^@angular\//,
  ],
  devtool: 'source-map',
  module: {
    rules: [
      { // Support for .ts files.
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
    ],
  },
};
