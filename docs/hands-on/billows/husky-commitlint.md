<!--
 * @Author: Chengbotao
 * @Date: 2022-06-07 14:54:14
-->

### commitlint

```sh
# 安装
npm install @commitlint/cli @commitlint/config-conventional -D

# 创建 .commitlintrc 文件
{
    "extends": ['@commitlint/config-conventional']
}
```

### husky

```sh
# husky 创建 commit-msg hooks
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "\${1}"'
```

### cz-customizable

> 借助 `husky` + `commitlint` 可以实现 `commit` 信息规范化提交  
> 但 `commitlint` 默认的 `commit` 规则不能很友好且容易忽略规则
> 所以我们可以借助 `cz-customizable` 来自定义 `commit` 规范且可视化的提交

```sh
# 安装 cz-customizable
npm install cz-customizable -D

# 创建一个 .cz-config.js 文件
```

```json
// package.json
{
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    }
  }
}
```

[commitlint](https://commitlint.js.org/#/)
