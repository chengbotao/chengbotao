import{_ as n,o as s,c as a,d as p}from"./app.80aa3d2d.js";const e={},t=p(`<p><strong>Q: \u4F18\u5316\u6253\u5305\u901F\u5EA6</strong></p><ol><li>dll \u4F18\u5316 <blockquote><p>webpack.dll.config.js<br> \u7B2C\u4E09\u65B9\u5305\u4E00\u822C\u4E0D\u4F1A\u6539\u53D8,\u4F46 webpack \u6BCF\u6B21\u6253\u5305\u90FD\u4F1A\u5904\u7406\u7B2C\u4E09\u65B9\u5305, \u6240\u4EE5\u6211\u4EEC\u5148\u5904\u7406\u7B2C\u4E09\u65B9\u5305,\u7136\u540E\u518D\u6253\u5305</p></blockquote></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.dll.config.js</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// vendor \u4E3A\u7B2C\u4E09\u65B9\u5E93\u7684\u96C6\u5408</span>
    <span class="token literal-property property">vendor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;jquery&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">&quot;/dll&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;[name].dll.js&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">library</span><span class="token operator">:</span> <span class="token string">&quot;[name]_library&quot;</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">path</span><span class="token operator">:</span> __dirname <span class="token operator">+</span> <span class="token string">&quot;/dll/[name]-manifest.json&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[name]_library&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// webpack.config.js</span>
<span class="token comment">// ...</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>DllReferencePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token comment">// require \u7684\u662F webpack.dll.config.js \u8F93\u51FA\u7684json\u6587\u4EF6</span>
      <span class="token literal-property property">mainfest</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./dll/vendor-manifest.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Happypack <blockquote><p>js \u5355\u7EBF\u7A0B,node \u662F\u53EF\u4EE5\u5F00 webWork \u5229\u7528 node \u7684 webWork \u591A\u7EBF\u7A0B\u5904\u7406\u6587\u4EF6</p></blockquote></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> Happypack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;happypack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u5F00\u542F\u591A\u4E2A\u7EBF\u7A0B\u6C60 \u6839\u636Ecpu\u6570\u91CF</span>
<span class="token keyword">const</span> happyPackThreadPool <span class="token operator">=</span> Happypack<span class="token punctuation">.</span><span class="token function">ThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7node\u7684os\u6A21\u5757\u83B7\u53D6cpu\u7684\u6570\u91CF</span>
  <span class="token literal-property property">szie</span><span class="token operator">:</span> os<span class="token punctuation">.</span><span class="token function">cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// \u4F7F\u7528\u5355\u4E2Aloader</span>
        <span class="token comment">// loader: &quot;babel-loader&quot;,</span>
        <span class="token comment">// \u4F7F\u7528 Happypack \u5355\u72EC\u5904\u7406babel-loader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;Happypack?loader=&#39;babel-loader&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// \u4F7F\u7528\u591A\u4E2Aloader</span>
        <span class="token comment">/*use: [
            {
              loader: &quot;babel-loader&quot;
            }
          ]*/</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">Happupack</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">&quot;babel-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">threadPool</span><span class="token operator">:</span> happyPackThreadPool<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q: webpack \u4E2D plugin \u8DDF loader \u5E94\u7528\u573A\u666F</strong></p><ol><li>\u5BF9\u6A21\u5757\u5185\u5BB9\u8FDB\u884C\u5904\u7406 <blockquote><p>\u4F18\u5148\u4F7F\u7528 loader<br> loader \u5BF9\u67D0\u4E00\u7C7B\u578B\u7684\u6587\u4EF6\u8FDB\u884C\u5904\u7406,\u4E00\u4E2A\u6587\u4EF6\u76F8\u7B49\u4E8E\u4E00\u4E2A\u6A21\u5757</p></blockquote></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// myloader.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u505A\u5904\u7406</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u589E\u52A0\u7279\u6B8A\u7684\u529F\u80FD <blockquote><p>\u81EA\u5B9A\u4E49\u63D2\u4EF6(plugin)</p></blockquote></li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5728 apply \u5BF9\u6253\u5305\u7684\u67D0\u4E2A\u5468\u671F\u8FDB\u884C\u76D1\u542C</span>
  <span class="token comment">// done\u3001emit,...</span>
  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dist \u76EE\u5F55\u5DF2\u7ECF\u751F\u6210</span>
    <span class="token comment">// \u505A\u5904\u7406</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function l(c,i){return s(),a("div",null,o)}var r=n(e,[["render",l],["__file","learn.html.vue"]]);export{r as default};
