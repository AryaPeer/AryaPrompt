import coreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

const config = [
  { ignores: ['.next/**', 'node_modules/**', 'public/**'] },
  ...coreWebVitals,
  prettierConfig,
  {
    plugins: { prettier },
    rules: {
      'no-console': 'error',
      'prettier/prettier': 'warn',
      'react-hooks/exhaustive-deps': 'off',
    },
  },
];

export default config;
