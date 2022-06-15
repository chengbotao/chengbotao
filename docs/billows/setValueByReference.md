<!--
 * @Author: Chengbotao
 * @Date: 2022-06-15 20:40:27
-->

## setValueByReference

> **说明:** _根据对象的引用设置值_

| 参数名   | 参数类型             | 参数说明       |
| -------- | -------------------- | -------------- |
| `target` | `any`                | 要设置值的对象 |
| `refer`  | `string`\|`string[]` | 对象的引用路径 |
| `val`    | `any`                | 要设置的值     |

### 使用

```ts
// npm install billows
// import { setValueByReference } from 'billows';

const obj = {};

setValueByReference(obj, "a.b.c", "chengbotao");
// setValueByReference(obj, ["a", "b", "c"], "chengbotao");

// obj
// {
//   a: {
//     b: {
//       c: "chengbotao";
//     }
//   }
// }
```

### 实现

```ts
export function setValueByReference(
  target: any,
  refer: string | string[],
  val: any
): any {
  const refers: string[] =
    typeof refer === "string"
      ? (refer as string).split(".")
      : (refer as string[]);

  return (
    (refers.slice(0, -1).reduce((obj, key) => {
      return (obj[key] = obj[key] || {});
    }, target)[refers.pop() as string] = val),
    target
  );
}
```

### 解析

> 借助 `Array.prototype.reduce` 迭代操作

```ts
// 针对参数对象路径做类型统一处理 string[]
const refers: string[] =
  typeof refer === "string"
    ? (refer as string).split(".")
    : (refer as string[]);

// refers.slice(0, -1) 复制一份对象引用路径但不包含最后的key值
// ["a", "b", "c"] => ["a", "b"]
// 使用 reduce 迭代给 target 寻找路径的值并返回最后一层的对象结构 target["a"]["b"]
// refers.pop() 取到引用路径的最后的key
// "c"
// 最后赋值操作
// target["a"]["b"]["c"] = val
// , 逗号操作符
// 待迭代结束 将 target return返回
return (
  (refers.slice(0, -1).reduce((obj, key) => {
    return (obj[key] = obj[key] || {});
  }, target)[refers.pop() as string] = val),
  target
);
```
