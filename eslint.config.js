const eslint = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const tsparser = require('@typescript-eslint/parser');
const prettier = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  {
    ...eslint.configs.recommended,
    files: ['src/**/*.{ts,tsx,js,jsx,mjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.jest,
        process: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
    },
    rules: {
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          semi: true,
        },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^(_|unused|UNUSED)',
          ignoreRestSiblings: true,
        },
      ],
      'no-console': 'off',
      curly: ['error', 'multi-line'],
      quotes: ['error', 'single', { avoidEscape: true }],
      'no-empty-interface': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      'no-trailing-spaces': 'error',
      'eol-last': 'error',
      'no-unused-vars': 'off',
      'no-dupe-class-members': 'off',
    },
  },
  {
    ...eslint.configs.recommended,
    files: ['tests/**/*.{ts,tsx,js,jsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    ...eslint.configs.recommended,
    files: ['apps/rn/**/*.{ts,tsx,js,jsx,mjs}'],
    languageOptions: {
      globals: {
        require: 'readonly',
      },
    },
  },
  {
    ...eslint.configs.recommended,
    files: ['apps/deno/**/*.{ts,tsx,js,jsx,mjs}'],
    languageOptions: {
      globals: {
        Deno: 'readonly',
      },
    },
  },
];
