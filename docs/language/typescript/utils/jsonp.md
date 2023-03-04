---
title: Promise版jsonp
icon: page
author: ChengBotao
date: 2023-03-04 11:26:47
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 11:26:47
-->

## jsonp

> 使用`script`的`src`属性实现跨域

| 参数名             | 参数类型                  | 参数说明         |
| ------------------ | ------------------------- | ---------------- |
| `url`              | `string`                  | `url`地址        |
| `callbackName`     | `string`-默认值`callback` | 回调函数名       |
| `params`           | `any`                     | `url`参数        |
| `paramsSerializer` | `(params: any) => string` | 自定义参数序列化 |

### 实现

> **依赖函数**  
> `buildURL` - 构建`URL`

```ts
interface JsonpOpts {
	url: string;
	callbackName: string;
	params?: any;
	paramsSerializer?: (params: any) => string;
}

export function jsonp(options: JsonpOpts) {
	const {
		url,
		callbackKey = "callback",
		callbackName,
		params,
		paramsSerializer,
	} = options;
	return new Promise((resolve, reject) => {
		const scriptEl = document.createElement("script");
		scriptEl.src = `${buildURL(
			url,
			params,
			paramsSerializer
		)}&${callbackKey}=${callbackName}`;
		document.body.appendChild(scriptEl);
		(<any>window)[callbackName] = (data: any) => {
			resolve(data);
			document.removeChild(scriptEl);
		};
	});
}
```

### 示例

```ts
jsonp({
	url: "http://127.0.0.1/search?wd=botaoxy",
	callbackKey: "cb",
	callbackName: customFun,
}).then((res) => {
	console.log(res);
});

// async await
async function searchUser() {
	const userInfo = await jsonp({
		url: "http://127.0.0.1/search?wd=botaoxy",
		callbackKey: "cb",
		callbackName: customFun,
	});
}
```
