'use strict';

var path = require('path');
var webpack = require('webpack');

var appSettings = path.resolve(__dirname, 'src/js/settings/dnevnik.js');

module.exports = {
	cache: true,
	entry: ['babel-polyfill', './src/js'],
	output: {
		path: path.join(__dirname, '/production/assets/js'),
		filename: 'dnevnik.js',
		publicPath: path.join(__dirname, '/production/assets/js'),
		pathinfo: true
	},

	resolve: {
		modulesDirectories: ['node_modules', 'my_modules'],
		extentions: ['', '.js'],
		alias: {
			'app-settings': appSettings
		}
	},

	module: {
		noParse: [
		],
		loaders: [
			{   test: /\.js$/, 
				loader: 'babel',
				include: [
					path.join(__dirname, '/src/js'),
					path.join(__dirname, '/my_modules'),
				], 
				query: {
					cacheDirectory: true,
					presets: ['es2015', 'react', 'stage-2']
				}
			},
			{ 	test: /\.js$/, 
				include: [
					path.join(__dirname, '/src/js'),
				], 
				loader: 'strip-loader?strip[]=console.log' 
			}
		]
	},
	plugins: [     
		new webpack.DefinePlugin({
			'process.env': { 
				NODE_ENV : JSON.stringify('production') 
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			minimize: true,
			comments: false,
			compress: {
				warnings: false
			}
		})
	]
};

