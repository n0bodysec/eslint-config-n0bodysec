# eslint-config-n0bodysec

This the base [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.

## 🚀 Usage

1. Install eslint v8 (v9 is not yet supported):
```shell
npm install --save-dev eslint@8.57.0
```

2. Setup airbnb config the normal way:
```shell
# npm info "eslint-config-airbnb-base@latest" peerDependencies
npm install --save-dev eslint-plugin-import eslint-config-airbnb-base 
```

3. **(TypeScript only)** Install airbnb-typescript:
```shell
# npm info "eslint-config-airbnb-typescript@latest" peerDependencies
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-airbnb-typescript
```

4. Install the package and its minimum required peer dependencies:
```shell
npm install -D @n0bodysec/eslint-config
```

5. Extend this package in your [ESLint configuration](https://eslint.org/docs/user-guide/configuring).
```json
"extends": "@n0bodysec"
```

### Example config

```js
module.exports = {
	extends: [
		'airbnb',
		'airbnb-typescript',
		'@n0bodysec',
		'plugin:@typescript-eslint/recommended-type-checked',                // @typescript-eslint @v6
		'plugin:@typescript-eslint/stylistic-type-checked',                  // @typescript-eslint @v6
		// 'plugin:@typescript-eslint/recommended',                          // @typescript-eslint @v5
		// 'plugin:@typescript-eslint/recommended-requiring-type-checking',  // @typescript-eslint @v5
	],
};
```

## 📝 Changelog

You can read the [commits](../../commits).

## 📜 License

Licensed under [MIT License](LICENSE.md).
