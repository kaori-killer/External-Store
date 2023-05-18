module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
		'plugin:react/jsx-runtime',
	],
	overrides: [
		{
			extends: [
				'xo-typescript',
			],
			files: [
				'*.ts',
				'*.tsx',
			],
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: __dirname,
	},
	plugins: [
		'react',
	],
	rules: {
	},
	settings: {
		react: {
			version: '18.2.0',
		},
	},
};
