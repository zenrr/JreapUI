const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const prodConfig = {
	mode:"production",
	devtool: "cheap-module-source-map",
	optimization: {
    	minimizer: [
    		new UglifyJsPlugin({
		        test: /\.js(\?.*)?$/i,
		    })
    	],
  	},
  	performance: {
	    hints: false
	},
	plugins: [],
	module: {
		rules: []
	},
	output:{
		filename: "[name].[contenthash].js",
		chunkFilename: "[name].[contenthash].chunk.js",
	}
};

module.exports = prodConfig;