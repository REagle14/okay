var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	output: {
		path: path.resolve(__dirname, 'build'),
		chunkFilename: '[id].bundle.js',
		filename: '[name].bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel-loader' },
			{ test: /\.css$/, loaders: ['style-loader', 'css-loader'], minimize: false },
			{ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
			{ test: /\.html$/, loader: 'html', query: { minimize: false } },
			{ test: /\.json$/, loaders: ['json-loader'] },
			{ test: /\.(eot|jpe?g|png|woff|woff2|eot|ttf|gif|svg)(\?v=[0-9]\.[0-9]\.[0-9])$/, loader: 'url-loader' },
			{ test: /\.(eot|jpe?g|png|woff|woff2|eot|ttf|gif|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=[name].[ext]'}
		]
	},
	resolve: {
		extensions: ['', '.js', '.css', '.scss'],
		root: [
			path.join(__dirname, '/node_modules'),
			path.join(__dirname, '/src/app/')
		],
		alias: {
			'angularMaterialCSS': 'angular-material/angular-material.min.css',
			'bootstrap': 'bootstrap/dist/css/bootstrap.min.css',
			'font-awesome': 'font-awesome/css/font-awesome.min.css',
			'main': 'app.scss',
		}
	},
	htmlLoader: {
		minimize: true,
		remoteAttributeQuotes: false,
		caseSensitive: true
	},
	jshint: {
		esversion: 6,
		emitErrors: true,
		failOnHint: false
	},
	entry: {
		app: path.resolve(__dirname, 'src/app/app.js'),
		vendor: [
			'@uirouter/angularjs',
			'angular',
			'angular-messages',
			'angular-material',
			'bootstrap',
			'font-awesome',
			'jquery',
			'lodash'
		],
		styles: [
			'angularMaterialCSS',
			'bootstrap',
			'main'
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/src/app/index.html',
			inject: 'body',
			hash: true
		}),
		new webpack.ProvidePlugin({
			$: "jquery",
			jQuery: "jquery"
		}),
		new webpack.optimize.CommonsChunkPlugin({ names: ['vendor', 'styles'], filenames: '[name].js', minChunks: Infinity }),
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 15 })
	],
	devtool: 'inline-source-map',
	devServer: {
		stats: {
			color: true
		},
		host: '0.0.0.0',
		port: 80,
		inline: true,
		outputPath: 'build/',
		contentBase: 'build/',
		disableHostCheck: true,
		proxy: {
			'*': 'http://api:8080'
		}
	}
};