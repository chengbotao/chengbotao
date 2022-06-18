<!--
 * @Author: Chengbotao
 * @Date: 2022-06-18 00:27:39
-->

## getValueByReference

> **说明:** _根据对象的引用获取值_

| 参数名   | 参数类型             | 参数说明       |
| -------- | -------------------- | -------------- |
| `target` | `any`                | 要设置值的对象 |
| `refer`  | `string`\|`string[]` | 对象的引用路径 |

### 使用

```ts
// npm install billows
// import { getValueByReference } from 'billows';

const obj = {
  a: {
    b: {
      c: "chengbotao",
    },
  },
};

getValueByReference(obj, "a.b.c"); // "chengbotao"
// getValueByReference(obj, ["a", "b", "c"]); // "chengbotao"
```

### 实现

```ts
export function getValueByReference(
  target: any,
  refer: string | string[]
): any {
  const refers: string[] =
    typeof refer === "string"
      ? (refer as string).split(".")
      : (refer as string[]);

  return refers.reduce((obj, key) => {
    return obj && obj[key];
  }, target);
}
```

### 解析

> 借助 `Array.prototype.reduce` 迭代操作,返回路径的值

```ts
// 针对参数对象路径做类型统一处理 string[]
const refers: string[] =
  typeof refer === "string"
    ? (refer as string).split(".")
    : (refer as string[]);

return refers.reduce((obj, key) => {
  return obj && obj[key];
}, target);
```
