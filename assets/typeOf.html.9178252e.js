import{_ as n,o as s,c as t,e as a}from"./app.5dbfedcc.js";const e={},o=a(`<h2 id="typeof" tabindex="-1"><a class="header-anchor" href="#typeof" aria-hidden="true">#</a> typeOf</h2><blockquote><p><strong>\u8BF4\u660E:</strong> <em>\u8FD4\u56DE\u4E00\u4E2A<strong>\u5BF9\u8C61\u6216\u539F\u59CB\u503C</strong>\u8868\u8FBE\u5F0F\u7684\u7C7B\u578B</em><br><strong>\u8FD4\u56DE:</strong> <em><code>{ string }</code></em> \u7C7B\u578B</p></blockquote><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>operand</code></td><td><code>any</code></td><td>\u4E00\u4E2A\u5BF9\u8C61\u6216\u539F\u59CB\u503C\u8868\u8FBE\u5F0F</td></tr></tbody></table><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// npm install billows</span>
<span class="token comment">// import { typeOf } from &#39;billows&#39;;</span>

<span class="token function">typeOf</span><span class="token punctuation">(</span><span class="token string">&quot;chengbotao&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;string&quot;</span>
<span class="token function">typeOf</span><span class="token punctuation">(</span><span class="token number">28</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">typeOf</span><span class="token punctuation">(</span><span class="token operator">+</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;number&quot;</span>
<span class="token function">typeOf</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;string&quot;</span>
<span class="token function">typeOf</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;date&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">typeOf</span><span class="token punctuation">(</span>operand<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> toString <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>
  <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>operand<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  type <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> type<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> type<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>JavaScript <code>typeof</code> \u64CD\u4F5C\u7B26\u53EF\u80FD\u8FD4\u56DE\u503C</em></p><table><thead><tr><th>\u7C7B\u578B</th><th>\u8FD4\u56DE\u503C</th></tr></thead><tbody><tr><td><code>Undefined</code></td><td><code>undefined</code></td></tr><tr><td><code>Boolean</code></td><td><code>boolean</code></td></tr><tr><td><code>Number</code></td><td><code>number</code></td></tr><tr><td><code>BigInt</code></td><td><code>bigInt</code></td></tr><tr><td><code>String</code></td><td><code>string</code></td></tr><tr><td><code>Symbol</code></td><td><code>symbol</code></td></tr><tr><td><code>Function</code></td><td><code>function</code></td></tr><tr><td><code>Null</code></td><td><code>object</code></td></tr><tr><td><strong>\u5176\u4ED6\u5BF9\u8C61</strong></td><td><code>object</code></td></tr></tbody></table><blockquote><p>\u64CD\u4F5C\u7B26 <code>typeof</code> \u770B\u7740\u53EA\u80FD\u5C06**<em>\u539F\u59CB\u503C</em>(\u9664 Null)**\u7684\u7C7B\u578B\u8FD4\u56DE,\u5176\u4ED6\u7684\u6570\u636E\u7C7B\u578B\u90FD\u662F<code>object</code></p></blockquote><h2 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h2><blockquote><p>\u501F\u52A9<code>Object.prototype.toString.call(target)</code>\u6765\u68C0\u6D4B\u7C7B\u578B<br> \u8FD4\u56DE<code>[object type]</code>,\u5176\u4E2D <code>type</code> \u662F\u5BF9\u8C61\u7684\u7C7B\u578B<br><code>type</code> \u7C7B\u578B\u5305\u542B\u4E86\u66F4\u591A\u7684\u5185\u7F6E\u5BF9\u8C61(<code>Date</code>,<code>Math</code>,<code>Promise</code>\u7B49),\u7EC6\u5316\u4E86<code>object</code></p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// toString.call(Math); =&gt; [object Math]</span>
<span class="token keyword">const</span> toString <span class="token operator">=</span> Object<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>toString<span class="token punctuation">;</span>

<span class="token comment">// split \u5B57\u7B26\u4E32\u5206\u5272\u6210\u6570\u7EC4</span>
<span class="token comment">// toString.call(Math).split(&quot; &quot;)[1]; =&gt; [&quot;[object&quot;, &quot;Math]&quot;] =&gt; &quot;Math]&quot;</span>
<span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token function">toString</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>operand<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// substring \u5B57\u7B26\u4E32\u622A\u53D6</span>
<span class="token comment">// &quot;Math]&quot;.substring(1, &quot;Math]&quot;.length-1); =&gt; &quot;Math&quot;</span>
<span class="token comment">// toLowerCase \u5B57\u7B26\u4E32\u8F6C\u4E3A\u5C0F\u5199\u5F62\u5F0F</span>
<span class="token comment">// &quot;Math&quot;.toLowerCase(); =&gt; &quot;math&quot;</span>
type <span class="token operator">=</span> type<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> type<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),p=[o];function c(u,l){return s(),t("div",null,p)}var d=n(e,[["render",c],["__file","typeOf.html.vue"]]);export{d as default};
