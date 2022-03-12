import path from 'path'
import {defineConfig} from 'vite'

import pkg from './package.json'

export default defineConfig({
  plugins: [],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.js'),
      name: pkg.name,
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        /@babel\/runtime/,
        'antd',
        'prop-types',
        'react',
        'react-dom',
        'react-intl'
      ]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  esbuild: {
    minify: true,
    keepNames: true,
    legalComments: 'none'
  }
})
