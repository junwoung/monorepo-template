import path from 'path';
import fs from 'fs';
import { createModuleConfig } from './buildConfig/createModuleConfig';
import { createStyleConfig } from './buildConfig/createStyleConfig';

const entry = 'src/index.ts'
const componentsDir = 'src'
const componentsName = fs.readdirSync(path.resolve(componentsDir)).filter(item => item !== 'index.ts');

const configs = ['es', 'cjs'].reduce((prev, cur) => {
  const buildTypeConfig = [
    // 编译入口文件
    createModuleConfig([entry], cur),
    // 单独编译每个模块
    ...componentsName.map(moduleName => createStyleConfig(moduleName, cur))
  ];
  return [...prev, ...buildTypeConfig]
}, []);

export default configs;
