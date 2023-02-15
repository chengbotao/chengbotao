import{_ as n,p as s,q as a,a1 as i}from"./framework-204010b2.js";const e={},t=i(`<div class="custom-container tip"><p class="custom-container-title">什么是 CSS reset?</p><p>不同浏览器对HTML标签都有默认的样式且存在差别;<br> 浏览器的默认样式可能会给我们带来奇葩的展示效果;<br> 所以我们需要覆盖浏览器的默认样式。<br> 但是我们又不能一味的使用 <code>* {/* style code*/}</code> 将浏览器的默认样式全部覆盖, 我们需要创建 <code>CSS reset</code> 的 <code>css</code> 文件选择性的覆盖默认样式。</p></div><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>html<span class="token punctuation">,</span>
body<span class="token punctuation">,</span>
div<span class="token punctuation">,</span>
span<span class="token punctuation">,</span>
applet<span class="token punctuation">,</span>
object<span class="token punctuation">,</span>
iframe<span class="token punctuation">,</span>
h1<span class="token punctuation">,</span>
h2<span class="token punctuation">,</span>
h3<span class="token punctuation">,</span>
h4<span class="token punctuation">,</span>
h5<span class="token punctuation">,</span>
h6<span class="token punctuation">,</span>
p<span class="token punctuation">,</span>
blockquote<span class="token punctuation">,</span>
pre<span class="token punctuation">,</span>
a<span class="token punctuation">,</span>
abbr<span class="token punctuation">,</span>
acronym<span class="token punctuation">,</span>
address<span class="token punctuation">,</span>
big<span class="token punctuation">,</span>
cite<span class="token punctuation">,</span>
code<span class="token punctuation">,</span>
del<span class="token punctuation">,</span>
dfn<span class="token punctuation">,</span>
em<span class="token punctuation">,</span>
img<span class="token punctuation">,</span>
ins<span class="token punctuation">,</span>
kbd<span class="token punctuation">,</span>
q<span class="token punctuation">,</span>
s<span class="token punctuation">,</span>
samp<span class="token punctuation">,</span>
small<span class="token punctuation">,</span>
strike<span class="token punctuation">,</span>
strong<span class="token punctuation">,</span>
sub<span class="token punctuation">,</span>
sup<span class="token punctuation">,</span>
tt<span class="token punctuation">,</span>
var<span class="token punctuation">,</span>
b<span class="token punctuation">,</span>
u<span class="token punctuation">,</span>
i<span class="token punctuation">,</span>
center<span class="token punctuation">,</span>
dl<span class="token punctuation">,</span>
dt<span class="token punctuation">,</span>
dd<span class="token punctuation">,</span>
ol<span class="token punctuation">,</span>
ul<span class="token punctuation">,</span>
li<span class="token punctuation">,</span>
fieldset<span class="token punctuation">,</span>
form<span class="token punctuation">,</span>
label<span class="token punctuation">,</span>
legend<span class="token punctuation">,</span>
<span class="token comment">/* table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td, */</span>
<span class="token selector">article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
button,
video</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token property">outline</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">body</span> <span class="token punctuation">{</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">html,
body</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">ol,
ul</span> <span class="token punctuation">{</span>
  <span class="token comment">/* list-style: none; */</span>
<span class="token punctuation">}</span>

<span class="token selector">a</span> <span class="token punctuation">{</span>
  <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote,
q</span> <span class="token punctuation">{</span>
  <span class="token property">quotes</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">blockquote:before,
blockquote:after,
q:before,
q:after</span> <span class="token punctuation">{</span>
  <span class="token property">content</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token property">content</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #F00
}
table th,
table tr,
table td {
  border: 1px solid #F00
}
table tr:nth-child(2n) {
  background: #666666;
} */</span>

<span class="token selector">input,
textarea</span> <span class="token punctuation">{</span>
  <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">code,
code *</span> <span class="token punctuation">{</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&#39;Consolas&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Courier New&#39;</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">button::-moz-focus-inner</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">input[type=&quot;reset&quot;]::-moz-focus-inner,
input[type=&quot;button&quot;]::-moz-focus-inner,
input[type=&quot;submit&quot;]::-moz-focus-inner,
input[type=&quot;file&quot;]&gt;input[type=&quot;button&quot;]::-moz-focus-inner</span> <span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* 设置滚动条的样式 */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动槽 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* 滚动条滑块 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>220<span class="token punctuation">,</span> 4%<span class="token punctuation">,</span> 58%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:window-inactive</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>220<span class="token punctuation">,</span> 4%<span class="token punctuation">,</span> 58%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function p(c,u){return s(),a("div",null,l)}const d=n(e,[["render",p],["__file","reset.html.vue"]]);export{d as default};
