import { defineConfig } from 'rollup'
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      name: 'index',
			file: pkg.browser,
			format: 'umd'
    },
    { file: pkg.main, format: 'cjs' },
		{ file: pkg.module, format: 'es' }
  ],
  plugins: [
    nodeResolve(),
    babel({
      plugins: [
        '@babel/plugin-proposal-optional-chaining',
      ],
      exclude: 'node_modules/**',
    }),
    commonjs(),
    typescript()
  ]
});