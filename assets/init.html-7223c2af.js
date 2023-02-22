import{_ as t,M as o,p,q as i,R as n,t as a,N as e,a1 as l}from"./framework-5866ffd3.js";const c={},u=l(`<h3 id="创建项目文件夹" tabindex="-1"><a class="header-anchor" href="#创建项目文件夹" aria-hidden="true">#</a> 创建项目文件夹</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建项目文件夹</span>
<span class="token function">mkdir</span> billows
<span class="token comment"># 进入项目</span>
<span class="token builtin class-name">cd</span> billows
<span class="token comment"># 使用 vscode 打开项目</span>
code <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-npm-初始化项目" tabindex="-1"><a class="header-anchor" href="#使用-npm-初始化项目" aria-hidden="true">#</a> 使用 npm 初始化项目</h3><blockquote><p><code>npm init [-y]</code> 命令行有无参数区别: 是否快速初始化</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 使用 npm 初始化</span>
<span class="token comment"># -y 参数是快速初始化</span>
<span class="token function">npm</span> init <span class="token parameter variable">-y</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 需要一步一步确认信息初始化项目</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-packages-文件夹" tabindex="-1"><a class="header-anchor" href="#创建-packages-文件夹" aria-hidden="true">#</a> 创建 packages 文件夹</h3><blockquote><p>用于存放工具函数源码</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> packages
<span class="token builtin class-name">cd</span> packages
<span class="token comment"># 创建一个入口文件</span>
<span class="token function">touch</span> index.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-rollup-js" tabindex="-1"><a class="header-anchor" href="#安装-rollup-js" aria-hidden="true">#</a> 安装 rollup.js</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 rollup</span>
<span class="token function">npm</span> <span class="token function">install</span> rollup <span class="token parameter variable">-D</span>

<span class="token comment"># 创建 rollup 的配置文件</span>
<span class="token function">touch</span> rollup.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-typescript" tabindex="-1"><a class="header-anchor" href="#安装-typescript" aria-hidden="true">#</a> 安装 typescript</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 typescript</span>
<span class="token function">npm</span> <span class="token function">install</span> typescript tslib <span class="token parameter variable">-D</span>

<span class="token comment"># 使用 tsc --init 生成 tsconfig.json 配置文件</span>
npx tsc <span class="token parameter variable">--init</span>

Created a new tsconfig.json with:
  target: es2016
  module: commonjs
  strict: <span class="token boolean">true</span>
  esModuleInterop: <span class="token boolean">true</span>
  skipLibCheck: <span class="token boolean">true</span>
  forceConsistentCasingInFileNames: <span class="token boolean">true</span>


You can learn <span class="token function">more</span> at https://aka.ms/tsconfig
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="rollup-js-的配置" tabindex="-1"><a class="header-anchor" href="#rollup-js-的配置" aria-hidden="true">#</a> rollup.js 的配置</h3><blockquote><p>rollup.js 基础插件</p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>json <span class="token comment">// json 解析插件</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>node<span class="token operator">-</span>resolve <span class="token comment">// node_modules 管理</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>commonjs <span class="token comment">// CommonJS模块转换为ES6</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>alias <span class="token comment">// 别名</span>
<span class="token decorator"><span class="token at operator">@</span><span class="token function">rollup</span></span><span class="token operator">/</span>plugin<span class="token operator">-</span>typescript <span class="token comment">// typescript</span>
<span class="token comment">// ...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// rollup.config.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> resolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;path&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> pkg <span class="token keyword">from</span> <span class="token string">&quot;./package.json&quot;</span><span class="token punctuation">;</span>

<span class="token comment">// json 解析插件</span>
<span class="token keyword">import</span> json <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-json&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// node_modules 管理</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> nodeResolve <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-node-resolve&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// CommonJS模块转换为ES6</span>
<span class="token keyword">import</span> commonjs <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-commonjs&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// 别名</span>
<span class="token keyword">import</span> alias <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-alias&quot;</span><span class="token punctuation">;</span>
<span class="token comment">// typescript</span>
<span class="token keyword">import</span> typescript <span class="token keyword">from</span> <span class="token string">&quot;@rollup/plugin-typescript&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> version <span class="token punctuation">}</span> <span class="token operator">=</span> pkg<span class="token punctuation">;</span>
<span class="token comment">// rollup 出口配置</span>
<span class="token keyword">const</span> outputConf <span class="token operator">=</span> <span class="token punctuation">{</span>
  banner<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/* Billows version </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> */</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
  footer<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">/* Follow me on GitHub! @chengbotao */</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token comment">// 入口文件</span>
  input<span class="token operator">:</span> <span class="token string">&quot;packages/index.ts&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 打包成 es 模块 和 umd 模块</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="清理打包" tabindex="-1"><a class="header-anchor" href="#清理打包" aria-hidden="true">#</a> 清理打包</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 rimraf</span>
<span class="token function">npm</span> <span class="token function">install</span> rimraf <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置-package-json-script" tabindex="-1"><a class="header-anchor" href="#配置-package-json-script" aria-hidden="true">#</a> 配置 package.json -&gt; script</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">//...</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npm run clean &amp;&amp; rollup -c&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;clean&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rimraf dist&quot;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),r={href:"https://rollupjs.org/guide/zh/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),k={href:"https://www.tslang.cn/docs/home.html",target:"_blank",rel:"noopener noreferrer"},v=n("br",null,null,-1),m={href:"https://github.com/rollup/plugins",target:"_blank",rel:"noopener noreferrer"};function b(g,q){const s=o("ExternalLinkIcon");return p(),i("div",null,[u,n("p",null,[n("a",r,[a("rollup.js 中文官网"),e(s)]),d,n("a",k,[a("TypeScript 中文官网"),e(s)]),v,n("a",m,[a("rollup.js 插件列表"),e(s)])])])}const f=t(c,[["render",b],["__file","init.html.vue"]]);export{f as default};
