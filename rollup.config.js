import typescript from '@rollup/plugin-typescript';
import terser  from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist'
    }),
    terser()
  ]
};
