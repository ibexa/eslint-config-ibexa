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
        "no-console": "error",
        "no-trailing-spaces": "error",
        "no-template-curly-in-string": "warn",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "array-callback-return": "error",
        "no-multi-spaces": "error",
        radix: ["error", "always"],
        "no-shadow": "warn",
        "indent": ["error", 4, { SwitchCase: 1 }],
        semi: "error",
        "max-len": ["error", { "code": 140 }],
        "no-nested-ternary": "error",
        "prefer-object-spread": "error",
        "space-before-function-paren": ["error", "never"],
        "arrow-parens": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-destructuring": "error",
        "prefer-template": "error",
        "comma-dangle": ["error", "always-multiline"],
        quotes: ["error", "single", { allowTemplateLiterals: true }]
    }
};