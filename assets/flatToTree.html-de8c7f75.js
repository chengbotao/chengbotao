import{_ as n,p as s,q as a,Q as t,a1 as p}from"./framework-5866ffd3.js";const o={},e=p(`<h2 id="flattotree" tabindex="-1"><a class="header-anchor" href="#flattotree" aria-hidden="true">#</a> flatToTree</h2><blockquote><p><strong>说明:</strong> <em>扁平化数据结构树形</em></p></blockquote><table><thead><tr><th>参数名</th><th>参数类型</th><th>参数说明</th></tr></thead><tbody><tr><td><code>target</code></td><td><code>any[]</code></td><td>扁平化数据结构</td></tr><tr><td><code>options?</code></td><td><code>Partial&lt;Record&lt;&#39;idKey&#39; | &#39;pidKey&#39; | &#39;childrenKey&#39; | &#39;topVal&#39;, string&gt;&gt;</code></td><td>树形结构关键 keys(唯一标志、 父级<code>id</code>、 子集 <code>key</code>、 <code>topVal</code>顶层值)</td></tr></tbody></table><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm install billows</span>
<span class="token comment">// import { flatToTree } from &#39;billows&#39;;</span>

<span class="token keyword">const</span> provinceFlat <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;湖北省&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;武汉&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1020&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;咸宁&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1022&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;孝感&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1034&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;襄阳&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;宜昌&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;洪山区&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;武昌区&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;汉阳区&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;江苏省&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;江苏省&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1201&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;南京&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1202&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;苏州&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1204&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;扬州&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> provinceList <span class="token operator">=</span> <span class="token function">flatToTree</span><span class="token punctuation">(</span>provinceFlat<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;湖北省&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
        pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">&quot;武汉&quot;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;洪山区&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;武昌区&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;汉阳区&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1020&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;咸宁&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1022&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;孝感&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1034&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;襄阳&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;宜昌&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;江苏省&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;江苏省&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1201&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;南京&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1202&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;苏州&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1204&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;扬州&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">DuckTyping</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// import { DuckTyping } from &quot;../types&quot;;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">flatToTree</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  options<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>
    Record<span class="token operator">&lt;</span><span class="token string">&quot;idKey&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;pidKey&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;childrenKey&quot;</span> <span class="token operator">|</span> <span class="token string">&quot;topVal&quot;</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">&gt;</span>
  <span class="token operator">&gt;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> copyFlat <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> record<span class="token operator">:</span> DuckTyping <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> defaultOpts <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span>
      idKey<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span>
      pidKey<span class="token operator">:</span> <span class="token string">&quot;pid&quot;</span><span class="token punctuation">,</span>
      childrenKey<span class="token operator">:</span> <span class="token string">&quot;children&quot;</span><span class="token punctuation">,</span>
      topVal<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    options
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> idKey<span class="token punctuation">,</span> pidKey<span class="token punctuation">,</span> childrenKey<span class="token punctuation">,</span> topVal <span class="token punctuation">}</span> <span class="token operator">=</span> defaultOpts<span class="token punctuation">;</span>
  <span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> copyFlat<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> copyFlat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>idKey<span class="token punctuation">]</span><span class="token operator">:</span> idVal<span class="token punctuation">,</span> <span class="token punctuation">[</span>pidKey<span class="token punctuation">]</span><span class="token operator">:</span> pidVal <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>pidVal <span class="token operator">&amp;&amp;</span> pidVal <span class="token operator">!==</span> topVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      tree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> tree<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// copy 一份扁平数据</span>
<span class="token keyword">const</span> copyFlat <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 创建一个空对象</span>
<span class="token keyword">const</span> record<span class="token operator">:</span> DuckTyping <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 合并默认参数</span>
<span class="token keyword">const</span> defaultOpts <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    idKey<span class="token operator">:</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 每个节点唯一标致的key</span>
    pidKey<span class="token operator">:</span> <span class="token string">&quot;pid&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 节点中父节点key</span>
    childrenKey<span class="token operator">:</span> <span class="token string">&quot;children&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 要生成子集key</span>
    topVal<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 定义顶层值, 如: 顶层节点中pidKey的值隐式false 则不需要配置topVal; 如果顶层节点pidKey的值是自定义的值 topVal定义成这个值</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  options
<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> idKey<span class="token punctuation">,</span> pidKey<span class="token punctuation">,</span> childrenKey<span class="token punctuation">,</span> topVal <span class="token punctuation">}</span> <span class="token operator">=</span> defaultOpts<span class="token punctuation">;</span>
<span class="token keyword">const</span> tree <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> len <span class="token operator">=</span> copyFlat<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> item <span class="token operator">=</span> copyFlat<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>idKey<span class="token punctuation">]</span><span class="token operator">:</span> idVal<span class="token punctuation">,</span> <span class="token punctuation">[</span>pidKey<span class="token punctuation">]</span><span class="token operator">:</span> pidVal <span class="token punctuation">}</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>

  <span class="token comment">// 每个节点新增 childrenKey 的属性</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    item<span class="token punctuation">[</span>childrenKey<span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>idVal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 如果不是顶层节点 借助 record 继续循环</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pidVal <span class="token operator">&amp;&amp;</span> pidVal <span class="token operator">!==</span> topVal<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    record<span class="token punctuation">[</span>pidVal<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// 如果是顶层节点 push tree</span>
    tree<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> tree<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function c(i,l){return s(),a("div",null,[t(`
 * @Author: Chengbotao
 * @Date: 2022-06-18 10:11:46
`),e])}const r=n(o,[["render",c],["__file","flatToTree.html.vue"]]);export{r as default};
