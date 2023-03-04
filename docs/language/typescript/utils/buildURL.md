---
title: 构建URL
icon: page
author: ChengBotao
date: 2023-03-04 11:24:39
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 11:24:39
-->

## buildURL

> 构建`url`

| 参数名             | 参数类型                  | 参数说明         |
| ------------------ | ------------------------- | ---------------- |
| `url`              | `string`                  | `url`地址        |
| `params`           | `any`                     | `url`参数        |
| `paramsSerializer` | `(params: any) => string` | 自定义参数序列化 |

### 实现

> **依赖函数**  
> [`typeOf`](./typeOf.md) > [`isURLSearchParams` - 判断是否是 **`URLSearchParams`**类型](./isxxx.md) > [`encodeURIC` - **`encodeURIComponent`** 针对一些特殊字符编码处理](./encodeURIC.md)

```ts
export function buildURL(
	url: string,
	params?: any,
	paramsSerializer?: (params: any) => string
) {
	if (!params) return url;
	let serializerParams;
	if (paramsSerializer) {
		serializerParams = paramsSerializer(params);
	} else if (isURLSearchParams(params)) {
		serializerParams = params.toString();
	} else {
		const parts: string[] = [];
		Object.getOwnPropertyNames(params).forEach((key) => {
			const paramsVal = params[key];
			if (paramsVal === null || typeof paramsVal === "undefined") return;
			let values = [];
			if (typeOf(paramsVal) === "array") {
				values = paramsVal;
				key += "[]";
			} else {
				values = [paramsVal];
			}

			values.forEach((val: any) => {
				if (typeOf(val) === "date") {
					val = val.toISOString();
				} else if (typeOf(val) === "object") {
					val = JSON.stringify(val);
				}
				parts.push(`${encodeURIC(key)}=${encodeURIC(val)}`);
			});
		});
		serializerParams = parts.join("&");
	}

	if (serializerParams) {
		const markIndex = url.indexOf("#");
		if (markIndex !== -1) {
			url = url.slice(0, markIndex);
		}

		url += (url.indexOf("?") === -1 ? "?" : "&") + serializerParams;
	}

	return url;
}
```

### 示例

```ts
// 传入 url 和 对象参数
const url = "https://127.0.0.1/search";
const params = {
	userName: "botaoxy",
	password: "123456",
};
buildURL(url, params); // https://127.0.0.1/search?userName=botaoxy&password=123456

// 传入的 URLSearchParams 类型的参数
const paramsString = "userName=botaoxy&password=123456";
const searchParams = new URLSearchParams(paramsString);
buildURL(url, searchParams); // https://127.0.0.1/search?userName=botaoxy&password=123456

// url已携带部分参数来做组合
const url1 = "https://127.0.0.1/search?userName=botaoxy";
const params1 = {
	password: "123456",
};
buildURL(url1, params1); // https://127.0.0.1/search?userName=botaoxy&password=123456
```
