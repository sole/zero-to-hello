module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	ignorePatterns: ['build', '.eslintrc.cjs'],
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime'
	],
	settings: { react: { version: '18.2' } },
}
