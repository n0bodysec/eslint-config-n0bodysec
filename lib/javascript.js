module.exports = {
	extends: ['eslint-config-airbnb-base'],

	rules: {
		'import/no-dynamic-require': 'off',
		'import/prefer-default-export': 'off',
		'brace-style': ['error', 'allman', { allowSingleLine: true }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': 'off',
		'prefer-template': 'off',
		'prefer-destructuring': 'off',
		'prefer-arrow-callback': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'no-continue': 'off',
		'object-curly-newline': ['error', {
			ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
			ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
			ImportDeclaration: 'never',
			ExportDeclaration: 'never',
		}],
	},
};
