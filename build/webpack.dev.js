const webpack = require("webpack");


const devConfig = {
	mode:"development",
	devtool:"cheap-module-eval-source-map",
	devServer: {
		contentBase: 'dist',
		open: true,
		proxy:{
			"/api": "http://www.baidu.com"
		},
		port: 8848,//定义端口
		hot: true,
		hotOnly: false,
		historyApiFallback: true,
	},
	module: {
		rules: []
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	],
	output:{
		filename: "[name].js",
		chunkFilename: "[name].js",
	}
}

module.exports =  devConfig;