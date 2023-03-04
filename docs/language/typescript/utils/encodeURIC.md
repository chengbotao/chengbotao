---
title: URI针对特殊字符编码处理
icon: page
author: ChengBotao
date: 2023-03-04 11:24:03
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 11:24:03
-->

## encodeURIC

> `URI` 针对特殊字符编码处理

### 实现

```ts
export function encodeURI(val: string): string {
	return encodeURIComponent(val)
		.replace(/%40/g, "@")
		.replace(/%3A/gi, ":")
		.replace(/%24/g, "$")
		.replace(/%2C/gi, ",")
		.replace(/%20/g, "+")
		.replace(/%5B/gi, "[")
		.replace(/%5D/gi, "]");
}
```

### 示例

```ts
console.log(`?x=${encodeURI('botaoxy?')}`); // ?x=botaoxy%3F
console.log(`?x=${encodeURI('шеллы')}`)； // "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```
