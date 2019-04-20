module.exports = {
    root: true,
    env: {
        es6: true
    },
    globals: {
        UE: true
    },
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    rules:{
        "semi": ["error", "always"],
        "no-console": 0
    }
};
