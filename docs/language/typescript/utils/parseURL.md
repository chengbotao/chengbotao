---
title: 解析 URL 参数
icon: page
author: ChengBotao
date: 2023-03-04 11:25:59
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 11:25:59
-->

## parseURL

> 解析 `url` 参数

| 参数名 | 参数类型 | 参数说明  |
| ------ | -------- | --------- |
| `url`  | `string` | `url`地址 |

### 实现

```ts
export function parseURL(url: string) {
	const instanceURL = new URL(url);
	const URLParams = instanceURL.search.slice(1);
	if (!URLParams) return null;
	const splitURLParams = URLParams.split("&");
	const params = Object.create(null);
	splitURLParams.forEach((param) => {
		if (param.includes("=")) {
			const [key, val] = param.split("=");
			params[key] = decodeURIComponent(val);
		} else {
			params[param] = true;
		}
	});
	return params;
}
```

### 示例

```ts
const url = "https://127.0.0.1/search?serName=botaoxy&password=123456";

parseURL(url);
// {
//    userName: 'botaoxy',
//    password: '123456'
// }
```
