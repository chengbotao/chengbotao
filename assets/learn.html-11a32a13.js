import{_ as n,p as s,q as a,a1 as p}from"./framework-5866ffd3.js";const e={},t=p(`<p><strong>Q: 优化打包速度</strong></p><ol><li>dll 优化 <blockquote><p>webpack.dll.config.js<br> 第三方包一般不会改变,但 webpack 每次打包都会处理第三方包, 所以我们先处理第三方包,然后再打包</p></blockquote></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.dll.config.js</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;webpack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// vendor 为第三方库的集合</span>
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
      <span class="token comment">// require 的是 webpack.dll.config.js 输出的json文件</span>
      <span class="token literal-property property">mainfest</span><span class="token operator">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;./dll/vendor-manifest.json&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Happypack <blockquote><p>js 单线程,node 是可以开 webWork 利用 node 的 webWork 多线程处理文件</p></blockquote></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> Happypack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;happypack&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 开启多个线程池 根据cpu数量</span>
<span class="token keyword">const</span> happyPackThreadPool <span class="token operator">=</span> Happypack<span class="token punctuation">.</span><span class="token function">ThreadPool</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token comment">// 通过node的os模块获取cpu的数量</span>
  <span class="token literal-property property">szie</span><span class="token operator">:</span> os<span class="token punctuation">.</span><span class="token function">cpu</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token comment">// 使用单个loader</span>
        <span class="token comment">// loader: &quot;babel-loader&quot;,</span>
        <span class="token comment">// 使用 Happypack 单独处理babel-loader</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;Happypack?loader=&#39;babel-loader&#39;&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 使用多个loader</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q: webpack 中 plugin 跟 loader 应用场景</strong></p><ol><li>对模块内容进行处理 <blockquote><p>优先使用 loader<br> loader 对某一类型的文件进行处理,一个文件相等于一个模块</p></blockquote></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// myloader.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">content</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 做处理</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>增加特殊的功能 <blockquote><p>自定义插件(plugin)</p></blockquote></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">apply</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 在 apply 对打包的某个周期进行监听</span>
  <span class="token comment">// done、emit,...</span>
  compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>done<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span><span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// dist 目录已经生成</span>
    <span class="token comment">// 做处理</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),o=[t];function l(c,i){return s(),a("div",null,o)}const r=n(e,[["render",l],["__file","learn.html.vue"]]);export{r as default};
