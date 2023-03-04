---
title: throttle<节流>
icon: page
author: ChengBotao
date: 2022-06-23 11:16:23
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-01 19:58:05
-->

## throttle

> 节流函数  
> `wait` 毫秒内只运行一次，若`wait` 毫秒内重复触发，只有一次生效

- 滚动加载
- 搜索框联想功能

| 参数名    | 参数类型                                  | 参数说明       |
| --------- | ----------------------------------------- | -------------- |
| `fn`      | `any`                                     | 指定的函数     |
| `wait`    | `number`                                  | 节流时间(毫秒) |
| `options` | `{leading?: boolean;trailing?: boolean;}` | 节流配置参数   |

| 属性       | 说明                     | 默认值  |
| ---------- | ------------------------ | ------- |
| `leading`  | 是否立即执行             | `false` |
| `trailing` | 调用结束后是否再执行一次 | `true`  |

### 实现

```ts
export function throttle(
	fn: any,
	wait: number,
	options: {
		leading?: boolean;
		trailing?: boolean;
	} = {}
) {
	let previous = 0;
	let timer: ReturnType<typeof setTimeout> | null;
	const defaultOpts = Object.assign(
		{
			leading: false,
			trailing: true,
		},
		options
	);
	const lambda = function (this: any) {
		const now = Date.now();
		const args = Array.prototype.slice.call(arguments);
		if (!previous && !defaultOpts.leading) previous = now;
		const remaining = wait - (now - previous);

		if (remaining <= 0 || remaining > wait) {
			if (timer) {
				clearTimeout(timer);
				timer = null;
			}

			previous = now;
			fn.apply(this, args);
			if (!timer) args = null;
		} else if (!timer && defaultOpts.trailing) {
			timer = setTimeout(() => {
				previous = defaultOpts.leading === false ? 0 : Date.now();
				timer = null;
				const args = Array.prototype.slice.call(arguments);
				fn.apply(this, args);
				if (!timer) args = null;
			}, remaining);
		}
	};

	// 取消功能
	lambda.cancel = function () {
		clearTimeout(timer as ReturnType<typeof setTimeout>);
		timer = null;
		previous = 0;
	};

	return lambda;
}
```

### 示例

```ts
function getUserInfo() {
	// 请求接口获取数据
	return axios
		.post("/user", { userName: "botaoxy", password: "123456" })
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
}

throttle(getUserInfo, 1000);
```
