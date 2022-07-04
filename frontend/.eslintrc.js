const path = require('path');

module.exports = {
  extends: ['airbnb-base', 'prettier'],
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
  rules: {
    'no-param-reassign': [2, { props: false }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'object-shorthand': ['error', 'always'],
    'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
    'import/newline-after-import': ['error', { count: 1 }],
    'no-underscore-dangle': ['error', { allow: ['foo_', '_bar'] }],
    'linebreak-style': ["error", "unix"],
  },
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
