import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import { terser } from 'rollup-plugin-terser';

export const createStyleConfig = (moduleName, format) => {
  return {
    input: `src/${moduleName}/index.tsx`,
    output: {
      file: `dist/${format}/${moduleName}/index.js`,
      format,
      sourcemap: false,
    },
    plugins: [
      postcss({
        extract: `style/index.css`,
        inject: false,
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
  }
};

