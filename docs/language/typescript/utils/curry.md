---
title: curry<函数柯里化>
icon: page
author: Chengbotao
date: 2022-06-10 19:21:17
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @Author: Chengbotao
 * @Date: 2022-06-10 19:21:17
-->

## curry

> **说明:** _函数柯里化_

| 参数名 | 参数类型 | 参数说明       |
| ------ | -------- | -------------- |
| `fn`   | `any`    | 需要柯里化函数 |
| `args` | `any`    | fn 函数参数    |

### 使用

```ts
// npm install billows
// import { curry } from 'billows';

function add(a, b, c) {
 return a + b + c;
}
const add1 = curry(add, 1);
add1(2)(3); // 6
```

### 实现

```ts
export function curry(fn: any, ...args: any[]) {
 const len = fn.length;
 return function (this: any) {
  const anonArgs = Array.prototype.slice.call(arguments);
  Array.prototype.push.apply(args, anonArgs);
  if (args.length < len) {
   return curry.call(this, fn, ...args);
  } else {
   return fn.apply(this, args);
  }
 };
}
```

### 解析

```ts
// 获取函数fn 需要参数个数
const len = fn.length;
return function (this: any) {
 // 这里没有使用箭头函数 考虑 arguments 的获取
 // 匿名函数的this,this对象绑定的是在运行时函数的执行环境
 const anonArgs = Array.prototype.slice.call(arguments);
 Array.prototype.push.apply(args, anonArgs);
 if (args.length < len) {
  return curry.call(this, fn, ...args);
 } else {
  return fn.apply(this, args);
 }
};
```
