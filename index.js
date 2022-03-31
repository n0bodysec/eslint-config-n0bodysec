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
		'brace-style': ['error', 'allman', { allowSingleLine: true }],
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		'no-console': 0,
		'import/no-dynamic-require': 0,
		'prefer-template': 0,
		'func-names': 0,
		'space-before-function-paren': 0,
		'max-len': 0,
		'prefer-destructuring': 0,
		'class-methods-use-this': 0,
		'arrow-body-style': 0,
		'prefer-arrow-callback': 0,
		'no-param-reassign': 0,
		'no-plusplus': 0,
	},
};
