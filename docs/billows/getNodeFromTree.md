<!--
 * @Author: Chengbotao
 * @Date: 2022-06-18 12:56:47
-->

## getNodeFromTree

> **说明:** _根据标志获取树形中的节点_

| 参数名     | 参数类型                | 参数说明                       |
| ---------- | ----------------------- | ------------------------------ | --------------------------- |
| `target`   | `any[] & DuckTyping`    | 树结构对象数组或一个树结构对象 |
| `mark`     | `any`                   | 要找的节点的标志               |
| `options?` | `Partial<Record<'idKey' | 'childrenKey', string>>`       | 标志的 `key` 、子集的 `key` |

### 使用

```ts
// npm install billows
// import { getNodeFromTree } from 'billows';
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

const province1201 = getNodeFromTree(provinceList, "1201");

{
    id: "1201",
    pid: "1200",
    label: "南京"
};
```

### 实现

```ts
export declare interface DuckTyping {
  [key: string]: any;
}
// import { DuckTyping } from '../types';

export function getNodeFromTree(
  target: any[] & DuckTyping,
  mark: any,
  options?: Partial<Record<"idKey" | "childrenKey", string>>
) {
  const copyTree =
    Object.prototype.toString.call(target) === "[object Array]"
      ? Array.prototype.slice.call(target)
      : [target];
  const defaultOpts = Object.assign(
    {
      idKey: "id",
      childrenKey: "children",
    },
    options
  );
  const { idKey, childrenKey } = defaultOpts;

  while (copyTree.length) {
    const node = copyTree.shift();
    if (node[idKey] === mark) {
      return node;
    }
    if (node[childrenKey]) {
      Array.prototype.push.apply(copyTree, node.children);
    }
  }
  return null;
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

// 合并默认参数
const defaultOpts = Object.assign(
  {
    idKey: "id", // 根据那个标志
    childrenKey: "children", // 子集key
  },
  options
);

const { idKey, childrenKey } = defaultOpts;

while (copyTree.length) {
  const node = copyTree.shift();
  // 根据标志获取的值与传入的mark作比较 如相同则返回 节点
  if (node[idKey] === mark) {
    return node;
  }
  // 判断是否有子集
  if (node[childrenKey]) {
    Array.prototype.push.apply(copyTree, node.children);
  }
}
return null;
```
