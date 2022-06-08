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
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'
```

### cz-customizable

> 借助 `husky` + `commitlint` 可以实现 `commit` 信息规范化提交  
> 但 `commitlint` 默认的 `commit` 规则不是很友好且容易忘记规则
> 所以我们可以借助 `cz-customizable` 来自定义 `commit` 规范且可视化的提交

```sh
# 安装 cz-customizable
npm install cz-customizable commitlint-config-cz -D
# 修改 .commitlintrc 配置文件
{
    "extends": ['@commitlint/config-conventional', 'cz']
}
```

```js
// 创建一个 .cz-config.js 文件
module.exports = {
  types: [
    { value: "feat", name: "✨ Features | 新功能" },
    { value: "fix", name: "🐛 Bug Fixes | Bug 修复" },
    { value: "init", name: "🎉 Init | 初始化" },
    { value: "docs", name: "✏️ Documentation | 文档" },
    { value: "style", name: "💄 Styles | 风格" },
    { value: "refactor", name: "♻️ Code Refactoring | 代码重构" },
    { value: "perf", name: "⚡ Performance Improvements | 性能优化" },
    { value: "test", name: "✅ Tests | 测试" },
    { value: "revert", name: "⏪ Revert | 回退"},
    { value: "build", name: "📦‍ Build System | 打包构建" },
    { value: "chore", name: "🚀 Chore | 构建/工程依赖/工具" },
    { value: "ci", name: "👷 Continuous Integration | CI 配置" },
  ],

  scopes: [
    { name: "accounts" },
    { name: "admin" },
    { name: "exampleScope" },
    { name: "changeMe" },
  ],

  allowTicketNumber: false,
  isTicketNumberRequired: false,
  ticketNumberPrefix: "TICKET-",
  ticketNumberRegExp: "\\d{1,5}",

  // it needs to match the value for field type. Eg.: 'fix'
  /*
  scopeOverrides: {
    fix: [
      {name: 'merge'},
      {name: 'style'},
      {name: 'e2eTest'},
      {name: 'unitTest'}
    ]
  },
  */
  // override the messages, defaults are as follows
  messages: {
    type: "选择要提交的更改类型:",
    scope: "\n表示此更改的范围(可选):",
    // used if allowCustomScopes is true
    customScope: "表示此更改的范围(自定义):",
    subject: "写一个简短的，命令式的时态描述变化:\n",
    body: '提供更改的较长描述(可选)。使用"|"换行:\n',
    breaking: "列出任何重大更改(可选):\n",
    footer: "列出此更改关闭的任何问题(可选). E.g.: #31, #34:\n",
    confirmCommit: "您确定要继续上面的提交吗?",
  },

  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  // skip any questions you want
  skipQuestions: ["body"],

  // limit subject length
  subjectLimit: 100,
  // breaklineChar: '|', // It is supported for fields body and footer.
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true, // default is false
};
```

### 实现自定义 commit 规范

+ **使用 `commitizen`**

```sh
# 安装 commitizen
npm install commitizen -D
```

```json
// 修改 package.json
{
  "scripts": {
    "commit": "npx git-cz"
  },
  "config": {
    "commitizen": {
      "path": "./node_modules/cz-customizable"
    },
    "cz-customizable": {
      "config": ".cz-config.js"
    }
  }
}
```

+ **不使用 `commitizen`**
```json
// 修改 package.json
{
  "scripts": {
    "commit": "node ./node_modules/cz-customizable/standalone.js",
  }
}
```

[commitlint](https://commitlint.js.org/#/)  
[cz-customizable](https://github.com/leoforfree/cz-customizable)
