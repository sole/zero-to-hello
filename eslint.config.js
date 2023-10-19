import globals from "globals";
import js from "@eslint/js";
import reactConfig from "eslint-plugin-react";


export default [
	js.configs.recommended,
	reactConfig.configs.recommended,
	reactConfig.configs["jsx-runtime"],
	{
		files: ["src/**/*.js", "src/**/*.jsx"],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parserOptions: {
				ecmaVersion: 2020
			}
		},
		settings: { react: { version: '18.2' } },
		plugins: ['react-refresh'],
		rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		},
	},
	{
		ignores: [
			"build/**/*.js",
			"**/**/*.config.js"
		]
	}
];
