---
title: instanceOf<构造函数>
icon: page
author: ChengBotao
date: 2022-06-15 20:14:59
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @Author: Chengbotao
 * @Date: 2022-06-15 20:14:59
-->

## instanceOf

> **说明:** _检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上_  
> **返回:** _`{ boolean }`_

| 参数名   | 参数类型 | 参数说明       |
| -------- | -------- | -------------- |
| `target` | `any`    | 检测的构造函数 |
| `ctor`   | `any`    | 实例对象       |

### 使用

```ts
// npm install billows
// import { instanceOf } from 'billows';

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

instanceOf(auto, Car); // true
instanceOf(auto, Object); // true
```

### 实现

```ts
export function instanceOf(target: any, ctor: any): boolean {
  let proto = Reflect.getPrototypeOf(target);
  while (proto) {
    if (proto === ctor.prototype) {
      return true;
    }
    proto = Reflect.getPrototypeOf(proto);
  }
  return false;
}
```

### 解析

> 借助`Reflect.getPrototypeOf()` 或 `Object.getPrototypeOf()`, 获取指定对象的原型(`Prototype`属性的值)

```ts
let proto = Reflect.getPrototypeOf(target);

// 每个实例对象(object)都有一个私有属性(称之为 __proto__ )指向它的构造函数的原型对象(prototype)
// 该原型对象也有一个自己的原型对象(__proto__),层层向上直到一个对象的原型对象为 null

// 原型链: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain

// 因为要在原型链上查找 使用循环来处理,原型链尽头是 null 也不会造成死循环
while (proto) {
  // 如果构造函数 prototype 等于 实例对象的原型 则返回 true
  if (proto === ctor.prototype) {
    return true;
  }
  proto = Reflect.getPrototypeOf(proto);
}
return false;
```
