// Consult https://www.snowpack.dev to learn about these options
module.exports = {
	extends: '@sveltejs/snowpack-config',
	mount: {
		'src/components': '/_components'
	},
	alias: {
		'~C': './src/components',
        '~': './src',
        'updeep': '@yanick/updeep'
	},
    installOptions: {
        env: {NODE_ENV: true },
    },
};