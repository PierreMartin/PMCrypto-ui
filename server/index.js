import express from 'express';
import webpack from 'webpack';
import { isDebug } from '../config/app';
import { connect } from './db';
// import initPassport from './init/passport';
import initExpress from './init/express';
import initRoutes from './init/routes';
import renderMiddleware from './render/middleware';
import { initP2PServer } from './logic/p2p';
import { initWallet } from './logic/wallet';

const p2pPort = parseInt(process.env.P2P_PORT, 10) || 6001;
const app = express();


// connect to MongoDB using mongoose - register mongoose Schema
connect();

// passport configuration
/* initPassport(); */

if (isDebug) {
  // enable webpack hot module replacement
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const webpackConfig = require('../webpack/webpack.config');
  const devBrowserConfig = webpackConfig({ browser: true });
  const compiler = webpack(devBrowserConfig);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: devBrowserConfig.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

// Bootstrap application settings
initExpress(app);

// init peer to peer blockchain
initP2PServer(p2pPort);

// ini wallet (create private key)
initWallet();

// Note: Some of these routes have passport and database model dependencies
initRoutes(app);


app.get('*', renderMiddleware);

app.listen(app.get('port'));
