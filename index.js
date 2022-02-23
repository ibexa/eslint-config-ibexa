module.exports = {
    eslint: {
        plugins: ["react", "prettier"],
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
            "prettier/prettier": "error",
            "array-callback-return": "error",
            "eol-last": "error",
            "no-console": ["error", { allow: ["warn", "error"] }],
            "no-duplicate-imports": "error",
            "no-else-return": "error",
            "no-extra-boolean-cast": "off",
            "no-multi-spaces": "error",
            "no-multiple-empty-lines": ["error", { "max": 1, "maxBOF": 0, "maxEOF": 0 }],
            "no-nested-ternary": "error",
            "no-shadow": "error",
            "no-template-curly-in-string": "error",
            "no-trailing-spaces": "error",
            "no-unreachable-loop": "error",
            "no-unsafe-optional-chaining": "error",
            "no-useless-concat": "error",
            "no-var": "error",
            "object-curly-spacing": ["error", "always"],
            "prefer-const": "error",
            "prefer-destructuring": "error",
            "prefer-object-spread": "error",
            "prefer-template": "error",
            "quotes": ["error", "single", { allowTemplateLiterals: true }],
            "radix": "error",
            "semi-spacing": "error",
            "react/button-has-type": "error",
            "react/default-props-match-prop-types": "error",
            "react/jsx-boolean-value": ["error", "always"],
            "react/jsx-closing-bracket-location": "error",
            "react/jsx-closing-tag-location": "error",
            "react/jsx-curly-spacing": "error",
            "react/jsx-equals-spacing": "error",
            "react/jsx-first-prop-new-line": "error",
            "react/jsx-key": "error",
            "react/jsx-no-duplicate-props": "error",
            "react/no-array-index-key": "error",
            "react/no-typos": "error",
            "react/require-default-props": "error",
            "react/self-closing-comp": "error",
            "react/style-prop-object": "error"
        }
    },
    prettier: {
        "printWidth": 140,
        "tabWidth": 4,
        "useTabs": false,
        "semi": true,
        "singleQuote": true,
        "quoteProps": "as-needed",
        "jsxSingleQuote": false,
        "trailingComma": "all",
        "bracketSpacing": true,
        "bracketSameLine": false,
        "arrowParens": "always"
    }
};
