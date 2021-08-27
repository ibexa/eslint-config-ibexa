module.exports = {
    "plugins": ["react"],
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "settings": {
        "react": {
            "version": "16.x"
        }
    },
    "globals": {
        "PropTypes": "readonly"
    },
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module",
        "ecmaVersion": 12
    },
    "rules": {
        "no-const-assign": "error",
        "no-this-before-super": "error",
        "no-undef": "error",
        "no-unreachable": "error",
        "no-unused-vars": "error",
        "constructor-super": "error",
        "valid-typeof": "error",
        "no-extra-semi": "error",
        "no-extra-boolean-cast": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "eqeqeq": ["error", "always"],
        "indent": ["error", 4, { "SwitchCase": 1 }]
    }
};