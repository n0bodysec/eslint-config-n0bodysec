const { rules: baseStyleRules } = require('./javascript');

module.exports = {
	extends: ['airbnb-typescript/base'],

	rules: {
		'@typescript-eslint/consistent-type-imports': 'error',
		'@typescript-eslint/indent': baseStyleRules.indent,
		'@typescript-eslint/brace-style': baseStyleRules['brace-style'],
	},
};
