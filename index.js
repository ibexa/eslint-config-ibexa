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
        "no-console": ["error", { allow: ["warn", "error"] }],
        "no-trailing-spaces": "error",
        "no-template-curly-in-string": "warn",
        "no-unreachable-loop": "error",
        "no-unsafe-optional-chaining": "error",
        "array-callback-return": "error",
        "no-multi-spaces": "error",
        radix: "error",
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
        "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
        "no-useless-concat": "error",
        "object-curly-spacing": ["error", "always"],
        "object-curly-newline": ["error", { multiline: true }],
        "semi-spacing": "error",
        "eol-last": "error",
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/no-array-index-key": "error",
        "react/no-typos": "error",
        "react/require-default-props": "error",
        "react/self-closing-comp": "error",
        "react/style-prop-object": "error",
        "react/jsx-boolean-value": ["error", "always"],
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-equals-spacing": "error",
        "react/jsx-first-prop-new-line": "error",
        "react/jsx-key": "error",
        "react/jsx-max-props-per-line": ["error", { maximum: 2 }],
        "react/jsx-no-duplicate-props": "error",
        quotes: ["error", "single", { allowTemplateLiterals: true }]
    }
};
