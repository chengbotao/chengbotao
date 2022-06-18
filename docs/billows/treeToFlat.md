## treeToFlat

> **说明:** _树形数据结构扁平化_

| 参数名      | 参数类型             | 参数说明                         |
| ----------- | -------------------- | -------------------------------- |
| `target`    | `any[] & DuckTyping` | 树结构对象数组或一个树结构对象   |
| `subsetKey` | `string`             | 树形子集的键名(默认是`children`) |

### 使用

```ts
// npm install billows
// import { treeToFlat } from 'billows';

const provinceList = [
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

const provinceFlat = treeToFlat(provinceList);

[
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
```

### 实现

```ts
export declare interface DuckTyping {
  [key: string]: any;
}
// import { DuckTyping } from '../types';

export function treeToFlat(
  target: any[] & DuckTyping,
  subsetKey: string = "children"
) {
  const copyTree =
    Object.prototype.toString.call(target) === "[object Array]"
      ? Array.prototype.slice.call(target)
      : [target];

  const flat = [];

  while (copyTree.length) {
    const node = copyTree.shift();
    const { [subsetKey]: children, ...rest } = node;
    flat.push(rest);
    if (children) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }

  return flat;
}
```

### 解析

```ts
// 对传入的树做类型统一
// 多个树的List Array  || 单个树的对象
const copyTree =
  Object.prototype.toString.call(target) === "[object Array]"
    ? Array.prototype.slice.call(target)
    : [target];

// 返回的扁平的数组
const flat = [];

while (copyTree.length) {
  // 循环取出节点
  const node = copyTree.shift();
  // 解构赋值 动态属性赋值 children
  const { [subsetKey]: children, ...rest } = node;
  // 节点除了children属性以外的属性push flat中
  flat.push(rest);
  if (children) {
    // 判断是否有 children push继续循环(多个树List 广度优先 将所有树一级扁平化再继续第二级)
    Array.prototype.push.apply(copyTree, node.children);
    // (多个树List 深度优先 先将一个树扁平化)
    // Array.prototype.unshift.apply(copyTree, node.children);
  }
}

return flat;
```
