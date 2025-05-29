module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    babelOptions: {
      plugins: [["@babel/plugin-syntax-decorators", { legacy: true }]]
    }
  },
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "react-app",
    "eslint:recommended"
  ]
};
