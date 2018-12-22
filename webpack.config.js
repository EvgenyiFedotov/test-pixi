const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const envConfig = require('dotenv').config();
const createConfig = require('./webpack/createConfig');

const ENV = envConfig.parsed;
const mode = 'development'; // development | production
let devtool = 'source-map';
const result = [];

if (mode === 'production') {
  devtool = undefined;
}

if (ENV.CLIENT_SIDE === 'true') {
  result.push(
    createConfig({
      entry: {
        main: './src/client/main/index.js',
      },
      output: {
        path: `${__dirname}/dist/client`,
        chunkFilename: '[name].js',
        publicPath: '/',
      },
      mode,
      devtool,
      node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
      plugins: [
        new BrowserSyncPlugin({
          proxy: {
            target: 'http://localhost:5000/',
          },
        }),
      ],
    }),
  );
}

if (ENV.SERVER_SIDE === 'true') {
  result.push(
    createConfig({
      entry: {
        index: './src/server/index.js',
      },
      output: {
        path: `${__dirname}/dist/server`,
      },
      mode,
      devtool,
      target: 'node',
      externals: ['uws'],
      stats: {
        warnings: false,
      },
    }),
  );
}

module.exports = result;
