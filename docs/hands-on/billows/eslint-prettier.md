### eslint 安装配置

> 代码质量: 约定语法的使用, 如: 必须使用全等; 不能使用`var`定义变量等  
> 代码格式: 影响代码的格式美观, 如: 代码结束必须添加分号; 缩进的控制等

```sh
# 安装eslint
npm install eslint -D
# 初始化 eslint 配置
npx eslint --init

You can also run this command directly using 'npm init @eslint/config'.
npx: 40 安装成功，用时 6.424 秒
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JSON
Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 @typescript-eslint/parser@latest
√ Would you like to install them now? · No / Yes
√ Which package manager do you want to use? · npm
```

### .eslintrc

> `eslint --init` 之后生成一个 `.eslintrc.{js,yml,json}`

```json
{
  "root": true, // 表示当前 eslintrc 是最顶层的配置文件
  "env": {
    // 运行环境配置
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": ["standard"], // 扩展
  "parser": "@typescript-eslint/parser", // javascript 解析器
  "parserOptions": {
    // javascript 语言选项 默认支持 ECMAScript 5 语法
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint"], // 插件
  "rules": {} // 规则定义
}
```

### 创建 .eslintignore

> 根目录下创建 `.eslintignore` 文件  
> 排除不需要 `eslint` 代码格式检查修复的目录或文件

```sh
# don't ever lint node_modules
node_modules
# don't lint build output (make sure it's set to your correct build folder name)
dist

rollup.config.ts
```

### Prettier + Eslint

> `Prettier` 是一个的代码格式化工具,专注于代码格式自动调整  
> `ESLint` 关注代码质量,`Prettier` 关注代码格式  
> 两者一起搭配使用时,会有冲突,我们需要修改配置

```sh
# 安装 eslint-config-prettier
npm install eslint-config-prettier -D
```

修改 `.eslintrc` 配置

> 注意: 将 `prettier` 设为最后一个 `extends`

```json
//.eslintrc
{
  "extends": ["standard", "prettier"] // 扩展
}
```

### Prettier 格式问题的配置

> 使用 `Prettier` + `Eslint` 时, 用 `eslint-config-prettier` 来关掉所有和 `Prettier` 冲突的 `Eslint` 配置后,代码格式问题已全部由 `Prettier` 管理,但希望报错的来源是 `Eslint`, 也就是我们需要把`Prettier` 格式问题配置到`Eslint`的`rules`里面

```sh
# 安装 eslint-plugin-prettier prettier
npm install eslint-plugin-prettier prettier -D

# 创建 .prettierrc 定义 Prettier 规则
{
  "singleQuote": true
}

# 创建 .prettierignore 排除不需要格式化目录及文件
dist
node_modules
```

```json
// .eslintrc
{
  "extends": ["standard", "prettier"], // 扩展
  "plugins": ["@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "arrow-body-style": "off",
    "prefer-arrow-callback": "off"
  }
}
```

[Eslint 官网](http://eslint.cn/)  
[Prettier 官网](https://www.prettier.cn/)  
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)  
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
