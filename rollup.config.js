import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import camelCase from 'camelcase';
import sourceMaps from 'rollup-plugin-sourcemaps';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import {uglify} from 'rollup-plugin-uglify';

export default [{
  input: 'src/LinkedList.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: camelCase(pkg.name),
      sourcemaps: true
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemaps: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    resolve(),
    commonjs(),
    sourceMaps(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
},
/* {
  input: 'src/LinkedList.ts',
  output: {
    file: pkg.min,
    format: 'umd',
    name: 'LinkedList',
  },
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    uglify()
  ]
} */
]
