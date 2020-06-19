require('dotenv').config()
const path = require('path')
const Dotenv = require('dotenv-webpack')
// const withCss = require('@zeit/next-css')
// const withLess = require('@zeit/next-less')
// const withPlugins = require("next-compose-plugins");

const cfg = {
	webpack: (config) => {
		config.plugins = config.plugins || []

		config.plugins = [
			...config.plugins,

			// Read the .env file
			new Dotenv({
				path: path.join(__dirname, '.env'),
				systemvars: true,
			}),
		]

		return config
	},
}

module.exports = cfg
