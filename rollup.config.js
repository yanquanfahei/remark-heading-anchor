import { defineConfig } from 'rollup'
import path from 'path';
import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: path.resolve(__dirname,'dist/index.js'),
    name: 'index.js',
    format: 'umd'
  },
  plugins: [
    nodeResolve(),
    typescript()
  ]
});