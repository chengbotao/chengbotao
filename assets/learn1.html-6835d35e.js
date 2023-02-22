import{_ as n,p as s,q as a,a1 as e}from"./framework-5866ffd3.js";const p={},t=e(`<h2 id="程序流程图" tabindex="-1"><a class="header-anchor" href="#程序流程图" aria-hidden="true">#</a> 程序流程图</h2><blockquote><p>以简单的图形符号来表示问题求解的步骤<br> 流程图是问题求解的最基本、最重要的分析技术</p></blockquote><p><strong>常用流程图图形符号</strong></p><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD<span class="token punctuation">;</span>
    id<span class="token text string">(起止框)</span><span class="token punctuation">;</span>
    id1<span class="token text string">[处理框]</span><span class="token punctuation">;</span>
    id2<span class="token text string">{判断框}</span><span class="token punctuation">;</span>
    id5<span class="token text string">[/输入输出框/]</span><span class="token punctuation">;</span>
    id6<span class="token text string">((关联框))</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="选择语句" tabindex="-1"><a class="header-anchor" href="#选择语句" aria-hidden="true">#</a> 选择语句</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if 语句</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if 条件:
    缩进语句块

...
&quot;&quot;&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>

<span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;本人&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if-else 语句</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if 条件:
    条件为真缩进语句块
else:
    条件为假缩进语句块
&quot;&quot;&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>

<span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;本人&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不是本人&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># if-elif-...-else 多分支语句</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if 条件:
    #todo
elif 条件1:
    #todo1
elif 条件2:
    #todo2
...
else:
    #todo3
&quot;&quot;&quot;</span>
score <span class="token operator">=</span> <span class="token number">90</span>

<span class="token keyword">if</span> score <span class="token operator">&gt;=</span><span class="token number">90</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> score <span class="token operator">&gt;=</span><span class="token number">80</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> score <span class="token operator">&gt;=</span><span class="token number">70</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> score <span class="token operator">&gt;=</span><span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;D&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;E&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环语句" tabindex="-1"><a class="header-anchor" href="#循环语句" aria-hidden="true">#</a> 循环语句</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># while 语句</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
# 设定循环可执行的初始条件

while 循环继续条件:
    缩进语句块(#循环体)
    # 设定循环条件改变的语句
...
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># for ... in 语句</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
# 依次遍历对象Object中每个元素,并赋值给anElement,然后执行循环体
for anElement in Object:
    缩进语句块(#循环体)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="结束循环的语句" tabindex="-1"><a class="header-anchor" href="#结束循环的语句" aria-hidden="true">#</a> 结束循环的语句</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># break 和 continue 语句</span>
count <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> count <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;count:&quot;</span><span class="token punctuation">,</span>count<span class="token punctuation">)</span>
    count <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> i <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;i:&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">)</span>
<span class="token comment"># break 结束当前循环体</span>


count1 <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> count1 <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    count1 <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">if</span> count1 <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;count1:&quot;</span><span class="token punctuation">,</span>count1<span class="token punctuation">)</span>

<span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> j <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">continue</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;j:&quot;</span><span class="token punctuation">,</span>j<span class="token punctuation">)</span>
<span class="token comment"># continue 结束当次循环</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>while</code>循环更通用,任何<code>for</code>循环都能用<code>while</code>实现<br><code>for</code>适用场景,已知循环范围,即起止值和步长<br><code>while</code>适用场景,其他场景,不确定循环何时终止</p></blockquote><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h2><blockquote><p>完成特定功能的一个语句组,这组语句可以作为一个单位使用,并且给它取一个名字<br> 通过函数名执行</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
定义函数
def fun_name([params]): #关键字 函数名 函数参数(形参)
    #函数体
    return [result] #函数返回,遇到return将终止函数的运行

调用函数
fun_name([params]) #传入实参
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数-缺省参数</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> arg1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>arg2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> arg <span class="token operator">+</span> arg1 <span class="token operator">+</span> arg2

fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="全局变量" tabindex="-1"><a class="header-anchor" href="#全局变量" aria-hidden="true">#</a> 全局变量</h3><blockquote><p>为整个程序所有使用的变量<br> 所有函数都可以使用</p></blockquote><h3 id="局部变量" tabindex="-1"><a class="header-anchor" href="#局部变量" aria-hidden="true">#</a> 局部变量</h3><blockquote><p>只能在程序特定部分使用的变量<br> 函数内部</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 函数-变量的作用域</span>
globalVar <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> arg1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>arg2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    localVar <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> globalVar<span class="token punctuation">)</span> <span class="token comment">#1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>localVar<span class="token punctuation">)</span> <span class="token comment">#2</span>
    <span class="token keyword">return</span> arg <span class="token operator">+</span> arg1 <span class="token operator">+</span> arg2

fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> globalVar<span class="token punctuation">)</span> <span class="token comment">#1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>localVar<span class="token punctuation">)</span> <span class="token comment">#异常</span>

<span class="token comment">#=========</span>
<span class="token comment"># 全局跟局部有相同变量时,函数内会优先操作局部变量,不影响全部变量</span>
var <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    var <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span> <span class="token comment">#2</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span> <span class="token comment">#1</span>

<span class="token comment"># 函数内需要修改全局变量是,需要使用\`global\`关键字进行声明,再操作</span>
var <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> var
    var <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token comment">#2</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token comment">#2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数优点" tabindex="-1"><a class="header-anchor" href="#函数优点" aria-hidden="true">#</a> 函数优点</h3><blockquote><p><strong>代码可重用:</strong> 提高开发效率;减少重复编码<br><strong>代码更简洁:</strong> 函数功能相对独立,功能单一,结构清晰,可读性好<br><strong>编程更容易把握:</strong> 复杂程序分解成小块<br><strong>封装与信息隐藏</strong></p></blockquote><h2 id="应用示例" tabindex="-1"><a class="header-anchor" href="#应用示例" aria-hidden="true">#</a> 应用示例</h2><p><strong>Q:一元二次方程的解</strong></p><p style=""><img src="https://math.now.sh?from=ax%5E2%2Bbx%2Bc%3D0%0A"></p><p style=""><img src="https://math.now.sh?from=%E8%A7%A3%E4%B8%BA%3A%20x%3D%5Cfrac%7B-b%5Cpm%5Csqrt%7Bb%5E2-4ac%7D%7D%7B2a%7D%0A"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math
a <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入a:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入b:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入c:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;不是一个一元二次方程&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    delta <span class="token operator">=</span> b <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">4</span> <span class="token operator">*</span> a <span class="token operator">*</span> c
    <span class="token keyword">if</span> delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;无解&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> delta <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;有且只有一个解&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span>b <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        root <span class="token operator">=</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>delta<span class="token punctuation">)</span>
        s1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span>b <span class="token operator">+</span> root<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span>
        s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span>b <span class="token operator">-</span> root<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;两个不同的解&quot;</span><span class="token punctuation">,</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:打印乘法表</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i<span class="token operator">&gt;=</span>j<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span>i<span class="token operator">*</span>j<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:判断一个大于 1 的自然数,是否是质数</strong></p><blockquote><p>大于 1 的自然数,除了 1 和它本身外,不能被其他自然数整除</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> math
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入大于1的自然数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;不是质数&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
<span class="token keyword">else</span><span class="token punctuation">:</span> <span class="token comment">#这里的else作用,for循环不是正常结束的时候会运行</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;是质数&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:回文数</strong></p><blockquote><p>一个正数顺着和反着都是一样的, 如:<code>12521</code></p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
num_t <span class="token operator">=</span> num
num_p <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> num_t <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    num_p <span class="token operator">=</span> num_p <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num_t <span class="token operator">%</span> <span class="token number">10</span>
    num_t <span class="token operator">//=</span> <span class="token number">10</span>

<span class="token keyword">if</span> num_p <span class="token operator">==</span> num<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;是回文数&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;不是回文数&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:回文素数</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 是否是回文</span>
<span class="token keyword">def</span> <span class="token function">is_palindrome</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    num_t <span class="token operator">=</span> num
    num_p <span class="token operator">=</span> <span class="token number">0</span>

    <span class="token keyword">while</span> num_t <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        num_p <span class="token operator">=</span> num_p <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num_t <span class="token operator">%</span> <span class="token number">10</span>
        num_t <span class="token operator">//=</span> <span class="token number">10</span>

    <span class="token keyword">if</span> num_p <span class="token operator">==</span> num<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token comment"># 是否是素数</span>
<span class="token keyword">def</span> <span class="token function">is_prime</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> num<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> is_palindrome<span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token keyword">and</span> is_prime<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;是回文素数&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;不是回文素数&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:根据年份和月份得到当前月份的第一天是星期几</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># python 是以1800年1月1日开始 星期三</span>

<span class="token comment"># 是否是闰年</span>
<span class="token keyword">def</span> <span class="token function">is_leap_year</span><span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> year <span class="token operator">%</span> <span class="token number">400</span><span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">or</span> year<span class="token operator">%</span><span class="token number">4</span><span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">and</span> year<span class="token operator">%</span><span class="token number">100</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token comment"># 获取当前月份多少天</span>
<span class="token keyword">def</span> <span class="token function">get_num_of_days_in_month</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> month <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">31</span>
    <span class="token keyword">elif</span> month <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">30</span>
    <span class="token keyword">elif</span> is_leap_year<span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">29</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">28</span>

<span class="token comment"># 获取1800年到输入年份总共过去多少天</span>
<span class="token keyword">def</span> <span class="token function">get_total_num_of_days</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">:</span>
    days <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> y <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1800</span><span class="token punctuation">,</span> year<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> is_leap_year<span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">:</span>
            days<span class="token operator">+=</span><span class="token number">366</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            days<span class="token operator">+=</span><span class="token number">365</span>

    <span class="token keyword">for</span> m <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> month<span class="token punctuation">)</span><span class="token punctuation">:</span>
        days <span class="token operator">+=</span> get_num_of_days_in_month<span class="token punctuation">(</span>year<span class="token punctuation">,</span>m<span class="token punctuation">)</span>

    <span class="token keyword">return</span> days

<span class="token comment"># 获取月份的第一天是星期几</span>
<span class="token keyword">def</span> <span class="token function">get_start_day</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> get_total_num_of_days<span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">7</span>

year <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入年份:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
month <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入月份:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_start_day<span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(p,[["render",l],["__file","learn1.html.vue"]]);export{r as default};
