module.exports = {
  extends: [
    'airbnb',
    'plugin:flowtype/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  env: {
    node: true,
    browser: true,
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['flowtype', 'prettier', 'jsx-a11y'],
  rules: {
    'no-console': 'off',
    'no-shadow': 0,
    'no-underscore-dangle': ['error', { allow: ['_id', '__REDUX_DEVTOOLS_EXTENSION__'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['.storybook/**', '**/stories.js', '**/*.test.js'] },
    ],
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/label-has-for': 'off',
    'react/destructuring-assignment': [false],
    'react/forbid-prop-types': [false],
    'react/jsx-filename-extension': [1, { extensions: ['.js'] }],
    'react/jsx-no-bind': [false],
    'react/no-array-index-key': [false],
    'react/prop-types': [false],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};
