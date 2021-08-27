module.exports = {
    plugins: ["react"],
    extends: ["eslint:recommended", "plugin:react/recommended"],
    settings: {
        react: {
            version: "16.x"
        }
    },
    globals: {
        PropTypes: "readonly"
    },
    env: {
        browser: true,
        commonjs: true,
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module",
        ecmaVersion: 12
    },
    rules: {
        "no-extra-boolean-cast": "off",
        quotes: ["error", "single", { allowTemplateLiterals: true }]
    }
};