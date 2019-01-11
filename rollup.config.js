import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import {uglify} from 'rollup-plugin-uglify';

export default [{
  input: 'src/LinkedList.ts',
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: 'LinkedList',
    },
    {
      file: pkg.module,
      format: 'es',
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
},
{
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
}
]
