import{_ as n,o as s,c as a,e}from"./app.f8904dd1.js";const p={},t=e(`<h2 id="\u7A0B\u5E8F\u6D41\u7A0B\u56FE" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F\u6D41\u7A0B\u56FE" aria-hidden="true">#</a> \u7A0B\u5E8F\u6D41\u7A0B\u56FE</h2><blockquote><p>\u4EE5\u7B80\u5355\u7684\u56FE\u5F62\u7B26\u53F7\u6765\u8868\u793A\u95EE\u9898\u6C42\u89E3\u7684\u6B65\u9AA4<br> \u6D41\u7A0B\u56FE\u662F\u95EE\u9898\u6C42\u89E3\u7684\u6700\u57FA\u672C\u3001\u6700\u91CD\u8981\u7684\u5206\u6790\u6280\u672F</p></blockquote><p><strong>\u5E38\u7528\u6D41\u7A0B\u56FE\u56FE\u5F62\u7B26\u53F7</strong></p><div class="language-mermaid ext-mermaid line-numbers-mode"><pre class="language-mermaid"><code><span class="token keyword">graph</span> TD<span class="token punctuation">;</span>
    id<span class="token text string">(\u8D77\u6B62\u6846)</span><span class="token punctuation">;</span>
    id1<span class="token text string">[\u5904\u7406\u6846]</span><span class="token punctuation">;</span>
    id2<span class="token text string">{\u5224\u65AD\u6846}</span><span class="token punctuation">;</span>
    id5<span class="token text string">[/\u8F93\u5165\u8F93\u51FA\u6846/]</span><span class="token punctuation">;</span>
    id6<span class="token text string">((\u5173\u8054\u6846))</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9009\u62E9\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9\u8BED\u53E5" aria-hidden="true">#</a> \u9009\u62E9\u8BED\u53E5</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># if \u8BED\u53E5</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if \u6761\u4EF6:
    \u7F29\u8FDB\u8BED\u53E5\u5757

...
&quot;&quot;&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>

<span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u4EBA&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># if-else \u8BED\u53E5</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if \u6761\u4EF6:
    \u6761\u4EF6\u4E3A\u771F\u7F29\u8FDB\u8BED\u53E5\u5757
else:
    \u6761\u4EF6\u4E3A\u5047\u7F29\u8FDB\u8BED\u53E5\u5757
&quot;&quot;&quot;</span>
name <span class="token operator">=</span> <span class="token string">&quot;chengbotao&quot;</span>

<span class="token keyword">if</span> name <span class="token operator">==</span> <span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u4EBA&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u662F\u672C\u4EBA&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># if-elif-...-else \u591A\u5206\u652F\u8BED\u53E5</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
if \u6761\u4EF6:
    #todo
elif \u6761\u4EF61:
    #todo1
elif \u6761\u4EF62:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5FAA\u73AF\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u8BED\u53E5" aria-hidden="true">#</a> \u5FAA\u73AF\u8BED\u53E5</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># while \u8BED\u53E5</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
# \u8BBE\u5B9A\u5FAA\u73AF\u53EF\u6267\u884C\u7684\u521D\u59CB\u6761\u4EF6

while \u5FAA\u73AF\u7EE7\u7EED\u6761\u4EF6:
    \u7F29\u8FDB\u8BED\u53E5\u5757(#\u5FAA\u73AF\u4F53)
    # \u8BBE\u5B9A\u5FAA\u73AF\u6761\u4EF6\u6539\u53D8\u7684\u8BED\u53E5
...
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># for ... in \u8BED\u53E5</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
# \u4F9D\u6B21\u904D\u5386\u5BF9\u8C61Object\u4E2D\u6BCF\u4E2A\u5143\u7D20,\u5E76\u8D4B\u503C\u7ED9anElement,\u7136\u540E\u6267\u884C\u5FAA\u73AF\u4F53
for anElement in Object:
    \u7F29\u8FDB\u8BED\u53E5\u5757(#\u5FAA\u73AF\u4F53)
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u675F\u5FAA\u73AF\u7684\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u675F\u5FAA\u73AF\u7684\u8BED\u53E5" aria-hidden="true">#</a> \u7ED3\u675F\u5FAA\u73AF\u7684\u8BED\u53E5</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># break \u548C continue \u8BED\u53E5</span>
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
<span class="token comment"># break \u7ED3\u675F\u5F53\u524D\u5FAA\u73AF\u4F53</span>


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
<span class="token comment"># continue \u7ED3\u675F\u5F53\u6B21\u5FAA\u73AF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><code>while</code>\u5FAA\u73AF\u66F4\u901A\u7528,\u4EFB\u4F55<code>for</code>\u5FAA\u73AF\u90FD\u80FD\u7528<code>while</code>\u5B9E\u73B0<br><code>for</code>\u9002\u7528\u573A\u666F,\u5DF2\u77E5\u5FAA\u73AF\u8303\u56F4,\u5373\u8D77\u6B62\u503C\u548C\u6B65\u957F<br><code>while</code>\u9002\u7528\u573A\u666F,\u5176\u4ED6\u573A\u666F,\u4E0D\u786E\u5B9A\u5FAA\u73AF\u4F55\u65F6\u7EC8\u6B62</p></blockquote><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><blockquote><p>\u5B8C\u6210\u7279\u5B9A\u529F\u80FD\u7684\u4E00\u4E2A\u8BED\u53E5\u7EC4,\u8FD9\u7EC4\u8BED\u53E5\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u5355\u4F4D\u4F7F\u7528,\u5E76\u4E14\u7ED9\u5B83\u53D6\u4E00\u4E2A\u540D\u5B57<br> \u901A\u8FC7\u51FD\u6570\u540D\u6267\u884C</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u51FD\u6570</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
\u5B9A\u4E49\u51FD\u6570
def fun_name([params]): #\u5173\u952E\u5B57 \u51FD\u6570\u540D \u51FD\u6570\u53C2\u6570(\u5F62\u53C2)
    #\u51FD\u6570\u4F53
    return [result] #\u51FD\u6570\u8FD4\u56DE,\u9047\u5230return\u5C06\u7EC8\u6B62\u51FD\u6570\u7684\u8FD0\u884C

\u8C03\u7528\u51FD\u6570
fun_name([params]) #\u4F20\u5165\u5B9E\u53C2
&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u51FD\u6570-\u7F3A\u7701\u53C2\u6570</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> arg1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>arg2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> arg <span class="token operator">+</span> arg1 <span class="token operator">+</span> arg2

fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span>
fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5168\u5C40\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u53D8\u91CF" aria-hidden="true">#</a> \u5168\u5C40\u53D8\u91CF</h3><blockquote><p>\u4E3A\u6574\u4E2A\u7A0B\u5E8F\u6240\u6709\u4F7F\u7528\u7684\u53D8\u91CF<br> \u6240\u6709\u51FD\u6570\u90FD\u53EF\u4EE5\u4F7F\u7528</p></blockquote><h3 id="\u5C40\u90E8\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5C40\u90E8\u53D8\u91CF" aria-hidden="true">#</a> \u5C40\u90E8\u53D8\u91CF</h3><blockquote><p>\u53EA\u80FD\u5728\u7A0B\u5E8F\u7279\u5B9A\u90E8\u5206\u4F7F\u7528\u7684\u53D8\u91CF<br> \u51FD\u6570\u5185\u90E8</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u51FD\u6570-\u53D8\u91CF\u7684\u4F5C\u7528\u57DF</span>
globalVar <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span>arg<span class="token punctuation">,</span> arg1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>arg2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    localVar <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> globalVar<span class="token punctuation">)</span> <span class="token comment">#1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>localVar<span class="token punctuation">)</span> <span class="token comment">#2</span>
    <span class="token keyword">return</span> arg <span class="token operator">+</span> arg1 <span class="token operator">+</span> arg2

fun<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span> globalVar<span class="token punctuation">)</span> <span class="token comment">#1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;local&quot;</span><span class="token punctuation">,</span>localVar<span class="token punctuation">)</span> <span class="token comment">#\u5F02\u5E38</span>

<span class="token comment">#=========</span>
<span class="token comment"># \u5168\u5C40\u8DDF\u5C40\u90E8\u6709\u76F8\u540C\u53D8\u91CF\u65F6,\u51FD\u6570\u5185\u4F1A\u4F18\u5148\u64CD\u4F5C\u5C40\u90E8\u53D8\u91CF,\u4E0D\u5F71\u54CD\u5168\u90E8\u53D8\u91CF</span>
var <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    var <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span> <span class="token comment">#2</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span> <span class="token comment">#1</span>

<span class="token comment"># \u51FD\u6570\u5185\u9700\u8981\u4FEE\u6539\u5168\u5C40\u53D8\u91CF\u662F,\u9700\u8981\u4F7F\u7528\`global\`\u5173\u952E\u5B57\u8FDB\u884C\u58F0\u660E,\u518D\u64CD\u4F5C</span>
var <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">global</span> var
    var <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token comment">#2</span>

fun<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>var<span class="token punctuation">)</span><span class="token comment">#2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u51FD\u6570\u4F18\u70B9" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570\u4F18\u70B9" aria-hidden="true">#</a> \u51FD\u6570\u4F18\u70B9</h3><blockquote><p><strong>\u4EE3\u7801\u53EF\u91CD\u7528:</strong> \u63D0\u9AD8\u5F00\u53D1\u6548\u7387;\u51CF\u5C11\u91CD\u590D\u7F16\u7801<br><strong>\u4EE3\u7801\u66F4\u7B80\u6D01:</strong> \u51FD\u6570\u529F\u80FD\u76F8\u5BF9\u72EC\u7ACB,\u529F\u80FD\u5355\u4E00,\u7ED3\u6784\u6E05\u6670,\u53EF\u8BFB\u6027\u597D<br><strong>\u7F16\u7A0B\u66F4\u5BB9\u6613\u628A\u63E1:</strong> \u590D\u6742\u7A0B\u5E8F\u5206\u89E3\u6210\u5C0F\u5757<br><strong>\u5C01\u88C5\u4E0E\u4FE1\u606F\u9690\u85CF</strong></p></blockquote><h2 id="\u5E94\u7528\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u793A\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u793A\u4F8B</h2><p><strong>Q:\u4E00\u5143\u4E8C\u6B21\u65B9\u7A0B\u7684\u89E3</strong></p><p style=""><img src="https://math.now.sh?from=ax%5E2%2Bbx%2Bc%3D0%0A"></p><p style=""><img src="https://math.now.sh?from=%E8%A7%A3%E4%B8%BA%3A%20x%3D%5Cfrac%7B-b%5Cpm%5Csqrt%7Bb%5E2-4ac%7D%7D%7B2a%7D%0A"></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> math
a <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165a:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
b <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165b:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
c <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165c:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> a <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E0D\u662F\u4E00\u4E2A\u4E00\u5143\u4E8C\u6B21\u65B9\u7A0B&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    delta <span class="token operator">=</span> b <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">4</span> <span class="token operator">*</span> a <span class="token operator">*</span> c
    <span class="token keyword">if</span> delta <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u65E0\u89E3&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">elif</span> delta <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u6709\u4E14\u53EA\u6709\u4E00\u4E2A\u89E3&quot;</span><span class="token punctuation">,</span><span class="token operator">-</span>b <span class="token operator">/</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        root <span class="token operator">=</span> math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>delta<span class="token punctuation">)</span>
        s1 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span>b <span class="token operator">+</span> root<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span>
        s2 <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">-</span>b <span class="token operator">-</span> root<span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> a<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4E24\u4E2A\u4E0D\u540C\u7684\u89E3&quot;</span><span class="token punctuation">,</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u6253\u5370\u4E58\u6CD5\u8868</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> j <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> i<span class="token operator">&gt;=</span>j<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>j<span class="token punctuation">,</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span><span class="token string">&quot;=&quot;</span><span class="token punctuation">,</span>i<span class="token operator">*</span>j<span class="token punctuation">,</span>end<span class="token operator">=</span><span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u5224\u65AD\u4E00\u4E2A\u5927\u4E8E 1 \u7684\u81EA\u7136\u6570,\u662F\u5426\u662F\u8D28\u6570</strong></p><blockquote><p>\u5927\u4E8E 1 \u7684\u81EA\u7136\u6570,\u9664\u4E86 1 \u548C\u5B83\u672C\u8EAB\u5916,\u4E0D\u80FD\u88AB\u5176\u4ED6\u81EA\u7136\u6570\u6574\u9664</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> math
num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u5927\u4E8E1\u7684\u81EA\u7136\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span>sqrt<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> num<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u4E0D\u662F\u8D28\u6570&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
<span class="token keyword">else</span><span class="token punctuation">:</span> <span class="token comment">#\u8FD9\u91CC\u7684else\u4F5C\u7528,for\u5FAA\u73AF\u4E0D\u662F\u6B63\u5E38\u7ED3\u675F\u7684\u65F6\u5019\u4F1A\u8FD0\u884C</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u662F\u8D28\u6570&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u56DE\u6587\u6570</strong></p><blockquote><p>\u4E00\u4E2A\u6B63\u6570\u987A\u7740\u548C\u53CD\u7740\u90FD\u662F\u4E00\u6837\u7684, \u5982:<code>12521</code></p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6B63\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
num_t <span class="token operator">=</span> num
num_p <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> num_t <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
    num_p <span class="token operator">=</span> num_p <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> num_t <span class="token operator">%</span> <span class="token number">10</span>
    num_t <span class="token operator">//=</span> <span class="token number">10</span>

<span class="token keyword">if</span> num_p <span class="token operator">==</span> num<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u662F\u56DE\u6587\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u4E0D\u662F\u56DE\u6587\u6570&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u56DE\u6587\u7D20\u6570</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u662F\u5426\u662F\u56DE\u6587</span>
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

<span class="token comment"># \u662F\u5426\u662F\u7D20\u6570</span>
<span class="token keyword">def</span> <span class="token function">is_prime</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> num<span class="token operator">%</span>i<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>

num <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u4E00\u4E2A\u6B63\u6570:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> is_palindrome<span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token keyword">and</span> is_prime<span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u662F\u56DE\u6587\u7D20\u6570&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span><span class="token string">&quot;\u4E0D\u662F\u56DE\u6587\u7D20\u6570&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q:\u6839\u636E\u5E74\u4EFD\u548C\u6708\u4EFD\u5F97\u5230\u5F53\u524D\u6708\u4EFD\u7684\u7B2C\u4E00\u5929\u662F\u661F\u671F\u51E0</strong></p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># python \u662F\u4EE51800\u5E741\u67081\u65E5\u5F00\u59CB \u661F\u671F\u4E09</span>

<span class="token comment"># \u662F\u5426\u662F\u95F0\u5E74</span>
<span class="token keyword">def</span> <span class="token function">is_leap_year</span><span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> year <span class="token operator">%</span> <span class="token number">400</span><span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">or</span> year<span class="token operator">%</span><span class="token number">4</span><span class="token operator">==</span><span class="token number">0</span> <span class="token keyword">and</span> year<span class="token operator">%</span><span class="token number">100</span><span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>

<span class="token comment"># \u83B7\u53D6\u5F53\u524D\u6708\u4EFD\u591A\u5C11\u5929</span>
<span class="token keyword">def</span> <span class="token function">get_num_of_days_in_month</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> month <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">12</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">31</span>
    <span class="token keyword">elif</span> month <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">30</span>
    <span class="token keyword">elif</span> is_leap_year<span class="token punctuation">(</span>year<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">29</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token number">28</span>

<span class="token comment"># \u83B7\u53D61800\u5E74\u5230\u8F93\u5165\u5E74\u4EFD\u603B\u5171\u8FC7\u53BB\u591A\u5C11\u5929</span>
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

<span class="token comment"># \u83B7\u53D6\u6708\u4EFD\u7684\u7B2C\u4E00\u5929\u662F\u661F\u671F\u51E0</span>
<span class="token keyword">def</span> <span class="token function">get_start_day</span><span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">+</span> get_total_num_of_days<span class="token punctuation">(</span>year<span class="token punctuation">,</span> month<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">7</span>

year <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u5E74\u4EFD:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
month <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u6708\u4EFD:&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_start_day<span class="token punctuation">(</span>year<span class="token punctuation">,</span>month<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),o=[t];function l(c,i){return s(),a("div",null,o)}var r=n(p,[["render",l],["__file","learn1.html.vue"]]);export{r as default};
