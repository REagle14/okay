var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

config.output - {
	filename: '[name].bundle.js',
	chunkFilename: '[id].bundle.js',
	publicPath: '',
	path: path.resolve(__dirname, 'dist')
};

config .devtool = '';
config.plugins = config.plugins.concat([
	new webpack.optimize.UglifyJsPlugin({
		sourceMap: false,
		mangle: false
	})
]);

module.exports = config;