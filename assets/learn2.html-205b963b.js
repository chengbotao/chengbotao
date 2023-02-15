import{_ as n,p as s,q as a,a1 as e}from"./framework-204010b2.js";const t={},p=e(`<h2 id="递归函数" tabindex="-1"><a class="header-anchor" href="#递归函数" aria-hidden="true">#</a> 递归函数</h2><blockquote><p>程序调用自身<br> 在函数定义有直接或间接调用自身</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 递归</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
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
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="递归的优点" tabindex="-1"><a class="header-anchor" href="#递归的优点" aria-hidden="true">#</a> 递归的优点</h3><blockquote><p>使一个蕴含递归关系且复杂的程序简洁精炼,增加可读性<br> 适用难于找到从边界到解的全过程的情况,如果把问题推进一步,其结果仍维持原问题的关系</p></blockquote><h3 id="递归的劣势" tabindex="-1"><a class="header-anchor" href="#递归的劣势" aria-hidden="true">#</a> 递归的劣势</h3><blockquote><p>嵌套层次深,函数调用开销大<br> 重复计算</p></blockquote><h2 id="字符串-string" tabindex="-1"><a class="header-anchor" href="#字符串-string" aria-hidden="true">#</a> 字符串(String)</h2><blockquote><p>一个字符的序列<br> 形式:使用成对的单引号或双引号括起来 也是可以使用成对的三个引号,来保留字符串中全部格式信息</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;chengbotao&#39;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
# 报错
str = &quot;cheng
bo
tao&quot;
&quot;&quot;&quot;</span>
<span class="token comment"># 三引号保留字符传中全部的格式信息</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
cheng
bo
tao
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本的字符串运算" tabindex="-1"><a class="header-anchor" href="#基本的字符串运算" aria-hidden="true">#</a> 基本的字符串运算</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 长度(len()函数)</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#10</span>

<span class="token comment"># 拼接操作(+)</span>
str1 <span class="token operator">=</span> <span class="token builtin">str</span> <span class="token operator">+</span> <span class="token string">&quot;,I love You!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span> <span class="token comment">#chengbotao,I love You!</span>

<span class="token comment"># 重复操作(*)</span>
str2 <span class="token operator">=</span> str1 <span class="token operator">*</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token comment">#chengbotao,I love You!chengbotao,I love You!chengbotao,I love You!</span>

<span class="token comment"># 判断一个字符串是否是另一个字符串的子串(in)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span> <span class="token keyword">in</span> str1<span class="token punctuation">)</span><span class="token comment">#True</span>

<span class="token comment"># for 语句</span>
<span class="token keyword">for</span> char <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>

<span class="token comment"># 索引(index)</span>
<span class="token comment"># 字符串一旦生成,则内容不能改变，不能通过下标(index)修改</span>
<span class="token comment"># 字符串中每个字符都有索引值(下标)</span>
<span class="token comment"># 索引从前向后计算 0 开始</span>
<span class="token comment"># 索引从后向前计算 -1 开始</span>
str3 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token comment"># 切片(Slicing)</span>
<span class="token comment"># 选择字符串的子序列</span>
<span class="token comment"># 语法[start:finish]</span>
    <span class="token comment"># start 子序列开始位置的索引值</span>
    <span class="token comment"># finish 子序列结束位置的下一个字符的索引值</span>
<span class="token comment"># 计数参数[start:finish:countBy]</span>
    <span class="token comment"># countBy默认是 1</span>
str4 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#ch</span>
str5 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span>：<span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#cegoa</span>
<span class="token comment"># 获取逆序的字符串</span>
str6 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字符串比较" tabindex="-1"><a class="header-anchor" href="#字符串比较" aria-hidden="true">#</a> 字符串比较</h3><blockquote><p>先比较两个字符串的第一个字符,如果相同则比较下一个字符,如果不同,则字符串的大小关系由这个两个字符的关系决定<br> 如果其中一个字符为空(较短),则其更小</p></blockquote><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><blockquote><p>打开文件</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flies <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>
<span class="token comment"># mode: r(读,默认) w(写)...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>按行读取文件内容</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> line <span class="token keyword">in</span> flies<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>关闭文件</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    flies<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>写文件</p></blockquote><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>    flies<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="应用示例" tabindex="-1"><a class="header-anchor" href="#应用示例" aria-hidden="true">#</a> 应用示例</h2><p><strong>Q:阶乘</strong></p><p style=""><img src="https://math.now.sh?from=N!%3D1%5Ctimes2%5Ctimes3%5Ctimes%5Ccdots%5Ctimes%20N%0A"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fact</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> fact<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fact<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:斐波那契数列</strong></p><blockquote><p>数列: <code>1,1,2,3,5,8,13,21,34,55,89...</code></p></blockquote><p style=""><img src="https://math.now.sh?from=f%28n%29%3D%20%5Cbegin%7Bcases%7D%201%20%26%20%5Ctext%20%7Bif%20%24n%24%20%3D%201%7D%20%5C%5C%201%20%26%20%5Ctext%7Bif%20%24n%24%20%3D%202%7D%20%5C%5C%20f(n-1)%2Bf(n-2)%20%26%20%5Ctext%7Bif%20%24n%24%20%3E%202%7D%20%5Cend%7Bcases%7D%20%0A"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span><span class="token number">1</span> <span class="token keyword">or</span> n <span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> fib<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span>fib<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入一个正数:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fib<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:英文字符串中有几个元音</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vowels_count</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    count<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> char <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> char <span class="token keyword">in</span> <span class="token string">&quot;aeiouAEIOU&quot;</span><span class="token punctuation">:</span>
            count<span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">return</span> count

<span class="token keyword">print</span><span class="token punctuation">(</span>vowels_count<span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[p];function i(l,c){return s(),a("div",null,o)}const r=n(t,[["render",i],["__file","learn2.html.vue"]]);export{r as default};
