module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		"plugin:react/recommended",
		"airbnb",
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: { indent: ["error", "indent"] },
};
