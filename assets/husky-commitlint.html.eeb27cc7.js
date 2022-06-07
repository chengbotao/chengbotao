import{_ as e,r as a,o as i,c,a as n,b as t,d as o,e as l}from"./app.073df404.js";const d={},p=o(`<h3 id="commitlint" tabindex="-1"><a class="header-anchor" href="#commitlint" aria-hidden="true">#</a> commitlint</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> <span class="token function">install</span> @commitlint/cli @commitlint/config-conventional -D

<span class="token comment"># \u521B\u5EFA .commitlintrc \u6587\u4EF6</span>
<span class="token punctuation">{</span>
    <span class="token string">&quot;extends&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span><span class="token string">&#39;@commitlint/config-conventional&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="husky" tabindex="-1"><a class="header-anchor" href="#husky" aria-hidden="true">#</a> husky</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># husky \u521B\u5EFA commit-msg hooks</span>
npx husky <span class="token function">add</span> .husky/commit-msg <span class="token string">&#39;npx --no -- commitlint --edit &quot;\\\${1}&quot;&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cz-customizable" tabindex="-1"><a class="header-anchor" href="#cz-customizable" aria-hidden="true">#</a> cz-customizable</h3><blockquote><p>\u501F\u52A9 <code>husky</code> + <code>commitlint</code> \u53EF\u4EE5\u5B9E\u73B0 <code>commit</code> \u4FE1\u606F\u89C4\u8303\u5316\u63D0\u4EA4<br> \u4F46 <code>commitlint</code> \u9ED8\u8BA4\u7684 <code>commit</code> \u89C4\u5219\u4E0D\u80FD\u5F88\u53CB\u597D\u4E14\u5BB9\u6613\u5FFD\u7565\u89C4\u5219 \u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 <code>cz-customizable</code> \u6765\u81EA\u5B9A\u4E49 <code>commit</code> \u89C4\u8303\u4E14\u53EF\u89C6\u5316\u7684\u63D0\u4EA4</p></blockquote><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5 cz-customizable</span>
<span class="token function">npm</span> <span class="token function">install</span> cz-customizable -D

<span class="token comment"># \u521B\u5EFA\u4E00\u4E2A .cz-config.js \u6587\u4EF6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;commitizen&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./node_modules/cz-customizable&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r={href:"https://commitlint.js.org/#/",target:"_blank",rel:"noopener noreferrer"},u=l("commitlint");function m(v,b){const s=a("ExternalLinkIcon");return i(),c("div",null,[p,n("p",null,[n("a",r,[u,t(s)])])])}var k=e(d,[["render",m],["__file","husky-commitlint.html.vue"]]);export{k as default};
