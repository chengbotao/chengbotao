:::tip toString

```
const toString = Object.prototype.toString;
```

:::

1.  **isString: 是否为字符串**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isString(val: any): val is String {
    return toString.call(val) === '[object String]';
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isString(val) {
    return toString.call(val) === '[object String]';
}
```

  </CodeGroupItem>
</CodeGroup>
