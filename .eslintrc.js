module.exports = {
  root: true,
  extends: ["@react-native-community","plugin:react/jsx-runtime"],
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto",
    },
  ],

  rules: {
    quotes: ["error", "double", "single"],
  },

  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx",".ts",".tsx", ".json", ".png", ".jpg", ".jpeg"],
      },
    },
  },

};
