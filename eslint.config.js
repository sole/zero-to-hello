import globals from "globals";
import js from "@eslint/js";
import reactRecommendedConfig from "eslint-plugin-react/configs/recommended.js"
import reactJSXConfig from "eslint-plugin-react/configs/jsx-runtime.js"
import reactRefreshPlugin from "eslint-plugin-react-refresh";


export default [
	js.configs.recommended,
	reactRecommendedConfig,
	reactJSXConfig,
	{
		files: ["src/**/*.js", "src/**/*.jsx"],
		languageOptions: {
			globals: {
				...globals.browser
			},
			parserOptions: {
				ecmaVersion: 2020,
				sourceType: 'module'
			}
		},
		settings: { react: { version: '18.2' } },
		plugins: {
			'react-refresh': reactRefreshPlugin
		},
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
