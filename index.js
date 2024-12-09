const baseRules = {
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
    "prefer-destructuring": ["error", {
        "VariableDeclarator": {
            "array": false,
            "object": true
        },
        "AssignmentExpression": {
            "array": false,
            "object": false
        }
    }, { enforceForRenamedProperties: false }],
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
    "react/style-prop-object": "error",
};

const advancedRules = {
    "camelcase": "error",
    "curly": "error",
    "default-case": "error",
    "default-case-last": "error",
    "dot-notation": "error",
    "eqeqeq": "error",
    "func-style": ["error", "expression"],
    "guard-for-in": "error",
    "id-length": ["error", { "min": 2 }],
    "max-classes-per-file": "error",
    "max-depth": ["error", { "max": 4 }],
    "max-lines": ["error", { "max": 300 }],
    "max-lines-per-function": ["error", { "max": 50 }],
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-label": "error",
    "no-implicit-globals": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "error",
    "no-multi-assign": "error",
    "no-multi-str": "error",
    "no-negated-condition": "error",
    "no-new": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": ["error", { "props": true }],
    "no-promise-executor-return": "error",
    "no-return-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-throw-literal": "error",
    "no-underscore-dangle": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-assignment": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-return": "error",
    "object-shorthand": "error",
    "prefer-arrow-callback": "error",
    "prefer-object-has-own": "error",
    "prefer-promise-reject-errors": "error",
    "require-atomic-updates": "error",
    "require-await": "error",
    "sort-imports": ["error", { "allowSeparatedGroups": true }],
    "sort-keys": "error",

};

module.exports = {
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
    overrides: [
        {
            files: ["*.js"],
            plugins: ["react"],
            extends: ["eslint:recommended", "plugin:react/recommended"],
            rules: baseRules
        },
        {
            files: ["*.ts", "*.tsx"],
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
            extends: [
                "eslint:recommended",
                "plugin:@typescript-eslint/strict-type-checked",
                "plugin:@typescript-eslint/stylistic-type-checked"
            ],
            rules: {
                ...baseRules,
                ...{
                    "@typescript-eslint/no-unsafe-type-assertion": "error",
                    "@typescript-eslint/no-redundant-type-constituents": "off",
                    "@typescript-eslint/typedef": [
                        "error",
                        {
                        "arrayDestructuring": true,
                        "arrowParameter": true,
                        "memberVariableDeclaration": true,
                        "objectDestructuring": true,
                        "parameter": true,
                        "propertyDeclaration": true,
                        "variableDeclaration": false,
                        "variableDeclarationIgnoreFunction": false,
                        },
                    ],
                    "react/style-prop-object": "error",
                    "react/require-default-props": "off"
                }
            }
        }
    ]
};
