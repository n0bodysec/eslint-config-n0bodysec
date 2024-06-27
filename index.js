module.exports = {
	extends: [
		'./lib/javascript',
	].map(require.resolve),

	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},

	rules: {},

	overrides: [
		{
			files: ['*.ts', '*.tsx', '*.mts', '*.cts'],
			extends: [
				'./lib/typescript',
			].map(require.resolve),
		},
	],
};
