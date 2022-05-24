## 列表(List)

> 内建数据结构,用来存储一系列元素  
> 使用`[item,item1,...]`生成,元素之间用逗号隔开

### 列表与字符串比较

> **相同点**:  
> 索引(`[index]`)  
> 切片(`[start:finish]`)  
> 拼接(`+`)和重复(`*`)  
> 成员(`in`)  
> 长度(`len()`)  
> 循环(`for item in list:`)  
> _不同点:_  
> `list`元素可以是多种类型的对象  
> `list`的内容是可变, 如:通过下标修改元素值

```python
list = ["chengbotao", 180.0, 28]
# 列表内容可变操作
list[0] = "botao"
list.append(80.0) #追加元素
list.extend([80.0]) #追加元素
list.insert(1, 80.0) #任意位置插入元素
list.pop() #删除元素
list.remove(28) #删除元素
list.sort() #排序
list.reverse() #逆序


# 交换list两个元素
def swap(lst, a, b):
    temp =lst[a]
    lst[a] = lst[b]
    lst[b] = temp

# list 查找方法
"""
返回该值第一次出现的下标
"""
list.index("chengbotao") #不存在的会报错

def search(lst, x):
    for i in range(len(lst)):
        if lst[i]==x:
            return i
    return -1

# 内置排序的函数
lst = [5,3,2,1,4]
lst = sorted(lst) # [1,2,3,4,5]
# 或
lst.sort() # [1,2,3,4,5]

```

| list              | "chengbotao" | 180.0 | 28  |
| ----------------- | ------------ | ----- | --- |
| `index`(正序下标) | 0            | 1     | 2   |
| `index`(倒序下标) | -3           | -2    | -1  |

### 匿名函数

> `f = lambda [arg1 [,arg2,...]]: expression`

```python
# 米有名字的函数,需要赋值给一个变量来调用
# lambda 是关键字
f = lambda x: x**2
# ||
def f(x):
    return x**2
```

### 时间复杂度

> 量化一个算法的运行时间为输入长度的函数
> 大 `O` 表示,只保留最高阶项,下面的例子:
>
> > $$4n+4=O(n)$$  
> > $$136n+329=O(n)$$
> > $$n^2+3n=O(n^2)$$
> > $$2^n+n^3=O(2^n)$$
> > 线性查找的时间复杂度: `O(n)`

> **大 O 能说明什么信息**
>
> 1. 算法 A 的复杂度 O(n),算法 B 的复杂度 O(n<sup>2</sup>),对于较大的输入,A 总是比 B 快
> 2. 算法 A 的复杂度 O(n),当输入规模翻倍时,运行时间也翻倍  
>    **大 O 不能说明**
> 3. 实际的运行时间
> 4. 对于小规模输入的行为
>    > $$n^3 = O(n^3)$$  
>    > $$10^8 = O(1)$$  
>    > 在`n=1`时

### 时间复杂度的增长率

> $$1 < logn < n < n logn < n^2 < n^3 $$

## 元组

> 不可变的列表  
> 除了可改变列表内容的方法外,其他列表方法均使用于元组

```python
#创建元组
# 用()来创建
tuples = ("chengbotao", 180.0, 28)
```

## 字典

> 一系列 "键:值(`key:value`)" 对  
> 通过**键**找对应的**值**
> 使用`{}`来创建

```python
# 键 必须是不可变的且不重复,值 可以是任意类型
author = {
    "name": "chengbotao",
    "hight": 180.0
}

# 访问字典
## 键 为索引
print(author["name"])

# 新增键
author["age"] = 28

# len() 函数 字典中键值对的个数
"""
key in author #判断 key 是否在字典中
"""
print("name" in author)

```

## 集合

> 无序不重复元素(键)集  
> 和字典类似但无**值**

```python
# 创建
x = set(args,args1,...)
x = {key1, key2,...}

# 添加和删除
x.add("args")
x.remove("args")
```

### 集合的运算符

| 运算符           | 含义   |
| ---------------- | ------ |
| `-`              | 差集   |
| `&`              | 交集   |
| `\|`             | 并集   |
| `!=`             | 不等于 |
| `==`             | 等于   |
| `in`             | 成员   |
| `for key in set` | 枚举   |

## 应用示例

**Q:二分法查找-时间复杂度: O(log<sub>2</sub>n)**

```python
"""
输入一个有序(由小到大)列表和一个值,如果该值存在列表中,返回相应的下标,否则返回-1
"""
def bi_search(lst, x):
    low = 0
    high = len(lst) - 1
    while low <= high:
        mid = (low+high)//2
        if lst[mid] < x:
            low = mid+1
        elif lst[mid] > x:
            high = mid-1
        else:
            return mid
    return -1
```

**Q:选择排序-时间复杂度: O(n<sup>2</sup>)**

```python
"""
找到最小元素
和第一个元素交换
剩余元素重复
"""
def swap(lst, a, b):
    temp =lst[a]
    lst[a] = lst[b]
    lst[b] = temp

def selection_sort(lst):
    for i in range(len(lst)-1):
        min_idx = i
        for j in range(i+1, len(lst)):
            if lst[j] < lst[min_idx]:
                min_idx = j
        swap(lst, min_idx, i)
```

**Q:冒泡排序-时间复杂度: O(n<sup>2</sup>)**

```python
"""
每次遍历不止交换一次
每次遍历将最大值排在最后
"""
def swap(lst, a, b):
    temp =lst[a]
    lst[a] = lst[b]
    lst[b] = temp

def bubble_sort(lst):
    for i in range(len(lst)):
        for j in range(0, len(lst)-i-1):
            if lst[j] > lst[j+1]:
                swap(lst, j, j+1)
```

**Q:单词字母计数**

```python
def letter_count(word):
    letter = {}
    for l in word:
        if l in latter:
            latter[l] += 1
        else:
            latter[l] = 1
    return latter
```
