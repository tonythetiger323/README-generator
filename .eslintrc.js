module.exports = {
  env: {
    es6: true,
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": false
  },
  plugins: ["prettier"]
};
