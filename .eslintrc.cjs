module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:jsx-a11y/recommended', 'prettier', 'plugin:storybook/recommended'],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json', './tsconfig.node.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['react-refresh', 'jsx-a11y'],
    rules: {
        '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
    },
    overrides: [
        {
            files: ['*.test.tsx', '*.test.ts'],
            rules: {
                "@typescript-eslint/no-empty-function": 'off'
            }
        },

    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
}
