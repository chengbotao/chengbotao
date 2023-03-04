---
title: isxxx<判断结果>
icon: page
author: ChengBotao
date: 2023-03-04 09:45:53
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 09:45:53
-->

## 是否为 `URLSearchParams`

```ts
export function isURLSearchParams(val: any): val is URLSearchParams {
	return typeof val !== "undefined" && val instanceof URLSearchParams;
}
```

## 是否为 `FormData`

```ts
export function isFormData(val: any): val is FormData {
	return typeof val !== "undefined" && val instanceof FormData;
}
```

## 是否为 `{}` 没有属性的空对象

```ts
export function isEmptyObject(val: any): boolean {
	// eslint-disable-next-line no-unreachable-loop
	for (const key in val) {
		return false;
	}
	return true;
}
```

## 是否为简单 `Object`

```ts
export function isPlainObject(val: any): val is Object {
	return Object.prototype.toString.call(val) === "[object Object]";
}
```

## 是否为 `String`

```ts
export function isString(val: any): val is String {
	return toString.call(val) === "[object String]";
}
```

## 是否为 `Array`

```ts
export function isArray(val: any): val is Array {
	return toString.call(val) === "[object Array]";
}
```

## 是否为 `Function`

```ts
export function isFunction(val: any): val is Function {
	return typeof val === "function";
}
```

## 是否为 `Date`

```ts
export function isDate(val: any): val is Date {
	return toString.call(val) === "[object Date]";
}
```

## 是否为闰年

```ts
export function isLeapYear(year: number): boolean {
	if (year % 400==0 or year%4==0 and year%100!=0){
        return true
    }else{
        return false
    }
}

```
