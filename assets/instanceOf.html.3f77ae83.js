import{_ as n,o as s,c as a,e as t}from"./app.f8904dd1.js";const e={},o=t(`<h2 id="instanceof" tabindex="-1"><a class="header-anchor" href="#instanceof" aria-hidden="true">#</a> instanceOf</h2><blockquote><p><strong>\u8BF4\u660E:</strong> <em>\u68C0\u6D4B\u6784\u9020\u51FD\u6570\u7684 <code>prototype</code> \u5C5E\u6027\u662F\u5426\u51FA\u73B0\u5728\u67D0\u4E2A\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A</em><br><strong>\u8FD4\u56DE:</strong> <em><code>{ boolean }</code></em></p></blockquote><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u53C2\u6570\u7C7B\u578B</th><th>\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td><code>target</code></td><td><code>any</code></td><td>\u68C0\u6D4B\u7684\u6784\u9020\u51FD\u6570</td></tr><tr><td><code>ctor</code></td><td><code>any</code></td><td>\u5B9E\u4F8B\u5BF9\u8C61</td></tr></tbody></table><h3 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// npm install billows</span>
<span class="token comment">// import { instanceOf } from &#39;billows&#39;;</span>

<span class="token keyword">function</span> <span class="token function">Car</span><span class="token punctuation">(</span>make<span class="token punctuation">,</span> model<span class="token punctuation">,</span> year<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>make <span class="token operator">=</span> make<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>model <span class="token operator">=</span> model<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>year <span class="token operator">=</span> year<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> auto <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Car</span><span class="token punctuation">(</span><span class="token string">&quot;Honda&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Accord&quot;</span><span class="token punctuation">,</span> <span class="token number">1998</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">instanceOf</span><span class="token punctuation">(</span>auto<span class="token punctuation">,</span> Car<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
<span class="token function">instanceOf</span><span class="token punctuation">(</span>auto<span class="token punctuation">,</span> Object<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0" aria-hidden="true">#</a> \u5B9E\u73B0</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">instanceOf</span><span class="token punctuation">(</span>target<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> ctor<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> proto <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> ctor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    proto <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u89E3\u6790" tabindex="-1"><a class="header-anchor" href="#\u89E3\u6790" aria-hidden="true">#</a> \u89E3\u6790</h3><blockquote><p>\u501F\u52A9<code>Reflect.getPrototypeOf()</code> \u6216 <code>Object.getPrototypeOf()</code>, \u83B7\u53D6\u6307\u5B9A\u5BF9\u8C61\u7684\u539F\u578B(<code>Prototype</code>\u5C5E\u6027\u7684\u503C)</p></blockquote><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">let</span> proto <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u6BCF\u4E2A\u5B9E\u4F8B\u5BF9\u8C61(object)\u90FD\u6709\u4E00\u4E2A\u79C1\u6709\u5C5E\u6027(\u79F0\u4E4B\u4E3A __proto__ )\u6307\u5411\u5B83\u7684\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61(prototype)</span>
<span class="token comment">// \u8BE5\u539F\u578B\u5BF9\u8C61\u4E5F\u6709\u4E00\u4E2A\u81EA\u5DF1\u7684\u539F\u578B\u5BF9\u8C61(__proto__),\u5C42\u5C42\u5411\u4E0A\u76F4\u5230\u4E00\u4E2A\u5BF9\u8C61\u7684\u539F\u578B\u5BF9\u8C61\u4E3A null</span>

<span class="token comment">// \u539F\u578B\u94FE: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Inheritance_and_the_prototype_chain</span>

<span class="token comment">// \u56E0\u4E3A\u8981\u5728\u539F\u578B\u94FE\u4E0A\u67E5\u627E \u4F7F\u7528\u5FAA\u73AF\u6765\u5904\u7406,\u539F\u578B\u94FE\u5C3D\u5934\u662F null \u4E5F\u4E0D\u4F1A\u9020\u6210\u6B7B\u5FAA\u73AF</span>
<span class="token keyword">while</span> <span class="token punctuation">(</span>proto<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5982\u679C\u6784\u9020\u51FD\u6570 prototype \u7B49\u4E8E \u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B \u5219\u8FD4\u56DE true</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> ctor<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  proto <span class="token operator">=</span> Reflect<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>proto<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),p=[o];function c(l,i){return s(),a("div",null,p)}var r=n(e,[["render",c],["__file","instanceOf.html.vue"]]);export{r as default};
