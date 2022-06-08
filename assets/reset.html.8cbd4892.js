import{_ as n,o as s,c as a,d as i}from"./app.4d101098.js";const e={},t=i(`<div class="custom-container tip"><p class="custom-container-title">\u4EC0\u4E48\u662F CSS reset?</p><p>\u4E0D\u540C\u6D4F\u89C8\u5668\u5BF9HTML\u6807\u7B7E\u90FD\u6709\u9ED8\u8BA4\u7684\u6837\u5F0F\u4E14\u5B58\u5728\u5DEE\u522B;<br> \u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F\u53EF\u80FD\u4F1A\u7ED9\u6211\u4EEC\u5E26\u6765\u5947\u8469\u7684\u5C55\u793A\u6548\u679C;<br> \u6240\u4EE5\u6211\u4EEC\u9700\u8981\u8986\u76D6\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F\u3002<br> \u4F46\u662F\u6211\u4EEC\u53C8\u4E0D\u80FD\u4E00\u5473\u7684\u4F7F\u7528 <code>* {/* style code*/}</code> \u5C06\u6D4F\u89C8\u5668\u7684\u9ED8\u8BA4\u6837\u5F0F\u5168\u90E8\u8986\u76D6, \u6211\u4EEC\u9700\u8981\u521B\u5EFA <code>CSS reset</code> \u7684 <code>css</code> \u6587\u4EF6\u9009\u62E9\u6027\u7684\u8986\u76D6\u9ED8\u8BA4\u6837\u5F0F\u3002</p></div><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>html<span class="token punctuation">,</span>
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

<span class="token comment">/* \u8BBE\u7F6E\u6EDA\u52A8\u6761\u7684\u6837\u5F0F */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6EDA\u52A8\u69FD */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 10px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/* \u6EDA\u52A8\u6761\u6ED1\u5757 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>220<span class="token punctuation">,</span> 4%<span class="token punctuation">,</span> 58%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">::-webkit-scrollbar-thumb:window-inactive</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">hsla</span><span class="token punctuation">(</span>220<span class="token punctuation">,</span> 4%<span class="token punctuation">,</span> 58%<span class="token punctuation">,</span> 0.3<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),l=[t];function p(c,u){return s(),a("div",null,l)}var d=n(e,[["render",p],["__file","reset.html.vue"]]);export{d as default};
