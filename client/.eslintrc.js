module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "rules": {
        "react/prop-types": 0,
        "react/jsx-filename-extension": 0,
        "no-use-before-define": 0,
        "no-console": 0,
        "no-unused-vars": "warn",
        "no-underscore-dangle": 0,
    }
};