<!--
 * @Author: Chengbotao
 * @Date: 2022-06-01 14:46:38
-->

```ts
// 手写实现 typeOf
function typeOf(val: any): string {
  const toString = Object.prototype.toString;
  let type = toString.call(val).split(" ")[1];
  type = type.substring(0, type.length - 1);
  return type;
}

typeOf([]); // Array
typeOf({}); // Object
typeOf(null); // Null
typeOf(undefined); // Undefined
function Fun() {}
typeOf(Fun); // Function
let date = new Date();
typeOf(date); // Date
let promise = Promise.resolve();
typeOf(promise); // Promise
```

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

```ts
// 深克隆
function deepClone(target: any, map = new WeakMap()): any {
  if (
    target === null ||
    (typeof target !== "object" && typeof target !== "function")
  ) {
    return target;
  }

  if (map.get(target)) {
    return target;
  }

  let ctor = target.constructor;
  if (/^(RegExp|Date)$/i.test(ctor.name)) {
    return new ctor(target);
  }

  map.set(target, true);
  let cloneResult =
    Object.prototype.toString.call(target) === "[object Array]" ? [] : {};
  for (let key in target) {
    cloneResult[key] = deepClone(target[key], map);
  }
  return cloneResult;
}
```
