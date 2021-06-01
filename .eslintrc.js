module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2020,
    project: './tsconfig.json',
    useJSXTextNode: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: [
    'simple-import-sort'
  ],
  extends: [
    'standard-with-typescript',
    'standard-react',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'prettier'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error"
  }
}