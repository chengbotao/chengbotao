## (偏函数)Pratial

> 将一个多参函数的某些参数先设置默认值,并返回一个新的函数,用新的函数继续接受剩余参数  

1. **下面类型判断函数重复使用了 `Object.prototype.toString.call(val)`看起来比较繁琐**

```ts
function isString(val: any): val is String {
  return Object.prototype.toString.call(val) === '[object String]';
}
function isArray(val: any): val is Array {
  return Object.prototype.toString.call(val) === '[object Array]';
}
function isDate(val: any): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]'
}
```

2. **使用偏函数实现**

```ts
function isType(type: string): (val:any) => boolean {
  return (val: any):boolean =>{
    return Object.prototype.toString.call(val) === `[object ${type}]`;
  }
}

let isString = isType("String");
let isArray = isType("Array");
let isDate = isType("Date");

isString("chengbotao"); // true
isArray([]); // true
isDate(new Date()); // true
```

3. **通用的偏函数**

```ts
function partial(fn, ...argsBound) {
  return (...args)=>{
    return fn(...argsBound, ...args);
  }
}
```

```ts
function isType(type: string, val: any) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
let isString = partial(isType, "String");
let isArray = partial(isType, "Array");
let isDate = partial(isType, "Date");
```

4. **可以使用占位符的偏函数**

```ts
function partial(fn) {
  let argsBound = [].slice.call(arguments, 1);
  return (...args) => {
    let position = 0;
    for (let i = 0; i < argsBound.length; i++) {
      argsBound[i] = argsBound[i] === "_" ? args[position++] : argsBound[i];
    }
    if (position < args.length)
      argsBound = argsBound.concat(args.slice(position));
    return fn(...argsBound);
  };
}

// 修改一下 isType 参数顺序
function isType(val: any, type: string) {
  return Object.prototype.toString.call(val) === `[object ${type}]`;
}
let isString = partial(isType, "_", "String");
let isArray = partial(isType, "_", "Array");
let isDate = partial(isType, "_", "Date");
```
