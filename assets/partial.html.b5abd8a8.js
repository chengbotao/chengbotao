import{_ as n,o as s,c as a,d as t}from"./app.8604ea84.js";const p={},o=t(`<h2 id="\u504F\u51FD\u6570-pratial" tabindex="-1"><a class="header-anchor" href="#\u504F\u51FD\u6570-pratial" aria-hidden="true">#</a> (\u504F\u51FD\u6570)Pratial</h2><blockquote><p>\u5C06\u4E00\u4E2A\u591A\u53C2\u51FD\u6570\u7684\u67D0\u4E9B\u53C2\u6570\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u503C,\u5E76\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570,\u7528\u65B0\u7684\u51FD\u6570\u7EE7\u7EED\u63A5\u53D7\u5269\u4F59\u53C2\u6570</p></blockquote><ol><li><strong>\u4E0B\u9762\u7C7B\u578B\u5224\u65AD\u51FD\u6570\u91CD\u590D\u4F7F\u7528\u4E86 <code>Object.prototype.toString.call(val)</code>\u770B\u8D77\u6765\u6BD4\u8F83\u7E41\u7410</strong></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isString</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> String <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object String]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">isArray</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> <span class="token builtin">Array</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Array]&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">isDate</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> val <span class="token keyword">is</span> Date <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&#39;[object Date]&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><strong>\u4F7F\u7528\u504F\u51FD\u6570\u5B9E\u73B0</strong></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isType</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">(</span>val<span class="token operator">:</span><span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token builtin">boolean</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> isString <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">&quot;String&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isArray <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">&quot;Array&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isDate <span class="token operator">=</span> <span class="token function">isType</span><span class="token punctuation">(</span><span class="token string">&quot;Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">isString</span><span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isArray</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">isDate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><strong>\u901A\u7528\u7684\u504F\u51FD\u6570</strong></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> <span class="token operator">...</span>argsBound<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>argsBound<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">isType</span><span class="token punctuation">(</span>type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> isString <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isArray <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;Array&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isDate <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li><strong>\u53EF\u4EE5\u4F7F\u7528\u5360\u4F4D\u7B26\u7684\u504F\u51FD\u6570</strong></li></ol><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">partial</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> argsBound <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> position <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> argsBound<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      argsBound<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> argsBound<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;_&quot;</span> <span class="token operator">?</span> args<span class="token punctuation">[</span>position<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">:</span> argsBound<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>position <span class="token operator">&lt;</span> args<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
      argsBound <span class="token operator">=</span> argsBound<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>args<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>argsBound<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u4FEE\u6539\u4E00\u4E0B isType \u53C2\u6570\u987A\u5E8F</span>
<span class="token keyword">function</span> <span class="token function">isType</span><span class="token punctuation">(</span>val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[object </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">type</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">]</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> isString <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isArray <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Array&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> isDate <span class="token operator">=</span> <span class="token function">partial</span><span class="token punctuation">(</span>isType<span class="token punctuation">,</span> <span class="token string">&quot;_&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Date&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),e=[o];function c(l,i){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","partial.html.vue"]]);export{r as default};
