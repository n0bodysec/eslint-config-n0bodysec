import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';
import base from './index.js';

const compat = new FlatCompat();

export default [
	{
		ignores: ['node_modules/'],
		plugins: {
			'@stylistic': stylistic,
		},
	},
	...compat.extends('airbnb-base'),
	...base,
];
