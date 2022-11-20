import{_ as n,o as s,c as a,e as t}from"./app.2c890e59.js";const p={},o=t(`<h2 id="treetoflat" tabindex="-1"><a class="header-anchor" href="#treetoflat" aria-hidden="true">#</a> treeToFlat</h2><blockquote><p><strong>说明:</strong> <em>树形数据结构扁平化</em></p></blockquote><table><thead><tr><th>参数名</th><th>参数类型</th><th>参数说明</th></tr></thead><tbody><tr><td><code>target</code></td><td><code>any[] &amp; DuckTyping</code></td><td>树结构对象数组或一个树结构对象</td></tr><tr><td><code>subsetKey</code></td><td><code>string</code></td><td>树形子集的键名(默认是<code>children</code>)</td></tr></tbody></table><h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm install billows</span>
<span class="token comment">// import { treeToFlat } from &#39;billows&#39;;</span>

<span class="token keyword">const</span> provinceList <span class="token operator">=</span> <span class="token punctuation">[</span>
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

<span class="token keyword">const</span> provinceFlat <span class="token operator">=</span> <span class="token function">treeToFlat</span><span class="token punctuation">(</span>provinceList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">DuckTyping</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// import { DuckTyping } from &#39;../types&#39;;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">treeToFlat</span><span class="token punctuation">(</span>
  target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> DuckTyping<span class="token punctuation">,</span>
  subsetKey<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> <span class="token string">&quot;children&quot;</span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> copyTree <span class="token operator">=</span>
    Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;[object Array]&quot;</span>
      <span class="token operator">?</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
      <span class="token operator">:</span> <span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">const</span> flat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span>copyTree<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> node <span class="token operator">=</span> copyTree<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>subsetKey<span class="token punctuation">]</span><span class="token operator">:</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
    flat<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>copyTree<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> flat<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 对传入的树做类型统一</span>
<span class="token comment">// 多个树的List Array  || 单个树的对象</span>
<span class="token keyword">const</span> copyTree <span class="token operator">=</span>
  Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;[object Array]&quot;</span>
    <span class="token operator">?</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 返回的扁平的数组</span>
<span class="token keyword">const</span> flat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>copyTree<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 循环取出节点</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> copyTree<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// 解构赋值 动态属性赋值 children</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>subsetKey<span class="token punctuation">]</span><span class="token operator">:</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token comment">// 节点除了children属性以外的属性push flat中</span>
  flat<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 判断是否有 children push继续循环(多个树List 广度优先 将所有树一级扁平化再继续第二级)</span>
    <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>copyTree<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// (多个树List 深度优先 先将一个树扁平化)</span>
    <span class="token comment">// Array.prototype.unshift.apply(copyTree, node.children);</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> flat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[o];function c(i,l){return s(),a("div",null,e)}const r=n(p,[["render",c],["__file","treeToFlat.html.vue"]]);export{r as default};
