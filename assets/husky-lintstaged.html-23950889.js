import{_ as t,M as i,p as l,q as c,Q as o,R as n,t as a,N as e,a1 as p}from"./framework-204010b2.js";const d={},r=p(`<blockquote><p>使用 <code>git</code> 管理的项目,即使不通过 <code>eslint + prettier</code> 代码检测的代码依然能被提交到仓库中去,这并不是我们想要的,所以我们可以借助 <code>husky</code> 来拦截 <code>git hooks</code> 操作,在 <code>git</code> 操作之前进行一次代码检测。</p></blockquote><h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 husky</span>
<span class="token function">npm</span> <span class="token function">install</span> husky <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 在 package.json script 添加脚本</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 初始化</span>
<span class="token function">npm</span> run prepare
<span class="token comment"># 添加 pre-commit hooks 执行 eslint 修复</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx eslint --fix&quot;</span>


<span class="token comment">#########################################</span>
<span class="token comment"># 如果上一条命令执行出现下面提示</span>
Usage:
  husky <span class="token function">install</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span> <span class="token punctuation">(</span>default: .husky<span class="token punctuation">)</span>
  husky uninstall
  husky <span class="token builtin class-name">set</span><span class="token operator">|</span><span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token punctuation">[</span>cmd<span class="token punctuation">]</span>

<span class="token comment"># 可以先添加一个没有cmd命令的空pre-commit</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;&quot;</span>
<span class="token comment"># 然后找到 .husky/pre-commit 文件并修改</span>
<span class="token comment"># .husky/pre-commit</span>

<span class="token comment">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx eslint <span class="token parameter variable">--fix</span>

<span class="token comment">###########################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>对于<code>git</code>提交来说,如果每次都用<code>eslint + prettier</code>检测可操作的所有文件,可能不是必要的,所以借助使用<code>lint-staged</code>工具只针对当前修改的部分进行检测。</p></blockquote><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装 lint-staged</span>
<span class="token function">npm</span> <span class="token function">install</span> lint-staged <span class="token parameter variable">-D</span>

<span class="token comment"># 创建 .lintstagedrc 文件</span>
<span class="token comment"># eslint代码校验 prettier 代码格式修改</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;packages/**/*.{ts,js}&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;npx eslint&quot;</span>,
        <span class="token string">&quot;npx prettier --write&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># 修改 .husky/pre-commit</span>

<span class="token comment">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),v={href:"https://www.prettier.cn/docs//install.html#git-hooks",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),b={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"};function h(g,_){const s=i("ExternalLinkIcon");return l(),c("div",null,[o(`
 * @Author: Chengbotao
 * @Date: 2022-06-07 10:46:36
`),r,n("p",null,[n("a",u,[a("husky"),e(s)]),m,n("a",v,[a("husky 参考 prettier 中使用"),e(s)]),k,n("a",b,[a("lint-staged"),e(s)])])])}const q=t(d,[["render",h],["__file","husky-lintstaged.html.vue"]]);export{q as default};
