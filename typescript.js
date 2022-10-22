module.exports = {
	rules: {
		'import/extensions': ['error', 'ignorePackages', { ts: 'never', tsx: 'never' }],
		'lines-between-class-members': 'off',
		'no-unused-vars': 'off',
		'no-useless-constructor': 'off',
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-useless-constructor': 'error',
	},
};
