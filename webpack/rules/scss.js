const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const postcssReporter = require('postcss-reporter');
const PATHS = require('../paths');

module.exports = ({ production = false, browser = false } = {}) => {
	const localIdentName = 'localIdentName=[name]__[local]___[hash:base64:5]';

	const createCssLoaders = embedCssInBundle => ([
		{
			loader: embedCssInBundle ? 'css-loader' : 'css-loader/locals',
			options: {
				localIdentName,
				sourceMap: true,
				modules: true,
				importLoaders: 1
			}
		},
		{
			loader: 'postcss-loader',
			options: {
				ident: 'postcss',
				plugins: [
					postcssImport({ path: path.resolve(PATHS.app, './css') }),
					postcssCssnext({ browsers: ['> 1%', 'last 2 versions'] }),
					postcssReporter({ clearMessages: true })
				]
			}
		}
	]);

	// client side :
	const createBrowserLoaders = extractCssToFile => loaders => {
		// if production :
		if (extractCssToFile) {
			return ExtractTextPlugin.extract({fallback: 'style-loader', use: [...loaders, 'sass-loader']});
		}

		// if dev :
		return [{ loader: 'style-loader' }, ...loaders, 'sass-loader']; // loaded at right 1st to left last
	};

	const serverLoaders = createCssLoaders(false);
	const browserLoaders = createBrowserLoaders(production)(createCssLoaders(true));

	return {
		test: /\.scss$/,
		use: browser ? browserLoaders : serverLoaders,
		include: PATHS.app
	};
};
