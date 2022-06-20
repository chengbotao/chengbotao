import{_ as n,o as s,c as a,d as t}from"./app.702b655d.js";const p={},o=t(`<h2 id="treetoflat" tabindex="-1"><a class="header-anchor" href="#treetoflat" aria-hidden="true">#</a> treeToFlat</h2><blockquote><p><strong>\u8BF4\u660E:</strong> <em>\u6811\u5F62\u6570\u636E\u7ED3\u6784\u6241\u5E73\u5316</em></p></blockquote><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>target</code></td><td><code>any[] &amp; DuckTyping</code></td><td>\u6811\u7ED3\u6784\u5BF9\u8C61\u6570\u7EC4\u6216\u4E00\u4E2A\u6811\u7ED3\u6784\u5BF9\u8C61</td></tr><tr><td><code>subsetKey</code></td><td><code>string</code></td><td>\u6811\u5F62\u5B50\u96C6\u7684\u952E\u540D(\u9ED8\u8BA4\u662F<code>children</code>)</td></tr></tbody></table><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// npm install billows</span>
<span class="token comment">// import { treeToFlat } from &#39;billows&#39;;</span>

<span class="token keyword">const</span> provinceList <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6E56\u5317\u7701&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        id<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
        pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
        label<span class="token operator">:</span> <span class="token string">&quot;\u6B66\u6C49&quot;</span><span class="token punctuation">,</span>
        children<span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6D2A\u5C71\u533A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6B66\u660C\u533A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6C49\u9633\u533A&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1020&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u54B8\u5B81&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1022&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5B5D\u611F&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1034&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u8944\u9633&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5B9C\u660C&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;\u6C5F\u82CF\u7701&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6C5F\u82CF\u7701&quot;</span><span class="token punctuation">,</span>
    children<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1201&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5357\u4EAC&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1202&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u82CF\u5DDE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;1204&quot;</span><span class="token punctuation">,</span> pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u626C\u5DDE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> provinceFlat <span class="token operator">=</span> <span class="token function">treeToFlat</span><span class="token punctuation">(</span>provinceList<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6E56\u5317\u7701&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6B66\u6C49&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1020&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u54B8\u5B81&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1022&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u5B5D\u611F&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1034&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u8944\u9633&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1003&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u5B9C\u660C&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100101&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6D2A\u5C71\u533A&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100102&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6B66\u660C\u533A&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;100103&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6C49\u9633\u533A&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    value<span class="token operator">:</span> <span class="token string">&quot;\u6C5F\u82CF\u7701&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u6C5F\u82CF\u7701&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1201&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u5357\u4EAC&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1202&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u82CF\u5DDE&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    id<span class="token operator">:</span> <span class="token string">&quot;1204&quot;</span><span class="token punctuation">,</span>
    pid<span class="token operator">:</span> <span class="token string">&quot;1200&quot;</span><span class="token punctuation">,</span>
    label<span class="token operator">:</span> <span class="token string">&quot;\u626C\u5DDE&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">declare</span> <span class="token keyword">interface</span> <span class="token class-name">DuckTyping</span> <span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// \u5BF9\u4F20\u5165\u7684\u6811\u505A\u7C7B\u578B\u7EDF\u4E00</span>
<span class="token comment">// \u591A\u4E2A\u6811\u7684List Array  || \u5355\u4E2A\u6811\u7684\u5BF9\u8C61</span>
<span class="token keyword">const</span> copyTree <span class="token operator">=</span>
  Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token string">&quot;[object Array]&quot;</span>
    <span class="token operator">?</span> <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
    <span class="token operator">:</span> <span class="token punctuation">[</span>target<span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// \u8FD4\u56DE\u7684\u6241\u5E73\u7684\u6570\u7EC4</span>
<span class="token keyword">const</span> flat <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">while</span> <span class="token punctuation">(</span>copyTree<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5FAA\u73AF\u53D6\u51FA\u8282\u70B9</span>
  <span class="token keyword">const</span> node <span class="token operator">=</span> copyTree<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u89E3\u6784\u8D4B\u503C \u52A8\u6001\u5C5E\u6027\u8D4B\u503C children</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>subsetKey<span class="token punctuation">]</span><span class="token operator">:</span> children<span class="token punctuation">,</span> <span class="token operator">...</span>rest <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
  <span class="token comment">// \u8282\u70B9\u9664\u4E86children\u5C5E\u6027\u4EE5\u5916\u7684\u5C5E\u6027push flat\u4E2D</span>
  flat<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5224\u65AD\u662F\u5426\u6709 children push\u7EE7\u7EED\u5FAA\u73AF(\u591A\u4E2A\u6811List \u5E7F\u5EA6\u4F18\u5148 \u5C06\u6240\u6709\u6811\u4E00\u7EA7\u6241\u5E73\u5316\u518D\u7EE7\u7EED\u7B2C\u4E8C\u7EA7)</span>
    <span class="token builtin">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>copyTree<span class="token punctuation">,</span> node<span class="token punctuation">.</span>children<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// (\u591A\u4E2A\u6811List \u6DF1\u5EA6\u4F18\u5148 \u5148\u5C06\u4E00\u4E2A\u6811\u6241\u5E73\u5316)</span>
    <span class="token comment">// Array.prototype.unshift.apply(copyTree, node.children);</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">return</span> flat<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),e=[o];function c(i,l){return s(),a("div",null,e)}var r=n(p,[["render",c],["__file","treeToFlat.html.vue"]]);export{r as default};
