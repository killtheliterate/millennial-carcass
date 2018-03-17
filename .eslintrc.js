module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": "airbnb",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
        "sourceType": "module",
    },
    "plugins": [
        "react",
    ],
    "rules": {
        "indent": [
            "error",
            2,
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        "object-curly-newline": ["error", {
          "ObjectExpression": { "consistent": true },
          "ObjectPattern": { "consistent": true },
          "ImportDeclaration": { "consistent": true },
          "ExportDeclaration": { "consistent": true },
        }],
        "quotes": [
            "error",
            "single",
        ],
        "semi": [
            "error",
            "never",
        ],
    },
};
