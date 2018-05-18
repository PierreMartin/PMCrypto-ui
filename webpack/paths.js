const path = require('path');

// process.cwd() is used instead '__dirname' to determine the correct base directory
const CURRENT_WORKING_DIR = process.cwd();

module.exports = {
  app: path.resolve(CURRENT_WORKING_DIR, 'app'),
  assets: path.resolve(CURRENT_WORKING_DIR, 'public', 'assets'),
  compiled: path.resolve(CURRENT_WORKING_DIR, 'compiled'),
  public: '/assets/', // use absolute path for css-loader
  modules: path.resolve(CURRENT_WORKING_DIR, 'node_modules')
};

