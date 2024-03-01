module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    'import/resolver': {
      alias: {
        map: [['@', './src']],
      },
    },
    react: { version: '18.2' },
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-uses-vars': 'error',
    'react/jsx-uses-react': 'error',
  },
};
