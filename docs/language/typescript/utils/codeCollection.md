---
title: 代码集合
icon: page
author: ChengBotao
date: 2023-03-04 09:16:37
category:
  - TypeScript
tag:
  - 工具函数
---

<!--
 * @description:
 * @Author: ChengBotao
 * @Date: 2023-03-04 09:16:37
-->

## 手机号脱敏

```ts
phone.replace(/(\d{3})\d{4}(\d{4})/g, "$1****$2");
```

## 邮箱号脱敏

```ts
email.replace(/([^@]*)/, (word) => {
	return word.slice(0, 3) + word.slice(3).replace(/.{1}/g, "*");
});
```

## 驼峰转分割

```ts
propertyName.replace(/[A-Z]/g, (letter, offset) => {
	return offset === 0 ? `${letter.toLowerCase()}` : `-${letter.toLowerCase()}`;
});
```
