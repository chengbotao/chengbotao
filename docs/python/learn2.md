## 递归函数

> 程序调用自身  
> 在函数定义有直接或间接调用自身

```python
# 递归
"""
def recur():
    if #初始条件:
        return [x]
    else:
        return recur() #递归

#============================
if 问题条件简单:
    直接解决问题
    return 解
else:
    将问题分解成与原问题同构的一个或多个更小的问题
    逐个解决这些更小问题
    将结果组合成最终的解
    return 解
#============================
"""
```

### 递归的优点

> 使一个蕴含递归关系且复杂的程序简洁精炼,增加可读性  
> 适用难于找到从边界到解的全过程的情况,如果把问题推进一步,其结果仍维持原问题的关系

### 递归的劣势

> 嵌套层次深,函数调用开销大  
> 重复计算

## 字符串(String)

> 一个字符的序列  
> 形式:使用成对的单引号或双引号括起来
> 也是可以使用成对的三个引号,来保留字符串中全部格式信息

```python
str = "chengbotao"
str = 'chengbotao'

"""
# 报错
str = "cheng
bo
tao"
"""
# 三引号保留字符传中全部的格式信息
str = """
cheng
bo
tao
"""
```

### 基本的字符串运算

```python
# 长度(len()函数)
str = "chengbotao"
print(len(str)) #10

# 拼接操作(+)
str1 = str + ",I love You!"
print(str1) #chengbotao,I love You!

# 重复操作(*)
str2 = str1 * 3
print(str2)#chengbotao,I love You!chengbotao,I love You!chengbotao,I love You!

# 判断一个字符串是否是另一个字符串的子串(in)
print("chengbotao" in str1)#True

# for 语句
for char in str:
    print(char)

# 索引(index)
# 字符串一旦生成,则内容不能改变，不能通过下标(index)修改
# 字符串中每个字符都有索引值(下标)
# 索引从前向后计算 0 开始
# 索引从后向前计算 -1 开始
str3 = str[0]

# 切片(Slicing)
# 选择字符串的子序列
# 语法[start:finish]
    # start 子序列开始位置的索引值
    # finish 子序列结束位置的下一个字符的索引值
# 计数参数[start:finish:countBy]
    # countBy默认是 1
str4 = str[0:2] #ch
str5 = str[0:10：2] #cegoa
# 获取逆序的字符串
str6 = str[::-1]
```
### 字符串比较
> 先比较两个字符串的第一个字符,如果相同则比较下一个字符,如果不同,则字符串的大小关系由这个两个字符的关系决定  
> 如果其中一个字符为空(较短),则其更小

## 文件操作
> 打开文件
```python
flies = open(filename, mode)
# mode: r(读,默认) w(写)...
```
> 按行读取文件内容
```python
for line in flies:
    print(line)
```
> 关闭文件
```python
    flies.close()
```
> 写文件
```python
    flies.write(str)  
```

## 应用示例

**Q:阶乘**
$$N!=1\times2\times3\times\cdots\times N$$

```python
def fact(n):
    if n <= 1:
        return 1
    else:
        return n * fact(n-1)

num = int(input("请输入一个正数:"))
print(fact(num))
```

**Q:斐波那契数列**

> 数列: `1,1,2,3,5,8,13,21,34,55,89...`

$$ f(n)= \begin{cases} 1 & \text {if $n$ = 1} \\ 1 & \text{if $n$ = 2} \\ f(n-1)+f(n-2) & \text{if $n$ > 2} \end{cases} $$

```python
def fib(n):
    if n ==1 or n ==2:
        return 1
    else:
        return fib(n-1)+fib(n-2)

num = int(input("请输入一个正数:"))
print(fib(num))
```

**Q:英文字符串中有几个元音**

```python
def vowels_count(str):
    count=0
    for char in str:
        if char in "aeiouAEIOU":
            count+=1
    return count

print(vowels_count("chengbotao")) #4
```
