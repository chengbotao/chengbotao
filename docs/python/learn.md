## 对象类型

| 类型           | 简写   | 举例                             |
| -------------- | ------ | -------------------------------- |
| 字符串`string` | `str`  | `'chengbotao'` \| `"chengbotao"` |
| 整数`integer`  | `int`  | `28`                             |
| 浮点数`float`  | -      | `180.0`                          |
| 布尔`boolean`  | `bool` | `True`\|`False`                  |
| 复数`complex`  | -      | `1+1j`                           |

```python
# 获取对象的类型 type(object)
type('chengbotao') # <type 'str'>
type(28) # <type 'int'>
type(180.0) # <type 'float'>
type(True) # <type 'bool'>
type(1+1j) # <type 'complex'>
```

## 模块

> 实现一定功能的 `Python` 脚本集合

```python
# 引入模块 `import module_name`
import math
# 查看模块内容 `dir(module_name)`
dir(math)
"""
['__doc__', '__name__', '__package__', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atan2', 'atanh', 'ceil', 'copysign', 'cos', 'cosh', 'degrees', 'e', 'erf', 'erfc', 'exp', 'expm1', 'fabs', 'factorial', 'floor', 'fmod', 'frexp', 'fsum', 'gamma', 'hypot', 'isinf', 'isnan', 'ldexp', 'lgamma', 'log', 'log10', 'log1p', 'modf', 'pi', 'pow', 'radians', 'sin', 'sinh', 'sqrt', 'tan', 'tanh', 'trunc']
"""
# 查看帮助 `help(module_name.xx)`
help(math.sin)
"""
sin(...)
    sin(x)

    Return the sine of x (measured in radians).

None
"""
```

## 变量

> 用于引用(绑定)对象的标识符  
> 语法: 变量名 = 对象(数值、表达式等)

## 标识符

> 变量、函数、模块等的名字  
> 命名规则：  
> 可以任意长  
> 包含数字、字母和下划线
> 但首个必须是字母或下划线
> 大小写敏感
> 不能是关键字

## 算术运算符

| 运算符 | 含义             | 举例                 |
| ------ | ---------------- | -------------------- |
| `+`    | 加法             | `1+1=2`              |
| `-`    | 减法             | `2-1=1`              |
| `*`    | 乘法             | `1*2=2`              |
| `/`    | 除法             | `10/2=5`             |
| `%`    | 求余             | `10%3=1`             |
| `**`   | 指数             | `2**3=8`             |
| `//`   | 取整除(向下取整) | `9//2=4 \| -9//2=-5` |

## 关系运算符

> 判断两个值的关系,大小、相等或不相等  
> 运算结果只有两种(布尔型),`True`表示条件成立,`False`表示条件不成立.

| 运算符 | 含义     | 举例            |
| ------ | -------- | --------------- |
| `==`   | 等于     | `1==2 is False` |
| `!=`   | 不等于   | `1!=2 is True`  |
| `>`    | 大于     | `1>2 is False`  |
| `<`    | 小于     | `1<2 is True`   |
| `>=`   | 大于等于 | `1>=2 is False` |
| `<=`   | 小于等于 | `1<=2 is True`  |

## 逻辑运算符

| 运算符 | 含义               | 举例                      |
| ------ | ------------------ | ------------------------- |
| `and`  | 与(全真为真)       | `True and False == False` |
| `or`   | 或(全假为假)       | `True or False == True`   |
| `not`  | 非(真变假、假变真) | `not True == False`       |

## `print`-转义符

| 转义符 | 含义        |
| ------ | ----------- |
| `\n`   | 回车        |
| `\t`   | 制表符(Tab) |
| `\\`   | 反斜杠      |
| `\a`   | 响铃        |
| `\'`   | 单引号      |
| `\"`   | 双引号      |

## 运算符优先级

> 括号 `()`  
> 幂次 `**`  
> 一元运算 `~,+, -`  
> 算术运算 `*,/,%,//`  
> 算术运算 `+,-`  
> 位运算符 `>>,<<,&,^,|`  
> 比较运算 `==,!=,<,>,<=,>=`  
> 赋值运算 `=,*=,/=,+=,-=,%=,//=`  
> 逻辑非 `not`  
> 逻辑与 `and`  
> 逻辑或 `or`

```python
2*1+3 #先乘后加
2*(1+3) #先加后乘
"""
括号(),改变语言内默认的优先级,具有最高优先级
嵌套括号,由内向外运算
"""
(2*(1+2))**2
```

## 应用示例

**Q:将华氏度(F)转化为摄氏度(C)?**
$$ C=\frac{5}{9}(F-32) $$

```python
"""
py2, '/' 表示向下取整除;
两个整数相除,结果也是整数,舍去小数部分
5 / 9 = 0

如果有一个数为浮点数,则结果为浮点数
5.0 / 9 = 0.555555555556

自动类型转换
若参与运算的两个对象的类型相同,则结果类型不变

若参与运算的两个对象类型不同,则按照以下规则进行自动类型转换
`bool-->int-->float-->complex`
"""
fahrenheit = float(input('请输入华氏度:'))
celsius = 5.0/9*(fahrenheit-32)

print(fahrenheit,'华氏度转成摄氏度为',celsius)
```

**Q:若今天是星期六,则十天后星期几?**

```python
day = int(input('请输入周几(1-7):'))
days = int(input('请输入计算多少天后是周几:'))
weekDays = ["一","二","三","四","五","六","日"]
weekDay = (day + days) % 7

print("输入周",weekDays[day-1],",",days,"天后是周",weekDays[weekDay-1])
```

**Q:判断一个数`number`是否为偶数?**
$$ number\%2=0 $$

```python
number = int(input("请输入一个正整数(判断该数是否为偶数):"))
if number % 2 == 0:
    print(number,"是偶数")
else:
    print(number,"不是偶数")

```

**Q:判断闰年**

> 年份`year`能被`4`整除但是不能被`100`整除,或者能被`400`整除,则是闰年

```python
year = int(input("请输入年份:"))
if year % 400==0 or year%4==0 and year%100!=0:
    print(year,"是闰年")
else:
    print(year,"不是闰年")
```

Q:身体质量指数(Body Mass Index,BMI),

> 根据人的体重和身高计算得出的一个数字

$$BMI=\frac{w}{h^2}$$

```python
weight = float(input("请输入体重(千克):"))
height = float(input("请输入身高(米):"))
BMI = weight/height**2

print("BMI:",BMI)
```