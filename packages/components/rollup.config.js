import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/lib',
      format: 'cjs',
      sourcemap: false,
      // 按文件粒度打包
      preserveModules: true,
      assetFileNames: () => '[name].[ext]',
    },
    {
      dir: 'dist/es',
      format: 'esm',
      sourcemap: false,
      preserveModules: true,
      assetFileNames: () => '[name].[ext]',
    },
    // {
    //   file: pkg.umd,
    //   format: 'umd',
    //   name: 'myUtils', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
    //   sourcemap: false,
    // },
  ],
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
        },
      },
      useTsconfigDeclarationDir: true, // 使用tsconfig中的声明文件目录配置
    }),
  ],
};
