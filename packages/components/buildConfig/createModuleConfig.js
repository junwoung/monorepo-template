import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import path from 'path';

export const createModuleConfig = (entry, format) => {
  return {
    input: entry,
    output: {
      dir: `dist/${format}/`,
      format,
      sourcemap: false,
      preserveModules: true,
      assetFileNames: ({ name }) => {
        const { ext, dir, base } = path.parse(name);
        if (ext !== '.css') return '[name].[ext]';
        return path.join(dir, 'style', base);
      }
    },
    plugins: [
      postcss({
        extract: false,
        inject: false,
      }),
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: 'ESNext',
          },
        },
        useTsconfigDeclarationDir: true,
      }),
    ],
  }
};