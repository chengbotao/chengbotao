---
title: flatToTree<扁平化数据结构树形>
icon: page
author: Chengbotao
date: 2022-06-18 10:11:46
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @Author: Chengbotao
 * @Date: 2022-06-18 10:11:46
-->

## flatToTree

> **说明:** _扁平化数据结构树形_

| 参数名     | 参数类型                                                                    | 参数说明                                                             |
| ---------- | --------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `target`   | `any[]`                                                                     | 扁平化数据结构                                                       |
| `options?` | `Partial<Record<'idKey' \| 'pidKey' \| 'childrenKey' \| 'topVal', string>>` | 树形结构关键 keys(唯一标志、 父级`id`、 子集 `key`、 `topVal`顶层值) |

### 使用

```ts
// npm install billows
// import { flatToTree } from 'billows';

const provinceFlat = [
  {
    id: "1000",
    label: "湖北省",
  },
  {
    id: "1001",
    pid: "1000",
    label: "武汉",
  },
  {
    id: "1020",
    pid: "1000",
    label: "咸宁",
  },
  {
    id: "1022",
    pid: "1000",
    label: "孝感",
  },
  {
    id: "1034",
    pid: "1000",
    label: "襄阳",
  },
  {
    id: "1003",
    pid: "1000",
    label: "宜昌",
  },
  {
    id: "100101",
    pid: "1001",
    label: "洪山区",
  },
  {
    id: "100102",
    pid: "1001",
    label: "武昌区",
  },
  {
    id: "100103",
    pid: "1001",
    label: "汉阳区",
  },
  {
    id: "1200",
    value: "江苏省",
    label: "江苏省",
  },
  {
    id: "1201",
    pid: "1200",
    label: "南京",
  },
  {
    id: "1202",
    pid: "1200",
    label: "苏州",
  },
  {
    id: "1204",
    pid: "1200",
    label: "扬州",
  },
];

const provinceList = flatToTree(provinceFlat);

[
  {
    id: "1000",
    label: "湖北省",
    children: [
      {
        id: "1001",
        pid: "1000",
        label: "武汉",
        children: [
          { id: "100101", pid: "1001", label: "洪山区" },
          { id: "100102", pid: "1001", label: "武昌区" },
          { id: "100103", pid: "1001", label: "汉阳区" },
        ],
      },
      { id: "1020", pid: "1000", label: "咸宁" },
      { id: "1022", pid: "1000", label: "孝感" },
      { id: "1034", pid: "1000", label: "襄阳" },
      { id: "1003", pid: "1000", label: "宜昌" },
    ],
  },
  {
    id: "1200",
    value: "江苏省",
    label: "江苏省",
    children: [
      { id: "1201", pid: "1200", label: "南京" },
      { id: "1202", pid: "1200", label: "苏州" },
      { id: "1204", pid: "1200", label: "扬州" },
    ],
  },
];
```

### 实现

```ts
export declare interface DuckTyping {
  [key: string]: any;
}
// import { DuckTyping } from "../types";

export function flatToTree(
  target: any[],
  options?: Partial<
    Record<"idKey" | "pidKey" | "childrenKey" | "topVal", string>
  >
) {
  const copyFlat = Array.prototype.slice.call(target);
  const record: DuckTyping = Object.create(null);
  const defaultOpts = Object.assign(
    {
      idKey: "id",
      pidKey: "pid",
      childrenKey: "children",
      topVal: "",
    },
    options
  );
  const { idKey, pidKey, childrenKey, topVal } = defaultOpts;
  const tree = [];
  for (let i = 0, len = copyFlat.length; i < len; i++) {
    const item = copyFlat[i];
    const { [idKey]: idVal, [pidKey]: pidVal } = item;
    if (record[idVal]) {
      item[childrenKey] = record[idVal];
    } else {
      item[childrenKey] = record[idVal] = [];
    }

    if (pidVal && pidVal !== topVal) {
      if (!record[pidVal]) {
        record[pidVal] = [];
      }
      record[pidVal].push(item);
    } else {
      tree.push(item);
    }
  }
  return tree;
}
```

### 解析

```ts
// copy 一份扁平数据
const copyFlat = Array.prototype.slice.call(target);
// 创建一个空对象
const record: DuckTyping = Object.create(null);
// 合并默认参数
const defaultOpts = Object.assign(
  {
    idKey: "id", // 每个节点唯一标致的key
    pidKey: "pid", // 节点中父节点key
    childrenKey: "children", // 要生成子集key
    topVal: "", // 定义顶层值, 如: 顶层节点中pidKey的值隐式false 则不需要配置topVal; 如果顶层节点pidKey的值是自定义的值 topVal定义成这个值
  },
  options
);
const { idKey, pidKey, childrenKey, topVal } = defaultOpts;
const tree = [];
for (let i = 0, len = copyFlat.length; i < len; i++) {
  const item = copyFlat[i];
  const { [idKey]: idVal, [pidKey]: pidVal } = item;

  // 每个节点新增 childrenKey 的属性
  if (record[idVal]) {
    item[childrenKey] = record[idVal];
  } else {
    item[childrenKey] = record[idVal] = [];
  }

  // 如果不是顶层节点 借助 record 继续循环
  if (pidVal && pidVal !== topVal) {
    if (!record[pidVal]) {
      record[pidVal] = [];
    }
    record[pidVal].push(item);
  } else {
    // 如果是顶层节点 push tree
    tree.push(item);
  }
}
return tree;
```
