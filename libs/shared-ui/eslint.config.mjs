import tanstack from '@tanstack/eslint-plugin-query';
import { qwikEslint9Plugin } from 'eslint-plugin-qwik';
import baseConfig from '../../eslint.config.mjs';

export default [
  ...baseConfig,
  ...tanstack.configs['flat/recommended'],
  ...qwikEslint9Plugin.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];

