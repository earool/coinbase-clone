module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        singleQuote: true,
        jsxSingleQuote: true,
      },
    },
  ],
};
