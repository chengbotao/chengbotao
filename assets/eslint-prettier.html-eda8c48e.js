import{_ as t,M as o,p as i,q as l,R as n,t as e,N as a,a1 as p}from"./framework-5866ffd3.js";const r={},c=p(`<h3 id="eslint-安装配置" tabindex="-1"><a class="header-anchor" href="#eslint-安装配置" aria-hidden="true">#</a> eslint 安装配置</h3><blockquote><p>代码质量: 约定语法的使用, 如: 必须使用全等; 不能使用<code>var</code>定义变量等<br> 代码格式: 影响代码的格式美观, 如: 代码结束必须添加分号; 缩进的控制等</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装eslint</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint <span class="token parameter variable">-D</span>
<span class="token comment"># 初始化 eslint 配置</span>
npx eslint <span class="token parameter variable">--init</span>

You can also run this <span class="token builtin class-name">command</span> directly using <span class="token string">&#39;npm init @eslint/config&#39;</span><span class="token builtin class-name">.</span>
npx: <span class="token number">40</span> 安装成功，用时 <span class="token number">6.424</span> 秒
√ How would you like to use ESLint? · style
√ What <span class="token builtin class-name">type</span> of modules does your project use? · esm
√ Which framework does your project use? · none
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser
√ How would you like to define a style <span class="token keyword">for</span> your project? · guide
√ Which style guide <span class="token keyword">do</span> you want to follow? · standard
√ What <span class="token function">format</span> <span class="token keyword">do</span> you want your config <span class="token function">file</span> to be in? · JSON
Checking peerDependencies of eslint-config-standard@latest
The config that you&#39;ve selected requires the following dependencies:

@typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^8.0.1 eslint-plugin-import@^2.25.2 eslint-plugin-n@^15.0.0 eslint-plugin-promise@^6.0.0 @typescript-eslint/parser@latest
√ Would you like to <span class="token function">install</span> them now? · No / Yes
√ Which package manager <span class="token keyword">do</span> you want to use? · <span class="token function">npm</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="eslintrc" tabindex="-1"><a class="header-anchor" href="#eslintrc" aria-hidden="true">#</a> .eslintrc</h3><blockquote><p><code>eslint --init</code> 之后生成一个 <code>.eslintrc.{js,yml,json}</code></p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;root&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 表示当前 eslintrc 是最顶层的配置文件</span>
  <span class="token property">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 运行环境配置</span>
    <span class="token property">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 扩展</span>
  <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@typescript-eslint/parser&quot;</span><span class="token punctuation">,</span> <span class="token comment">// javascript 解析器</span>
  <span class="token property">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// javascript 语言选项 默认支持 ECMAScript 5 语法</span>
    <span class="token property">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;latest&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 插件</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 规则定义</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建-eslintignore" tabindex="-1"><a class="header-anchor" href="#创建-eslintignore" aria-hidden="true">#</a> 创建 .eslintignore</h3><blockquote><p>根目录下创建 <code>.eslintignore</code> 文件<br> 排除不需要 <code>eslint</code> 代码格式检查修复的目录或文件</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># don&#39;t ever lint node_modules</span>
node_modules
<span class="token comment"># don&#39;t lint build output (make sure it&#39;s set to your correct build folder name)</span>
dist

rollup.config.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prettier-eslint" tabindex="-1"><a class="header-anchor" href="#prettier-eslint" aria-hidden="true">#</a> Prettier + Eslint</h3><blockquote><p><code>Prettier</code> 是一个的代码格式化工具,专注于代码格式自动调整<br><code>ESLint</code> 关注代码质量,<code>Prettier</code> 关注代码格式<br> 两者一起搭配使用时,会有冲突,我们需要修改配置</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 eslint-config-prettier</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-config-prettier <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 <code>.eslintrc</code> 配置</p><blockquote><p>注意: 将 <code>prettier</code> 设为最后一个 <code>extends</code></p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">//.eslintrc</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span> <span class="token comment">// 扩展</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="prettier-格式问题的配置" tabindex="-1"><a class="header-anchor" href="#prettier-格式问题的配置" aria-hidden="true">#</a> Prettier 格式问题的配置</h3><blockquote><p>使用 <code>Prettier</code> + <code>Eslint</code> 时, 用 <code>eslint-config-prettier</code> 来关掉所有和 <code>Prettier</code> 冲突的 <code>Eslint</code> 配置后,代码格式问题已全部由 <code>Prettier</code> 管理,但希望报错的来源是 <code>Eslint</code>, 也就是我们需要把<code>Prettier</code> 格式问题配置到<code>Eslint</code>的<code>rules</code>里面</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 eslint-plugin-prettier prettier</span>
<span class="token function">npm</span> <span class="token function">install</span> eslint-plugin-prettier prettier <span class="token parameter variable">-D</span>

<span class="token comment"># 创建 .prettierrc 定义 Prettier 规则</span>
<span class="token punctuation">{</span>
  <span class="token string">&quot;singleQuote&quot;</span><span class="token builtin class-name">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>

<span class="token comment"># 创建 .prettierignore 排除不需要格式化目录及文件</span>
dist
node_modules
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// .eslintrc</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;standard&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 扩展</span>
  <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;@typescript-eslint&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prettier/prettier&quot;</span><span class="token operator">:</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;arrow-body-style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;prefer-arrow-callback&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),u={href:"http://eslint.cn/",target:"_blank",rel:"noopener noreferrer"},d=n("br",null,null,-1),v={href:"https://www.prettier.cn/",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),m={href:"https://github.com/prettier/eslint-config-prettier",target:"_blank",rel:"noopener noreferrer"},b=n("br",null,null,-1),h={href:"https://github.com/prettier/eslint-plugin-prettier",target:"_blank",rel:"noopener noreferrer"};function g(q,f){const s=o("ExternalLinkIcon");return i(),l("div",null,[c,n("p",null,[n("a",u,[e("Eslint 官网"),a(s)]),d,n("a",v,[e("Prettier 官网"),a(s)]),k,n("a",m,[e("eslint-config-prettier"),a(s)]),b,n("a",h,[e("eslint-plugin-prettier"),a(s)])])])}const _=t(r,[["render",g],["__file","eslint-prettier.html.vue"]]);export{_ as default};
