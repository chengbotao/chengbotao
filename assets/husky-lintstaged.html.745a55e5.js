import{_ as i,r as t,o as l,c,a as n,b as a,e as o,d as e}from"./app.4367a3e7.js";const p={},d=o(`<blockquote><p>\u4F7F\u7528 <code>git</code> \u7BA1\u7406\u7684\u9879\u76EE,\u5373\u4F7F\u4E0D\u901A\u8FC7 <code>eslint + prettier</code> \u4EE3\u7801\u68C0\u6D4B\u7684\u4EE3\u7801\u4F9D\u7136\u80FD\u88AB\u63D0\u4EA4\u5230\u4ED3\u5E93\u4E2D\u53BB,\u8FD9\u5E76\u4E0D\u662F\u6211\u4EEC\u60F3\u8981\u7684,\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 <code>husky</code> \u6765\u62E6\u622A <code>git hooks</code> \u64CD\u4F5C,\u5728 <code>git</code> \u64CD\u4F5C\u4E4B\u524D\u8FDB\u884C\u4E00\u6B21\u4EE3\u7801\u68C0\u6D4B\u3002</p></blockquote><h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 husky</span>
<span class="token function">npm</span> <span class="token function">install</span> husky -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// \u5728 package.json script \u6DFB\u52A0\u811A\u672C</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;prepare&quot;</span><span class="token operator">:</span> <span class="token string">&quot;npx husky install&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u521D\u59CB\u5316</span>
<span class="token function">npm</span> run prepare
<span class="token comment"># \u6DFB\u52A0 pre-commit hooks \u6267\u884C eslint \u4FEE\u590D</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;npx eslint --fix&quot;</span>


<span class="token comment">#########################################</span>
<span class="token comment"># \u5982\u679C\u4E0A\u4E00\u6761\u547D\u4EE4\u6267\u884C\u51FA\u73B0\u4E0B\u9762\u63D0\u793A</span>
Usage:
  husky <span class="token function">install</span> <span class="token punctuation">[</span>dir<span class="token punctuation">]</span> <span class="token punctuation">(</span>default: .husky<span class="token punctuation">)</span>
  husky uninstall
  husky <span class="token builtin class-name">set</span><span class="token operator">|</span><span class="token function">add</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span> <span class="token punctuation">[</span>cmd<span class="token punctuation">]</span>

<span class="token comment"># \u53EF\u4EE5\u5148\u6DFB\u52A0\u4E00\u4E2A\u6CA1\u6709cmd\u547D\u4EE4\u7684\u7A7Apre-commit</span>
npx husky <span class="token function">add</span> .husky/pre-commit <span class="token string">&quot;&quot;</span>
<span class="token comment"># \u7136\u540E\u627E\u5230 .husky/pre-commit \u6587\u4EF6\u5E76\u4FEE\u6539</span>
<span class="token comment"># .husky/pre-commit</span>

<span class="token comment">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx eslint --fix

<span class="token comment">###########################################</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5BF9\u4E8E<code>git</code>\u63D0\u4EA4\u6765\u8BF4,\u5982\u679C\u6BCF\u6B21\u90FD\u7528<code>eslint + prettier</code>\u68C0\u6D4B\u53EF\u64CD\u4F5C\u7684\u6240\u6709\u6587\u4EF6,\u53EF\u80FD\u4E0D\u662F\u5FC5\u8981\u7684,\u6240\u4EE5\u501F\u52A9\u4F7F\u7528<code>lint-staged</code>\u5DE5\u5177\u53EA\u9488\u5BF9\u5F53\u524D\u4FEE\u6539\u7684\u90E8\u5206\u8FDB\u884C\u68C0\u6D4B\u3002</p></blockquote><h3 id="lint-staged" tabindex="-1"><a class="header-anchor" href="#lint-staged" aria-hidden="true">#</a> lint-staged</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 lint-staged</span>
<span class="token function">npm</span> <span class="token function">install</span> lint-staged -D

<span class="token comment"># \u521B\u5EFA .lintstagedrc \u6587\u4EF6</span>
<span class="token comment"># eslint\u4EE3\u7801\u6821\u9A8C prettier \u4EE3\u7801\u683C\u5F0F\u4FEE\u6539</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;packages/**/*.{ts,js}&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;npx eslint&quot;</span>,
        <span class="token string">&quot;npx prettier --write&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token comment"># \u4FEE\u6539 .husky/pre-commit</span>

<span class="token comment">#!/usr/bin/env sh</span>
<span class="token builtin class-name">.</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">dirname</span> -- <span class="token string">&quot;<span class="token variable">$0</span>&quot;</span><span class="token variable">)</span></span>/_/husky.sh&quot;</span>

npx lint-staged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r={href:"https://github.com/typicode/husky",target:"_blank",rel:"noopener noreferrer"},u=e("husky"),m=n("br",null,null,-1),v={href:"https://www.prettier.cn/docs//install.html#git-hooks",target:"_blank",rel:"noopener noreferrer"},k=e("husky \u53C2\u8003 prettier \u4E2D\u4F7F\u7528"),b=n("br",null,null,-1),h={href:"https://github.com/okonet/lint-staged",target:"_blank",rel:"noopener noreferrer"},g=e("lint-staged");function _(f,q){const s=t("ExternalLinkIcon");return l(),c("div",null,[d,n("p",null,[n("a",r,[u,a(s)]),m,n("a",v,[k,a(s)]),b,n("a",h,[g,a(s)])])])}var x=i(p,[["render",_],["__file","husky-lintstaged.html.vue"]]);export{x as default};
