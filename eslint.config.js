import globals from "globals";

export default [{
	files: ["src/**/*.js", "src/**/*.jsx"],
	languageOptions: {
		globals: {
			...globals.browser
		},
		parserOptions: {
			ecmaVersion: 2020
		}
	},
	ignorePatterns: ['build', '.eslintrc.cjs'],
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
	  'react-refresh/only-export-components': [
		'warn',
		{ allowConstantExport: true },
	  ],
	},
}];
