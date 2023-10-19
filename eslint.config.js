export default [{
	env: { browser: true, es2020: true },
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
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
