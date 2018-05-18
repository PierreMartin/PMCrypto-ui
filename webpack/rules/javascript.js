const PATHS = require('../paths');

module.exports = ({ production = false, browser = false } = {}) => {
  const enableHotModuleReplacement = !production && browser;
  const createPresets = enableHotModuleReplacement => {
    const presets = ['es2015', 'react', 'stage-0'];
    return enableHotModuleReplacement ? ['react-hmre', ...presets]: presets;
  };
  const presets = createPresets(enableHotModuleReplacement);

  const plugins = production ? [
      'transform-react-remove-prop-types',
      'transform-react-constant-elements',
      'transform-react-inline-elements'
  ]: [];

	let modules = [
		{
			loader: 'babel-loader',
			options: {
				presets,
				plugins
			}
		}
	];

	if (enableHotModuleReplacement) {
		modules.push({
			// enforce: "pre", // only webpack 3
			loader: "eslint-loader",
			options: {
				emitWarning: true
			}
		})
	}

	return {
		test: /\.js$|\.jsx$/,
		use: modules,
		exclude: PATHS.modules
	};
};
