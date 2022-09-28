import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import commonjs from 'rollup-plugin-commonjs';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';
import path from 'path';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/lib',
      format: 'cjs',
      sourcemap: false,
      // 按文件粒度打包
      preserveModules: true,
      assetFileNames: ({ name }) => {
        const { ext, dir, base } = path.parse(name);
        if (ext !== 'css') return '[name].[ext]';
        return path.join(dir, 'style', base);
      }
    },
    {
      dir: 'dist/es',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      assetFileNames: ({ name }) => {
        const { ext, dir, base } = path.parse(name);
        if (ext !== 'css') return '[name].[ext]';
        return path.join(dir, 'style', base);
      }
    },
    // {
    //   file: pkg.umd,
    //   format: 'umd',
    //   name: 'myUtils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
    //   sourcemap: false,
    // },
  ],
  plugins: [
    commonjs(),
    postcss({
      extract: 'css/index.css',
      plugins: [
        cssnano(),
        autoprefixer()
      ],
    }),
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
      useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
    }),
    terser(),
  ],
};
