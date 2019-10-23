module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    extends: ["airbnb" /*, "plugin:prettier/recommended"*/],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "comma-dangle": 0,
        "arrow-body-style": ["off"],
        "arrow-parens": ["error", "as-needed"],
        indent: ["error", 4],
        "object-curly-newline": ["error", { consistent: true }],
        quotes: ["error", "double", { avoidEscape: true }],
        "react/forbid-prop-types": ["error", { forbid: ["any"] }],
        "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        //"react/jsx-one-expression-per-line": ["off"],
        "react/jsx-props-no-spreading": [
            "error",
            {
                custom: "ignore",
            },
        ],
    },
};
