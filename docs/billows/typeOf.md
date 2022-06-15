<!--
 * @Author: Chengbotao
 * @Date: 2022-06-15 14:26:45
-->

## typeOf

> **说明:** _返回一个**对象或原始值**表达式的类型_  
> **返回:** _`{ string }`_ 类型

| 参数名    | 参数类型 | 参数说明               |
| --------- | -------- | ---------------------- |
| `operand` | `any`    | 一个对象或原始值表达式 |

### 使用

```ts
// npm install billows
// import { typeOf } from 'billows';

typeOf("chengbotao"); // "string"
typeOf(28); // "number"
typeOf(+"1"); // "number"
typeOf(1 + "1"); // "string"
typeOf(new Date()); // "date"
```

### 实现

```ts
export function typeOf(operand: any): string {
  const toString = Object.prototype.toString;
  let type = toString.call(operand).split(" ")[1];
  type = type.substring(0, type.length - 1).toLowerCase();
  return type;
}
```

_JavaScript `typeof` 操作符可能返回值_

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

> 操作符 `typeof` 看着只能将**_原始值_(除 Null)**的类型返回,其他的数据类型都是`object`

## 解析

> 借助`Object.prototype.toString.call(target)`来检测类型  
> 返回`[object type]`,其中 `type` 是对象的类型  
> `type` 类型包含了更多的内置对象(`Date`,`Math`,`Promise`等),细化了`object`

```ts
// toString.call(Math); => [object Math]
const toString = Object.prototype.toString;

// split 字符串分割成数组
// toString.call(Math).split(" ")[1]; => ["[object", "Math]"] => "Math]"
let type = toString.call(operand).split(" ")[1];

// substring 字符串截取
// "Math]".substring(1, "Math]".length-1); => "Math"
// toLowerCase 字符串转为小写形式
// "Math".toLowerCase(); => "math"
type = type.substring(0, type.length - 1).toLowerCase();
```
