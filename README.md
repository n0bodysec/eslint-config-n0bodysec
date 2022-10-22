# eslint-config-n0bodysec

This the base [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.

## 🚀 Usage

1. Install the package and its minimum required peer dependencies:
```shell
yarn add -D @n0bodysec/eslint-config eslint-plugin-import eslint
```

2. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).
```json
"extends": "@n0bodysec"
```

### TypeScript Support

1. Install the following dev dependencies:
```shell
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

2. Setup your `.eslintrc.js` file:
```js
module.exports = {
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	extends: [
		'@n0bodysec',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
	],
};

```

## 📝 Changelog

You can read the [commits](../../commits).

## 📜 License

Licensed under [MIT License](LICENSE.md).

## 📞 Contact

Feel free to give me feedback.  
[Issues](../../issues) or [Discussions](../../discussions).
