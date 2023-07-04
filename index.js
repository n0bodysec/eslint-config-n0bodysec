module.exports = {
	env: {
		commonjs: true,
		es2022: true,
		node: true,
	},

	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},

	extends: 'airbnb-base',

	rules: {
		'import/no-dynamic-require': 'off',
		'import/prefer-default-export': 'off',
		'brace-style': ['error', 'allman', { allowSingleLine: true }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': 'off',
		'prefer-template': 'off',
		'func-names': 'off',
		'max-len': 'off',
		'prefer-destructuring': 'off',
		'prefer-arrow-callback': 'off',
		'no-param-reassign': 'off',
		'no-plusplus': 'off',
		'object-curly-newline': ['error', {
			ObjectExpression: { minProperties: 4, multiline: true, consistent: true },
			ObjectPattern: { minProperties: 4, multiline: true, consistent: true },
			ImportDeclaration: 'never',
			ExportDeclaration: 'never',
		}],
	},

	overrides: [
		{ files: ['**/*.ts'], ...require('./typescript.js') },
	],
};
