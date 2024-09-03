const styleRules = require('./lib/style');
const jsRules = require('./lib/javascript');
const tsRules = require('./lib/typescript');

// TODO: Finish this
module.exports = [
	// ...compat.extends('eslint-config-airbnb-base'), // TODO: fix this
	{
		rules: {
			...styleRules.rules,
			...jsRules.rules,

			// TODO: The following rules must be applied to TS files only
			// files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts']
			// Also the airbnb-ts config should be extended
			...tsRules.rules,
		},
	},
];
