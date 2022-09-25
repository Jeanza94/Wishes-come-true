module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpg,js,css,html,svg}'
	],
	swDest: 'dist/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};