<!--
 * @Author: Chengbotao
 * @Date: 2022-06-02 16:30:32
-->

## CSS 小技巧

### 继承 `box-sizing`

> 盒模型&怪异盒模型  
> 在根据设计图开发页面时我们大多不希望 `border` 和 `padding` 会修改元素的 `width`,`height` 值,我们就可以为该元素设置 `box-sizing:border-box;`  
> 我们不想每个元素都写,那就可以通过继承来实现,继承 `html` 的好处是它不会覆盖其他组件的 `box-sizing` 值

```css
/** html 设置 box-sizing*/
html {
  box-sizing: border-box;
}

/** 使用通配符来继承 */
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

### 继承 `line-height`

> `<p>、<h*>` 文本元素从 `body` 继承该属性

```css
body {
  line-height: 1;
}
```

### 滚动条样式

```css
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

### 文本两端对齐

```css
p {
  width: 50px;
  border: 1px solid red;
  text-align: justify;
  text-align-last: justify;
}
```

> **效果 demo**
>
> <p style="border: 1px solid red; width:100px; text-align: justify;text-align-last: justify;">名字</p>
> <p style="border: 1px solid red; width:100px; text-align: justify;text-align-last: justify;">程波涛程波涛</p>
> <p style="border: 1px solid red; width:100px; text-align: justify;text-align-last: justify;">你来自哪里</p>

### 分割列表

```css
ul > li:not(:last-child)::after {
  content: "/";
}
```

<style scoped>
    ul li {
        float: left;
        list-style: none;
    }
    ul > li:not(:last-child)::after {
        content: "/";
        padding: 0 5px;
    } 
</style>

> 效果 demo
>
> <ul><li>姓名</li><li>年龄</li><li>性别</li></ul>
