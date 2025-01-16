module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'airbnb', 'airbnb-typescript', 'airbnb/hooks', 'prettier', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts', 'storybook-static', '*.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  overrides: [
    {
      files: ['**/*.stories.ts', '**/*.stories.tsx', '**/*.test.tsx'],
      rules: {
        'import/no-extraneous-dependencies': 0,
        'react/no-props-spreading': 'off'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module'
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    '@typescript-eslint/no-explicit-any': 1,
    'prettier/prettier': [
      'warn',
      {
        parser: 'typescript'
      }
    ]
  }
};
