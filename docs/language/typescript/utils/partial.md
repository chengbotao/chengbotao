---
title: partial<偏函数>
icon: page
author: ChengBotao
date: 2022-06-09 18:43:23
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @Author: Chengbotao
 * @Date: 2022-06-09 18:43:23
-->

## partial

> **说明:** _偏函数_

| 参数名 | 参数类型 | 参数说明       |
| ------ | -------- | -------------- |
| `fn`   | `any`    | 需要偏函数函数 |

### 使用

```ts
// npm install billows
// import { partial } from 'billows';

function isType(type: string, val: any) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
let isString = partial(isType, "String");
let isArray = partial(isType, "Array");
let isDate = partial(isType, "Date");

isString("chengbotao"); // true
isArray([]); // true
isDate(new Date()); // true
```

### 实现

```ts
export function partial(fn: any) {
  const args = Array.prototype.slice.call(arguments, 1);
  return function (this: any) {
    const anonArgs = Array.prototype.slice.call(arguments);
    Array.prototype.push.apply(args, anonArgs);
    return fn.apply(this, args);
  };
}
```

### 解析

```ts
// 获取除了 偏函数外的其他参数
const args = Array.prototype.slice.call(arguments, 1);
return function (this: any) {
  // 使用匿名函数 来划分 arguments
  // 匿名函数的this,this对象绑定的是在运行时函数的执行环境
  const anonArgs = Array.prototype.slice.call(arguments);
  Array.prototype.push.apply(args, anonArgs);
  return fn.apply(this, args);
};
```
