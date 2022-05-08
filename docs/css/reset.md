:::tip 什么是 CSS reset?  
不同浏览器对HTML标签都有默认的样式且存在差别;    
浏览器的默认样式可能会给我们带来奇葩的展示效果;    
所以我们需要覆盖浏览器的默认样式。  
但是我们又不能一味的使用 `* {/* style code*/}` 将浏览器的默认样式全部覆盖,
我们需要创建 `CSS reset` 的 `css` 文件选择性的覆盖默认样式。
:::

```css
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
/* table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td, */
article,
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
video {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  outline: none;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

html,
body {
  height: 100%;
  width: 100%;
}

ol,
ul {
  /* list-style: none; */
}

a {
  text-decoration: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

/* table {
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
} */

input,
textarea {
  box-sizing: border-box;
}

code,
code * {
  font-family: 'Consolas', 'Courier New', monospace;
}

button::-moz-focus-inner {
  padding: 0;
  border: none;
}

input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner,
input[type="file"]>input[type="button"]::-moz-focus-inner {
  padding: 0;
  border: none;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  height: 6px;
  width: 6px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  cursor: pointer;
  border-radius: 3px;
  background-color: hsla(220, 4%, 58%, 0.3);
}
::-webkit-scrollbar-thumb:window-inactive {
  background-color: hsla(220, 4%, 58%, 0.3);
}

```

