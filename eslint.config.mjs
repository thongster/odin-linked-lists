import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],
    languageOptions: {
      globals: {
        ...globals.node, // Node environment only
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    extends: [js.configs.recommended, prettier],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]);
