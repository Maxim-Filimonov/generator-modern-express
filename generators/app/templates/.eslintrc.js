module.exports = {
  extends: ["airbnb", "plugin:prettier/recommended"],
  plugins: ["jest"],
  env: {
    "jest/globals": true
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }]
  }
};
