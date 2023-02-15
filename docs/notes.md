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
