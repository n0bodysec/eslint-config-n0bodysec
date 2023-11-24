# eslint-config-n0bodysec

This the base [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.

## 🚀 Usage

1. Install the package and its minimum required peer dependencies:
```shell
npm install -D @n0bodysec/eslint-config eslint-plugin-import eslint
```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).
```json
"extends": "@n0bodysec"
```

### TypeScript Support

1. Install the following dev dependencies:
```shell
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Setup your `.eslintrc.js` file:
```js
module.exports = {
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	extends: [
		'@n0bodysec',
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended-type-checked',
		'plugin:import/typescript',
	],
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	root: true,
	ignorePatterns: ['node_modules', 'dist'],
};
```

## 📝 Changelog

You can read the [commits](../../commits).

## 📜 License

Licensed under [MIT License](LICENSE.md).

## 📞 Contact

Feel free to give me feedback.  
[Issues](../../issues) or [Discussions](../../discussions).
