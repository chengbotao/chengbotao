<!--
 * @Author: Chengbotao
 * @Date: 2022-06-01 14:46:38
-->

### typeof

> `typeof` 来判断数据类型会不准确, 可以使用 `Object.prototype.toString` 实现。

| 类型         | 返回值      |
| ------------ | ----------- |
| `Undefined`  | `undefined` |
| `Boolean`    | `boolean`   |
| `Number`     | `number`    |
| `BigInt`     | `bigInt`    |
| `String`     | `string`    |
| `Symbol`     | `symbol`    |
| `Function`   | `function`  |
| `Null`       | `object`    |
| **其他对象** | `object`    |

```ts
// 手写实现 typeOf
function typeOf(val: any): string {
  const toString = Object.prototype.toString;
  let type = toString.call(val).split(" ")[1];
  type = type.substring(0, type.length - 1).toLowerCase();
  return type;
}

typeOf([]); // array
typeOf({}); // object
typeOf(null); // null
typeOf(undefined); // undefined
function Fun() {}
typeOf(Fun); // function
let date = new Date();
typeOf(date); // date
let promise = Promise.resolve();
typeOf(promise); // promise
```

### instanceOf

> `instanceof` 运算符用于检测构造函数的 `prototype` 属性是否出现在某个实例对象的原型链上。

```ts
// 手写实现 instanceOf
function instanceOf(obj: any, ctor: any): boolean {
  let proto = obj;
  while (!!proto) {
    proto = Reflect.getPrototypeOf(proto);
    if (proto === ctor.prototype) {
      return true;
    }
  }
  return false;
}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);
instanceOf(auto, Car); // true
instanceOf(auto, Object); // true
```

### 深克隆

> 数据类型有**值类型**和**引用类型**  
> 对象属于引用类型,在赋值给别的变量时,只是把引用地址赋值给变量,这样会导致修改对象的值之后,变量也会受影响

```ts
let obj = {
  name: "chengbotao",
  age: 28,
};

let cloneObj = obj;

obj.name = "botao";

console.log(cloneObj.name); // botao
```

> 在实现深克隆要对内置对象比如 `Date`、`RegExp` 等对象和函数克隆以及解决了对象循环引用的问题。

```ts
// 深克隆
function deepClone(target: any, map = new WeakMap()): any {
  // 如果不是对象就直接返回
  if (target === null || typeof target !== "object") {
    return target;
  }

  // WeakMap 为循环引用的对象做标记
  if (map.get(target)) {
    return target;
  }

  let ctor = target.constructor;
  if (/^(RegExp|Date)$/i.test(ctor.name)) {
    return new ctor(target);
  }

  // WeakMap 为循环引用的对象做标记
  map.set(target, true);

  let cloneResult =
    Object.prototype.toString.call(target) === "[object Array]" ? [] : {};
  for (let key in target) {
    cloneResult[key] = deepClone(target[key], map);
  }
  return cloneResult;
}
```

### reduceGetObj

> 使用 `Array` 的 `reduce` 方法,  
> 根据传入的对象及对象的引用获取引用的值

```ts
function reduceGetObj(object: object, path: string | string[]): object {
  let tempPath = isString(path) ? path.split(".") : path;
  return tempPath.reduce((obj, key) => {
    return obj && obj[key];
  }, object);
}
reduceGetObj({ a: { b: "3" } }, "a.b"); // 3
reduceGetObj({ a: { b: "3" } }, ["a", "b"]); // 3
```

### reduceSetObj

> 使用 `Array` 的 `reduce` 方法,  
> 根据传入的对象、对象的引用设置值

```ts
export function reduceSetObj(object: object, path: string, val: any): object {
  let tempPath = isString(path) ? path.split(".") : path;
  // , 操作符
  return (
    (tempPath.slice(0, -1).reduce((obj, key) => {
      return (obj[key] = obj[key] || {});
    }, object)[tempPath.pop()] = val),
    object
  );
}

reduceSetObj({ a: { b: "3" } }, "a.c", 4); // {a:{b:"3",c:4}}
reduceGetObj({ a: { b: "3" } }, ["a", "b"], 4); // {a:{b:"3",c:4}}
```
