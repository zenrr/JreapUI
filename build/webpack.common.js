const HtmlWebbpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const devConfig = require("./webpack.dev.js");
const prodConfig = require("./webpack.prod.js");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = {
	entry: {
        //"bundle": "./src/Basics/index.tsx",
        "bundle": "./src/index.tsx",
    },
	module:{
		rules:[{
			test:/\.(jpg|png|gif|svg)$/,
			use:{
				loader: "url-loader",
				options: {
					//placeholder 占位符
					name: "[name].[ext]",
					outputPath: "images/",
					limit: 10240
				}
			}
		},{
			test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
			use:{
				loader: "file-loader",
				options: {
					outputPath: "font/"
				}
			}
		},{
			test: /\.js$/,
			exclude: /node_modules/,
			use: [{
				loader: "imports-loader?_this=>window"
			}]
		},{
            test: /\.tsx?$/,
            loader: "ts-loader" ,
            exclude: /node_modules/,
            options: {
	            transpileOnly: true,
	            experimentalWatchApi: true,
            }
        },{
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				"css-loader"
			]
		},{
			test: /\.(sass|scss)$/,
			use: [
				MiniCssExtractPlugin.loader,
				{
					loader: 'css-loader',
					options: {
						importLoaders: 2
					}
				},
				"sass-loader",
				"postcss-loader"
			]
		}]
	},
	resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "bootstrap-sass$": "bootstrap-sass/assets/stylesheets/bootstrap"
        }
    },
	plugins:[
		// 打包插件
		new HtmlWebbpackPlugin({
			template:"./src/index.html",
			minify: {
	            removeComments: true,
	            collapseWhitespace: true,
	            removeRedundantAttributes: true,
	            useShortDoctype: true,
	            removeEmptyAttributes: true,
	            removeStyleLinkTypeAttributes: true,
	            keepClosingSlash: true,
	            minifyJS: true,
	            minifyCSS: true,
	            minifyURLs: true,
	        },
	        chunksSortMode:'dependency'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
      		chunkFilename: '[name].chunk.css'
		}),
		//清除dist插件
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			"$": "jquery",
			"_join":["lodash","join"],
			"mock":"Mock"
		})
	],
	optimization:  {
		splitChunks: {
			chunks: 'all',
		    minSize: 30000,
		    maxSize: 0,
		    minChunks: 1,
		    maxAsyncRequests: 5,
		    maxInitialRequests: 3,
		    automaticNameDelimiter: '~',
		    name: true,
		    cacheGroups: {
		    	vendors: {
		          test: /[\\/]node_modules[\\/]/,
		          priority: -20,
		          filename: "vendors.js",
		          maxSize: 3000000,
		        },
		        default: {
			        minChunks: 2,
			        priority: -20,
			        reuseExistingChunk: true
			    }
		     }
		},
		minimizer: [
			new OptimizeCssAssetsPlugin({}),
		],
		minimizer: [
    		new UglifyJsPlugin({
		        test: /\.js(\?.*)?$/i,
		    })
    	]
	},
	output: {
		// publicPath: "", 为js添加前缀地址
		path: path.resolve(__dirname,"../dist"),
		sourceMapFilename: "[name].js.map"
	}
}


module.exports = (env) => {
	if(env && env.surroundings === "prod"){
		return merge(commonConfig,prodConfig);
	} else {
		return merge(commonConfig,devConfig);
	}
}