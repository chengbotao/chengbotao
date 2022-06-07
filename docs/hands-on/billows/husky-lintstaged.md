<!--
 * @Author: Chengbotao
 * @Date: 2022-06-07 10:46:36
-->

> 使用 `git` 管理的项目,即使不通过 `eslint + prettier` 代码检测的代码依然能被提交到仓库中去,这并不是我们想要的,所以我们可以借助 `husky` 来拦截 `git hooks` 操作,在 `git` 操作之前进行一次代码检测。

### husky

```sh
# 安装 husky
npm install husky -D
```

```json
// 在 package.json script 添加脚本
{
  "scripts": {
    "prepare": "npx husky install"
  }
}
```

```sh
# 初始化
npm run prepare
# 添加 pre-commit hooks 执行 eslint 修复
npx husky add .husky/pre-commit "npx eslint --fix"


#########################################
# 如果上一条命令执行出现下面提示
Usage:
  husky install [dir] (default: .husky)
  husky uninstall
  husky set|add <file> [cmd]

# 可以先添加一个没有cmd命令的空pre-commit
npx husky add .husky/pre-commit ""
# 然后找到 .husky/pre-commit 文件并修改
# .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx eslint --fix

###########################################
```

> 对于`git`提交来说,如果每次都用`eslint + prettier`检测可操作的所有文件,可能不是必要的,所以借助使用`lint-staged`工具只针对当前修改的部分进行检测。

### lint-staged

```sh
# 安装 lint-staged
npm install lint-staged -D

# 创建 .lintstagedrc 文件
# eslint代码校验 prettier 代码格式修改
{
    "packages/**/*.{ts,js}": [
        "npx eslint",
        "npx prettier --write"
    ]
}

# 修改 .husky/pre-commit

#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npx lint-staged
```

[husky](https://github.com/typicode/husky)  
[husky 参考 prettier 中使用](https://www.prettier.cn/docs//install.html#git-hooks)  
[lint-staged](https://github.com/okonet/lint-staged)
