# eslint-config-n0bodysec

This the base [ESLint](https://eslint.org/) configuration I use in personal JavaScript/TypeScript projects.

> [!IMPORTANT]
> Due to the partial upgrade to ESLint v9, this config only works for TypeScript at this moment. Sorry about that.

## 🚀 Usage

1. Install dependencies
```shell
npm install --save-dev eslint eslint-config-airbnb-base

# TypeScript Only!
npm install --save-dev https://github.dev/claabs/eslint-config-airbnb-typescript-x.git
```

2. Install the package:
```shell
npm install -D @n0bodysec/eslint-config
```

### Example config

```ts
// eslint.config.mjs

import n0bodysec from '@n0bodysec/eslint-config';
import airbnbTs from 'eslint-config-airbnb-typescript-x/base';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	...airbnbTs,
	...n0bodysec,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		ignores: ['node_modules', 'dist'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
);
```

## 📝 Changelog

You can read the [commits](../../commits).

## 📜 License

Licensed under [MIT License](LICENSE.md).
