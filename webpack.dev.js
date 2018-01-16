const merge = require('webpack-merge');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  // devtool: 'inline-source-map',
  devtool: 'eval-source-map',

	devServer: {
		contentBase: './dist',
		compress: true,
		port: 9777,

		//端口代理
		proxy: {
			"/api": {
				target: "http://localhost:3366",
				pathRewrite: {
					"^/api": ""
				}
			}
		}
	},
	plugins:[
		// new OpenBrowserPlugin({ url: 'http://localhost:9777' })

	] 

});
