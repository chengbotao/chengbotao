### 数字`(Number)`、布尔`(Boolean)`和 字符串`(String)`

> `Number`:对数字(**整数、浮点数、[十六进制、八进制、二进制]字面量**)的笼统的定义的类型

```ts
let decLiteral: number = 28;
let hexLiteral: number = 0x1c; // 十六进制 0x
let binaryLiteral: number = 0b11100; // 二进制 0b
let octalLiteral: number = 0o34; // 八进制 0o
```

> `Boolean`: **真&假**

```ts
let isDone: boolean = false;
let isMan: boolean = true;
```

> `String`: **文本数据类型**

```ts
/**
 * 使用双引号("")表示
 * 使用单引号('')表示
 * 使用模版字符串(``)表示，并且以 ${ expr } 这种形式嵌入表达式
 */
let name: string = `Chengbotao`;
let age: number = 28;
let sentence: string = `Hello, my name is ${name}.

I'm be ${age} years old.`;
```

### 数组`(Array)`和 元组`(Tuple)`

> `Array`

```ts
/**
 * 定义方式
 */
// [] 定义
let list: number[] = [1, 2, 3];
// 泛型定义
let list1: Array<number> = [4, 5, 6];

// 定义存储任意类型的数组
let list2: any[] = [4, 5, 6];
```

> `Tuple`: **固定长度,固定类型的数组**

```ts
let tuples: [string, number] = ["chengbotao", 28];
```

### 联合`(Union)`、字面量`(Literal)`

> `Union`: 一个变量可以是多个类型的,`|`分隔类型定义

```ts
// let unionValue: 类型1 | 类型2 | 类型3 ...
// union 可以赋值 string 或者 number 类型的值
let union: string | number;
let unionArray: (string | number)[] = ["chengbotao", 28];
```

> `Literal`: 明确取值的类型

```ts
let literal: "chengbotao" | 28;
// literal 只能赋值 "chengbotao" 或 28, 赋其他值都会报错
```

### `枚举(Enum)`

> `Enum`: **将数值语义化**

```ts
enum Color {
  Red = 1, // Red = 1, Red 默认对应 0, = 来自定义对应数值
  Green,
  Blue,
}
let colorName: string = Color[2]; // Green

let colorNumber: number = Color.Blue; // 3
```

### `any`和`unknown`

> `any`: **表示变量可以是任意类型**

```ts
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
notSure = {};
notSure = [];
notSure();
notSure.toUpperCase();
// ...
```

> `unknown`: **未知类型，不保证类型但保障类型安全**

```ts
// 需要做一定的类型判断才可以使用
let notSure: unknown = 4;
notSure = "Hello, my name is Chengbotao";
notSure = false;
notSure = {};
notSure = [];
if (typeof notSure === "function) {
    notSure()
}

if (typeof notSure === "string) {
    notSure.toUpperCase()
}

```

### `void、undefined&null、never`

> `void`: **没有任何类型,但一个函数没有返回值时，返回类型一般就是`void`**

```ts
function logUser(): void {
  console.log("打印信息");
}
```

> `undefined&null`

```ts
/**
 * 默认情况下null和undefined是所有类型的子类型
 * 指定了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
 */
let u: undefined = undefined;
let n: null = null;
```

> `never`: **永不存在的值的类型**

```ts
/**
 * 是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
 * 变量也可能是 never类型,当它们被永不为真的类型保护所约束时。
 * never类型是任何类型的子类型,也可以赋值给任何类型；
 * 没有类型是never的子类型或可以赋值给never类型(除了never本身之外)。
 * any也不可以赋值给never。
*/

// 返回never的函数必须存在无法达到的终点
function throwError(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
}
```

> **_根据上下文推断变量的类型_**

```ts
let name = "chengbotao"; // 根据上下文推断 name 类型为 string
let age = 28; // 根据上下文推断 age 类型为 number

name = true; // 在 ts 环境下,会报错,警告
```
