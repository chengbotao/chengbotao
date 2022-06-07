### 创建项目文件夹

```sh
# 创建项目文件夹
mkdir billows
# 进入项目
cd billows
# 使用 vscode 打开项目
code .
```

### 使用 npm 初始化项目

> `npm init [-y]` 命令行有无参数区别: 是否快速初始化

```sh
# 使用 npm 初始化
# -y 参数是快速初始化
npm init -y

About to write to E:\Chengbotao\billows\package.json:

{
  "name": "billows",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test #specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

```sh
# 需要一步一步确认信息初始化项目
npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.

package name: (billows)
version: (1.0.0)
description: Typescript front-end tool library
entry point: (index.js)
test command:
git repository:
keywords:
author: chengbotao
license: (ISC) MIT
About to write to E:\Chengbotao\billows\package.json:

{
  "name": "billows",
  "version": "1.0.0",
  "description": "Typescript front-end tool library",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "chengbotao",
  "license": "MIT"
}
```

### 创建 packages 文件夹

> 用于存放工具函数源码

```sh
mkdir packages
cd packages
# 创建一个入口文件
touch index.ts
```

### 安装 rollup.js

```sh
# 安装 rollup
npm install rollup -D

# 创建 rollup 的配置文件
touch rollup.config.ts
```

### 安装 typescript

```sh
# 安装 typescript
npm install typescript tslib -D

# 使用 tsc --init 生成 tsconfig.json 配置文件
npx tsc --init

Created a new tsconfig.json with:
  target: es2016
  module: commonjs
  strict: true
  esModuleInterop: true
  skipLibCheck: true
  forceConsistentCasingInFileNames: true


You can learn more at https://aka.ms/tsconfig
```

### rollup.js 的配置

> rollup.js 基础插件

```ts
@rollup/plugin-json // json 解析插件
@rollup/plugin-node-resolve // node_modules 管理
@rollup/plugin-commonjs // CommonJS模块转换为ES6
@rollup/plugin-alias // 别名
@rollup/plugin-typescript // typescript
// ...
```

```ts
// rollup.config.ts
import { resolve } from "path";
import pkg from "./package.json";

// json 解析插件
import json from "@rollup/plugin-json";
// node_modules 管理
import { nodeResolve } from "@rollup/plugin-node-resolve";
// CommonJS模块转换为ES6
import commonjs from "@rollup/plugin-commonjs";
// 别名
import alias from "@rollup/plugin-alias";
// typescript
import typescript from "@rollup/plugin-typescript";

const { version } = pkg;
// rollup 出口配置
const outputConf = {
  banner: `/* Billows version ${version} */`,
  footer: `/* Follow me on GitHub! @chengbotao */`,
};

export default {
  // 入口文件
  input: "packages/index.ts",
  // 打包成 es 模块 和 umd 模块
  output: [
    {
      file: resolve(__dirname, "dist", "billows.esm.js"),
      format: "esm",
      ...outputConf,
    },
    {
      file: resolve(__dirname, "dist", "billows.js"),
      format: "umd",
      name: "billows",
      ...outputConf,
    },
  ],
  plugins: [
    alias({
      entries: {
        packages: resolve(__dirname, "packages"),
      },
    }),
    nodeResolve({
      extensions: [".ts", ".tsx", ".mjs", ".js", ".jsx", ".json"],
    }),
    commonjs(),
    typescript(),
    json(),
  ],
};
```

### 清理打包

```sh
# 安装 rimraf
npm install rimraf -D
```

### 配置 package.json -> script

```json
{
  //...
  "scripts": {
    "build": "npm run clean && rollup -c",
    "clean": "rimraf dist"
  }
  //...
}
```

[rollup.js 中文官网](https://rollupjs.org/guide/zh/)  
[TypeScript 中文官网](https://www.tslang.cn/docs/home.html)  
[rollup.js 插件列表](https://github.com/rollup/plugins)
