import{_ as t,r as o,o as p,c as i,a as n,b as a,d as l,e}from"./app.073df404.js";const c={},u=l(`<h3 id="\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521B\u5EFA\u9879\u76EE\u6587\u4EF6\u5939</span>
<span class="token function">mkdir</span> billows
<span class="token comment"># \u8FDB\u5165\u9879\u76EE</span>
<span class="token builtin class-name">cd</span> billows
<span class="token comment"># \u4F7F\u7528 vscode \u6253\u5F00\u9879\u76EE</span>
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4F7F\u7528-npm-\u521D\u59CB\u5316\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-npm-\u521D\u59CB\u5316\u9879\u76EE" aria-hidden="true">#</a> \u4F7F\u7528 npm \u521D\u59CB\u5316\u9879\u76EE</h3><blockquote><p><code>npm init [-y]</code> \u547D\u4EE4\u884C\u6709\u65E0\u53C2\u6570\u533A\u522B: \u662F\u5426\u5FEB\u901F\u521D\u59CB\u5316</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4F7F\u7528 npm \u521D\u59CB\u5316</span>
<span class="token comment"># -y \u53C2\u6570\u662F\u5FEB\u901F\u521D\u59CB\u5316</span>
<span class="token function">npm</span> init -y

About to <span class="token function">write</span> to E:<span class="token punctuation">\\</span>Chengbotao<span class="token punctuation">\\</span>billows<span class="token punctuation">\\</span>package.json:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;billows&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;index.js&quot;</span>,
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo <span class="token entity" title="\\&quot;">\\&quot;</span>Error: no test #specified<span class="token entity" title="\\&quot;">\\&quot;</span> &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;keywords&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>,
  <span class="token string">&quot;author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;&quot;</span>,
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;ISC&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9700\u8981\u4E00\u6B65\u4E00\u6B65\u786E\u8BA4\u4FE1\u606F\u521D\u59CB\u5316\u9879\u76EE</span>
<span class="token function">npm</span> init

This utility will walk you through creating a package.json file.
It only covers the <span class="token function">most</span> common items, and tries to guess sensible defaults.

See <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> <span class="token builtin class-name">help</span> init<span class="token variable">\`</span></span> <span class="token keyword">for</span> definitive documentation on these fields
and exactly what they do.

Use <span class="token variable"><span class="token variable">\`</span><span class="token function">npm</span> <span class="token function">install</span> <span class="token operator">&lt;</span>pkg<span class="token operator">&gt;</span><span class="token variable">\`</span></span> afterwards to <span class="token function">install</span> a package and
save it as a dependency <span class="token keyword">in</span> the package.json file.

Press ^C at any <span class="token function">time</span> to quit.

package name: <span class="token punctuation">(</span>billows<span class="token punctuation">)</span>
version: <span class="token punctuation">(</span><span class="token number">1.0</span>.0<span class="token punctuation">)</span>
description: Typescript front-end tool library
entry point: <span class="token punctuation">(</span>index.js<span class="token punctuation">)</span>
<span class="token builtin class-name">test</span> command:
<span class="token function">git</span> repository:
keywords:
author: chengbotao
license: <span class="token punctuation">(</span>ISC<span class="token punctuation">)</span> MIT
About to <span class="token function">write</span> to E:<span class="token punctuation">\\</span>Chengbotao<span class="token punctuation">\\</span>billows<span class="token punctuation">\\</span>package.json:

<span class="token punctuation">{</span>
  <span class="token string">&quot;name&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;billows&quot;</span>,
  <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.0.0&quot;</span>,
  <span class="token string">&quot;description&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;Typescript front-end tool library&quot;</span>,
  <span class="token string">&quot;main&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;index.js&quot;</span>,
  <span class="token string">&quot;scripts&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;test&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;echo <span class="token entity" title="\\&quot;">\\&quot;</span>Error: no test specified<span class="token entity" title="\\&quot;">\\&quot;</span> &amp;&amp; exit 1&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;author&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;chengbotao&quot;</span>,
  <span class="token string">&quot;license&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;MIT&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u521B\u5EFA-packages-\u6587\u4EF6\u5939" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-packages-\u6587\u4EF6\u5939" aria-hidden="true">#</a> \u521B\u5EFA packages \u6587\u4EF6\u5939</h3><blockquote><p>\u7528\u4E8E\u5B58\u653E\u5DE5\u5177\u51FD\u6570\u6E90\u7801</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> packages
<span class="token builtin class-name">cd</span> packages
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A\u5165\u53E3\u6587\u4EF6</span>
<span class="token function">touch</span> index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-rollup-js" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-rollup-js" aria-hidden="true">#</a> \u5B89\u88C5 rollup.js</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 rollup</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup -D

<span class="token comment"># \u521B\u5EFA rollup \u7684\u914D\u7F6E\u6587\u4EF6</span>
<span class="token function">touch</span> rollup.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-typescript" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-typescript" aria-hidden="true">#</a> \u5B89\u88C5 typescript</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 typescript</span>
<span class="token function">npm</span> <span class="token function">install</span> typescript tslib -D

<span class="token comment"># \u4F7F\u7528 tsc --init \u751F\u6210 tsconfig.json \u914D\u7F6E\u6587\u4EF6</span>
npx tsc --init

Created a new tsconfig.json with:
  target: es2016
  module: commonjs
  strict: <span class="token boolean">true</span>
  esModuleInterop: <span class="token boolean">true</span>
  skipLibCheck: <span class="token boolean">true</span>
  forceConsistentCasingInFileNames: <span class="token boolean">true</span>


You can learn <span class="token function">more</span> at https://aka.ms/tsconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rollup-js-\u7684\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#rollup-js-\u7684\u914D\u7F6E" aria-hidden="true">#</a> rollup.js \u7684\u914D\u7F6E</h3><blockquote><p>rollup.js \u57FA\u7840\u63D2\u4EF6</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>json <span class="token comment">// json \u89E3\u6790\u63D2\u4EF6</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>node<span class="token operator">-</span>resolve <span class="token comment">// node_modules \u7BA1\u7406</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>commonjs <span class="token comment">// CommonJS\u6A21\u5757\u8F6C\u6362\u4E3AES6</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>alias <span class="token comment">// \u522B\u540D</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>typescript <span class="token comment">// typescript</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// rollup.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pkg <span class="token keyword">from</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// json \u89E3\u6790\u63D2\u4EF6</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-json&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// node_modules \u7BA1\u7406</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// CommonJS\u6A21\u5757\u8F6C\u6362\u4E3AES6</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// \u522B\u540D</span>
<span class="token keyword">import</span> alias <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-alias&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// typescript</span>
<span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token operator">=</span> pkg<span class="token punctuation">;</span>
<span class="token comment">// rollup \u51FA\u53E3\u914D\u7F6E</span>
<span class="token keyword">const</span> outputConf <span class="token operator">=</span> <span class="token punctuation">{</span>
  banner<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/* Billows version </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> */</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  footer<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/* Follow me on GitHub! @chengbotao */</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5165\u53E3\u6587\u4EF6</span>
  input<span class="token operator">:</span> <span class="token string">&quot;packages/index.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6253\u5305\u6210 es \u6A21\u5757 \u548C umd \u6A21\u5757</span>
  output<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;billows.esm.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;esm&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>outputConf<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      file<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;billows.js&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      format<span class="token operator">:</span> <span class="token string">&quot;umd&quot;</span><span class="token punctuation">,</span>
      name<span class="token operator">:</span> <span class="token string">&quot;billows&quot;</span><span class="token punctuation">,</span>
      <span class="token operator">...</span>outputConf<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">alias</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      entries<span class="token operator">:</span> <span class="token punctuation">{</span>
        packages<span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&quot;packages&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">nodeResolve</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      extensions<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;.ts&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.tsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.mjs&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.js&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.jsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;.json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">commonjs</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">typescript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">json</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6E05\u7406\u6253\u5305" tabindex="-1"><a class="header-anchor" href="#\u6E05\u7406\u6253\u5305" aria-hidden="true">#</a> \u6E05\u7406\u6253\u5305</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 rimraf</span>
<span class="token function">npm</span> <span class="token function">install</span> rimraf -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u914D\u7F6E-package-json-script" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-package-json-script" aria-hidden="true">#</a> \u914D\u7F6E package.json -&gt; script</h3><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run clean &amp;&amp; rollup -c&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf dist&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),r={href:"https://rollupjs.org/guide/zh/",target:"_blank",rel:"noopener noreferrer"},d=e("rollup.js \u4E2D\u6587\u5B98\u7F51"),k=n("br",null,null,-1),v={href:"https://www.tslang.cn/docs/home.html",target:"_blank",rel:"noopener noreferrer"},m=e("TypeScript \u4E2D\u6587\u5B98\u7F51"),b=n("br",null,null,-1),g={href:"https://github.com/rollup/plugins",target:"_blank",rel:"noopener noreferrer"},q=e("rollup.js \u63D2\u4EF6\u5217\u8868");function h(f,y){const s=o("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[d,a(s)]),k,n("a",v,[m,a(s)]),b,n("a",g,[q,a(s)])])])}var j=t(c,[["render",h],["__file","init.html.vue"]]);export{j as default};
