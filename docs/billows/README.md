<!--
 * @Author: Chengbotao
 * @Date: 2022-06-15 09:11:17
-->

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/chengbotao/billows)
![GitHub](https://img.shields.io/github/license/chengbotao/billows)
![GitHub Repo stars](https://img.shields.io/github/stars/chengbotao/billows)

# Billows

**常用的工具函数集合**

## Install

```bash
npm install billows
```

## Usage

```ts
// 全量引入
import * as billows from "billows";
billows.typeOf("chengbotao"); // "string"

// 差量使用
import { typeOf } from "billows";
typeOf("chengbotao"); // "string"
```

| 函数名                                          | 说明                                                            |
| ----------------------------------------------- | --------------------------------------------------------------- |
| [`typeOf`](typeOf.md)                           | 返回变量类型                                                    |
| [`instanceOf`](instanceOf.md)                   | 检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上 |
| [`setValueByReference`](setValueByReference.md) | 通过引用设置值的函数                                            |
| [`getValueByReference`](getValueByReference.md) | 通过引用获取值的函数                                            |
| [`deepClone`](deepClone.md)                     | 深拷贝函数                                                      |
| [`treeToFlat`](treeToFlat.md)                   | 树结构转扁平化结构                                              |
| [`partial`](partial.md)                         | 偏函数                                                          |
| [`getNodeFromTree`](getNodeFromTree.md)         | 根据唯一标志从树结构中获取节点                                  |
| [`flatToTree`](flatToTree.md)                   | 扁平化转结构转树结构                                            |
| [`curry`](curry.md)                             | 函数柯里化                                                      |
