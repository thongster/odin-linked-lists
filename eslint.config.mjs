import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier'; // ✅ import as object
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],
    ignores: ['node_modules/**'],

    languageOptions: {
      globals: {
        ...globals.node, // since you’re running in Node CLI
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    plugins: {
      prettier: pluginPrettier, // ✅ use object form, not array
    },

    extends: [js.configs.recommended, prettier],

    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
]);
