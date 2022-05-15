:::tip toString

```
const toString = Object.prototype.toString;
```

:::

> **isString: 是否为字符串**

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

> **isArray: 是否为数组**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isArray(val: any): val is Array {
  return toString.call(val) === '[object Array]';
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isArray(val) {
  return toString.call(val) === '[object Array]';
}
```

  </CodeGroupItem>
</CodeGroup>

> **isPlainObject: 是否为简单对象**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]';
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isPlainObject(val) {
  return toString.call(val) === '[object Object]';
}
```

  </CodeGroupItem>
</CodeGroup>

> **isFunction: 是否为Function**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isFunction(val: any): val is Function {
  return typeof val === 'function';
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isFunction(val) {
  return typeof val === 'function';
}
```

  </CodeGroupItem>
</CodeGroup>

> **isEmptyObject: 是否为空对象**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isEmptyObject(val: any): boolean {
  // 对象为空
  for (const key in val) {
    return !!key && false;
  }
  return true;
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isEmptyObject(val) {
  // 对象为空
  for (const key in val) {
    return !!key && false;
  }
  return true;
}
```

  </CodeGroupItem>
</CodeGroup>

> **isDate: 是否为 Date**

<CodeGroup>
  <CodeGroupItem title="TS" active>

```ts
export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}
```

  </CodeGroupItem>

  <CodeGroupItem title="JS">

```js
export function isDate(val) {
  return toString.call(val) === '[object Date]'
}
```

  </CodeGroupItem>
</CodeGroup>