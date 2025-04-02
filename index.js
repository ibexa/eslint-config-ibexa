import globals from 'globals';
import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';

import ibexaRules from './src/custom-rules/index.js';

const baseRules = {
    "array-callback-return": "error",
    "no-console": ["error", { allow: ["warn", "error"] }],
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-extra-boolean-cast": "off",
    "no-nested-ternary": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",
    "no-useless-concat": "error",
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
    "radix": "error",
    "react/button-has-type": "error",
    "react/jsx-boolean-value": ["error", "always"],
    "react/jsx-closing-bracket-location": "error",
    "react/jsx-closing-tag-location": "error",
    "react/jsx-curly-spacing": "error",
    "react/jsx-equals-spacing": "error",
    "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
    "react/jsx-key": "error",
    "react/jsx-no-duplicate-props": "error",
    "react/no-array-index-key": "error",
    "react/no-typos": "error",
    "react/prop-types": "error",
    "react/self-closing-comp": "error",
    "react/style-prop-object": "error",
    "@stylistic/indent": "off", // prettier conflict
    "@stylistic/jsx-indent-props": "off", // prettier conflict
    "@stylistic/semi": "off", // prettier conflict
    "@stylistic/arrow-parens": "off", // prettier conflict
    "@stylistic/spaced-comment": "off", // @Desc conflict
    "@stylistic/multiline-ternary": "off", // prettier conflict
    "@stylistic/operator-linebreak": "off", // prettier conflict, unfortunatelly
    "@stylistic/jsx-one-expression-per-line": "off",
    "@stylistic/jsx-curly-newline": "off", // prettier conflict
};

const strictRules = {
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
    "no-magic-numbers": ["error", { "ignore": [0] }],
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
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
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
    "sort-keys": ["error", "asc", { "ignoreComputedKeys": true }],
    "@stylistic/function-call-spacing": "error",
    "@stylistic/jsx-pascal-case": "error",
    "@stylistic/jsx-props-no-multi-spaces": "error",
    "@stylistic/jsx-self-closing-comp": "error",
    "@stylistic/jsx-sort-props": "error",
    "@stylistic/switch-colon-spacing": "error",
};

const configTS = tseslint.config(
    js.configs.recommended,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    stylistic.configs.customize({
        braceStyle: '1tbs',
        quoteProps: 'as-needed',
        indent: 4,
        semi: true,
    }),
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            ...baseRules,
            ...strictRules,
            "@typescript-eslint/no-unsafe-type-assertion": "error",
            "@typescript-eslint/no-redundant-type-constituents": "off",
            // TODO: check if needed?
            // "@typescript-eslint/typedef": [
            //     "error",
            //     {
            //         "arrayDestructuring": true,
            //         "arrowParameter": true,
            //         "memberVariableDeclaration": true,
            //         "objectDestructuring": true,
            //         "parameter": true,
            //         "propertyDeclaration": true,
            //         "variableDeclaration": false,
            //         "variableDeclarationIgnoreFunction": false,
            //     },
            // ],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
            },
        },
    },
);

export default [
    js.configs.recommended,
    ...configTS,
    {
        files: ['**/*.js', '**/*.ts'],
        rules: {
            "max-lines-per-function": ["error", { "max": 50 }],
        }
    },
    {
        files: ['**/*.jsx', '**/*.tsx'],
        plugins: {
            ibexa: ibexaRules,
        },
        rules: {
            "ibexa/max-lines-per-function-jsx": ["error", { "max": 50 }],
        }
    },
    {
        files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
        settings: {
            react: {
                version: 'detect',
            },
        },
        languageOptions: {
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    modules: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.commonjs,
                ...globals.builtin,
                ...globals.node,
            },
        },
        plugins: {
            react,
        },
    },
];
