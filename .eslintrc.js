module.exports = {
    "extends": ["react-app"],
    "plugins": ["react-hooks"],
    "rules": {
        "no-template-curly-in-string": "off",
        "react-hooks/exhaustive-deps": "off"
    },
    "overrides": [
        {
            "files": ["**/*.ts?(x)"],
            "rules": {
                "no-template-curly-in-string": "off",
                "react-hooks/exhaustive-deps": "off"
            }
        }
    ]
}