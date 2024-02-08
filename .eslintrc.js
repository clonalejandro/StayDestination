module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    'react-native/react-native': true
  },
  plugins: ['react', 'react-native', '@typescript-eslint'],
  extends: ['prettier', 'plugin:prettier/recommended', 'plugin:react-native/all'],
  rules: {
    semi: ['error', 'always']
  }
};
