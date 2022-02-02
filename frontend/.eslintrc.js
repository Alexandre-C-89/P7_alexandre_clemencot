const path = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {},
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.vue', '.json'],
        map: [
          ['~', path.resolve(__dirname, './src/')],
          ['@', path.resolve(__dirname, './src/')],
        ],
      },
    },
  },
};
