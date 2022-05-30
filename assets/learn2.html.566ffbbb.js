import{_ as n,o as s,c as a,d as e}from"./app.dd393af5.js";const t={},p=e(`<h2 id="\u9012\u5F52\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a> \u9012\u5F52\u51FD\u6570</h2><blockquote><p>\u7A0B\u5E8F\u8C03\u7528\u81EA\u8EAB<br> \u5728\u51FD\u6570\u5B9A\u4E49\u6709\u76F4\u63A5\u6216\u95F4\u63A5\u8C03\u7528\u81EA\u8EAB</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u9012\u5F52</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
def recur():
    if #\u521D\u59CB\u6761\u4EF6:
        return [x]
    else:
        return recur() #\u9012\u5F52

#============================
if \u95EE\u9898\u6761\u4EF6\u7B80\u5355:
    \u76F4\u63A5\u89E3\u51B3\u95EE\u9898
    return \u89E3
else:
    \u5C06\u95EE\u9898\u5206\u89E3\u6210\u4E0E\u539F\u95EE\u9898\u540C\u6784\u7684\u4E00\u4E2A\u6216\u591A\u4E2A\u66F4\u5C0F\u7684\u95EE\u9898
    \u9010\u4E2A\u89E3\u51B3\u8FD9\u4E9B\u66F4\u5C0F\u95EE\u9898
    \u5C06\u7ED3\u679C\u7EC4\u5408\u6210\u6700\u7EC8\u7684\u89E3
    return \u89E3
#============================
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52\u7684\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u7684\u4F18\u70B9" aria-hidden="true">#</a> \u9012\u5F52\u7684\u4F18\u70B9</h3><blockquote><p>\u4F7F\u4E00\u4E2A\u8574\u542B\u9012\u5F52\u5173\u7CFB\u4E14\u590D\u6742\u7684\u7A0B\u5E8F\u7B80\u6D01\u7CBE\u70BC,\u589E\u52A0\u53EF\u8BFB\u6027<br> \u9002\u7528\u96BE\u4E8E\u627E\u5230\u4ECE\u8FB9\u754C\u5230\u89E3\u7684\u5168\u8FC7\u7A0B\u7684\u60C5\u51B5,\u5982\u679C\u628A\u95EE\u9898\u63A8\u8FDB\u4E00\u6B65,\u5176\u7ED3\u679C\u4ECD\u7EF4\u6301\u539F\u95EE\u9898\u7684\u5173\u7CFB</p></blockquote><h3 id="\u9012\u5F52\u7684\u52A3\u52BF" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u7684\u52A3\u52BF" aria-hidden="true">#</a> \u9012\u5F52\u7684\u52A3\u52BF</h3><blockquote><p>\u5D4C\u5957\u5C42\u6B21\u6DF1,\u51FD\u6570\u8C03\u7528\u5F00\u9500\u5927<br> \u91CD\u590D\u8BA1\u7B97</p></blockquote><h2 id="\u5B57\u7B26\u4E32-string" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32-string" aria-hidden="true">#</a> \u5B57\u7B26\u4E32(String)</h2><blockquote><p>\u4E00\u4E2A\u5B57\u7B26\u7684\u5E8F\u5217<br> \u5F62\u5F0F:\u4F7F\u7528\u6210\u5BF9\u7684\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u62EC\u8D77\u6765 \u4E5F\u662F\u53EF\u4EE5\u4F7F\u7528\u6210\u5BF9\u7684\u4E09\u4E2A\u5F15\u53F7,\u6765\u4FDD\u7559\u5B57\u7B26\u4E32\u4E2D\u5168\u90E8\u683C\u5F0F\u4FE1\u606F</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;chengbotao&#39;</span>

<span class="token triple-quoted-string string">&quot;&quot;&quot;
# \u62A5\u9519
str = &quot;cheng
bo
tao&quot;
&quot;&quot;&quot;</span>
<span class="token comment"># \u4E09\u5F15\u53F7\u4FDD\u7559\u5B57\u7B26\u4F20\u4E2D\u5168\u90E8\u7684\u683C\u5F0F\u4FE1\u606F</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
cheng
bo
tao
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u57FA\u672C\u7684\u5B57\u7B26\u4E32\u8FD0\u7B97" tabindex="-1"><a class="header-anchor" href="#\u57FA\u672C\u7684\u5B57\u7B26\u4E32\u8FD0\u7B97" aria-hidden="true">#</a> \u57FA\u672C\u7684\u5B57\u7B26\u4E32\u8FD0\u7B97</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u957F\u5EA6(len()\u51FD\u6570)</span>
<span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#10</span>

<span class="token comment"># \u62FC\u63A5\u64CD\u4F5C(+)</span>
str1 <span class="token operator">=</span> <span class="token builtin">str</span> <span class="token operator">+</span> <span class="token string">&quot;,I love You!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str1<span class="token punctuation">)</span> <span class="token comment">#chengbotao,I love You!</span>

<span class="token comment"># \u91CD\u590D\u64CD\u4F5C(*)</span>
str2 <span class="token operator">=</span> str1 <span class="token operator">*</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>str2<span class="token punctuation">)</span><span class="token comment">#chengbotao,I love You!chengbotao,I love You!chengbotao,I love You!</span>

<span class="token comment"># \u5224\u65AD\u4E00\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u662F\u53E6\u4E00\u4E2A\u5B57\u7B26\u4E32\u7684\u5B50\u4E32(in)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span> <span class="token keyword">in</span> str1<span class="token punctuation">)</span><span class="token comment">#True</span>

<span class="token comment"># for \u8BED\u53E5</span>
<span class="token keyword">for</span> char <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span>

<span class="token comment"># \u7D22\u5F15(index)</span>
<span class="token comment"># \u5B57\u7B26\u4E32\u4E00\u65E6\u751F\u6210,\u5219\u5185\u5BB9\u4E0D\u80FD\u6539\u53D8\uFF0C\u4E0D\u80FD\u901A\u8FC7\u4E0B\u6807(index)\u4FEE\u6539</span>
<span class="token comment"># \u5B57\u7B26\u4E32\u4E2D\u6BCF\u4E2A\u5B57\u7B26\u90FD\u6709\u7D22\u5F15\u503C(\u4E0B\u6807)</span>
<span class="token comment"># \u7D22\u5F15\u4ECE\u524D\u5411\u540E\u8BA1\u7B97 0 \u5F00\u59CB</span>
<span class="token comment"># \u7D22\u5F15\u4ECE\u540E\u5411\u524D\u8BA1\u7B97 -1 \u5F00\u59CB</span>
str3 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>

<span class="token comment"># \u5207\u7247(Slicing)</span>
<span class="token comment"># \u9009\u62E9\u5B57\u7B26\u4E32\u7684\u5B50\u5E8F\u5217</span>
<span class="token comment"># \u8BED\u6CD5[start:finish]</span>
    <span class="token comment"># start \u5B50\u5E8F\u5217\u5F00\u59CB\u4F4D\u7F6E\u7684\u7D22\u5F15\u503C</span>
    <span class="token comment"># finish \u5B50\u5E8F\u5217\u7ED3\u675F\u4F4D\u7F6E\u7684\u4E0B\u4E00\u4E2A\u5B57\u7B26\u7684\u7D22\u5F15\u503C</span>
<span class="token comment"># \u8BA1\u6570\u53C2\u6570[start:finish:countBy]</span>
    <span class="token comment"># countBy\u9ED8\u8BA4\u662F 1</span>
str4 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#ch</span>
str5 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">10</span>\uFF1A<span class="token number">2</span><span class="token punctuation">]</span> <span class="token comment">#cegoa</span>
<span class="token comment"># \u83B7\u53D6\u9006\u5E8F\u7684\u5B57\u7B26\u4E32</span>
str6 <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B57\u7B26\u4E32\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32\u6BD4\u8F83" aria-hidden="true">#</a> \u5B57\u7B26\u4E32\u6BD4\u8F83</h3><blockquote><p>\u5148\u6BD4\u8F83\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26,\u5982\u679C\u76F8\u540C\u5219\u6BD4\u8F83\u4E0B\u4E00\u4E2A\u5B57\u7B26,\u5982\u679C\u4E0D\u540C,\u5219\u5B57\u7B26\u4E32\u7684\u5927\u5C0F\u5173\u7CFB\u7531\u8FD9\u4E2A\u4E24\u4E2A\u5B57\u7B26\u7684\u5173\u7CFB\u51B3\u5B9A<br> \u5982\u679C\u5176\u4E2D\u4E00\u4E2A\u5B57\u7B26\u4E3A\u7A7A(\u8F83\u77ED),\u5219\u5176\u66F4\u5C0F</p></blockquote><h2 id="\u6587\u4EF6\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u64CD\u4F5C" aria-hidden="true">#</a> \u6587\u4EF6\u64CD\u4F5C</h2><blockquote><p>\u6253\u5F00\u6587\u4EF6</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>flies <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> mode<span class="token punctuation">)</span>
<span class="token comment"># mode: r(\u8BFB,\u9ED8\u8BA4) w(\u5199)...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u6309\u884C\u8BFB\u53D6\u6587\u4EF6\u5185\u5BB9</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> line <span class="token keyword">in</span> flies<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5173\u95ED\u6587\u4EF6</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    flies<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>\u5199\u6587\u4EF6</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    flies<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span>  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E94\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u793A\u4F8B</h2><p><strong>Q:\u9636\u4E58</strong></p><p style=""><img src="https://math.now.sh?from=N!%3D1%5Ctimes2%5Ctimes3%5Ctimes%5Ccdots%5Ctimes%20N%0A"></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fact</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> n <span class="token operator">*</span> fact<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6B63\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fact<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u6590\u6CE2\u90A3\u5951\u6570\u5217</strong></p><blockquote><p>\u6570\u5217: <code>1,1,2,3,5,8,13,21,34,55,89...</code></p></blockquote><p style=""><img src="https://math.now.sh?from=f%28n%29%3D%20%5Cbegin%7Bcases%7D%201%20%26%20%5Ctext%20%7Bif%20%24n%24%20%3D%201%7D%20%5C%5C%201%20%26%20%5Ctext%7Bif%20%24n%24%20%3D%202%7D%20%5C%5C%20f(n-1)%2Bf(n-2)%20%26%20%5Ctext%7Bif%20%24n%24%20%3E%202%7D%20%5Cend%7Bcases%7D%20%0A"></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> n <span class="token operator">==</span><span class="token number">1</span> <span class="token keyword">or</span> n <span class="token operator">==</span><span class="token number">2</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> fib<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">+</span>fib<span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6B63\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>fib<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u82F1\u6587\u5B57\u7B26\u4E32\u4E2D\u6709\u51E0\u4E2A\u5143\u97F3</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">vowels_count</span><span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    count<span class="token operator">=</span><span class="token number">0</span>
    <span class="token keyword">for</span> char <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> char <span class="token keyword">in</span> <span class="token string">&quot;aeiouAEIOU&quot;</span><span class="token punctuation">:</span>
            count<span class="token operator">+=</span><span class="token number">1</span>
    <span class="token keyword">return</span> count

<span class="token keyword">print</span><span class="token punctuation">(</span>vowels_count<span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">#4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33),o=[p];function i(l,c){return s(),a("div",null,o)}var r=n(t,[["render",i],["__file","learn2.html.vue"]]);export{r as default};
