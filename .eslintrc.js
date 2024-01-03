module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
  ],
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    requireConfigFile: false,
  },
  rules: {
    'no-console': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'arrow-parens': ['error', 'as-needed'], // you can change to always for better validation
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: ['const'], next: '*' },
      { blankLine: 'any', prev: ['const'], next: ['const'] } // adjust this line
    ],
    'indent': ['error', 2],
    'no-shadow': 'off', // turn off the base rule
    '@typescript-eslint/no-shadow': ['error'], // enable the TypeScript version
    "react/prop-types": "off", // react prop types validation
    // "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
  },
  overrides: [
    // This configuration will apply only to TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        // We can add TypeScript specific rules here
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
};