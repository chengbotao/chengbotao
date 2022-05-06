<!--
 * @Description: 404
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:53:06
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-06 22:07:33
 * @FilePath: \vuepress-docs\docs\.vuepress\theme\layouts\404.vue
-->
<template>
  <section class="theme-container">
    <h1 class="fzf-text">404</h1>
    <blockquote class="msg-text">{{ getMsg() }}</blockquote>
    <router-link tag="div" to="/" class="btn">
      <span class="btn-text">我心里</span>
    </router-link>
  </section>
</template>

<script setup lang="ts">

const getMsg = () => {
  return "chengbotao"
}

</script>

<style lang="scss" scoped>
.theme-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  overflow: hidden;

  .fzf-text {
    font-weight: 700;
    margin: 200px auto 100px;
    background: repeating-linear-gradient(45deg,
        yellow 0px,
        yellow 5px,
        black 5px,
        black 10px);
    color: transparent;
    background-clip: text;
    transform: scale(5);
  }

  .msg-text {
    background: linear-gradient(90deg, #66c2ff, #ffcccc, #ffeee6);
    color: transparent;
    background-clip: text;
  }

  .btn {
    position: relative;
    margin: 50px auto;
    background-color: pink;
    height: 50px;
    width: 50px;
    transform: rotate(-45deg);
    animation-name: beat;
    animation-duration: 1s;
    animation-iteration-count: infinite;

    &:hover {
      cursor: pointer;
    }

    &:after {
      background-color: pink;
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 50px;
      height: 50px;
      top: 0px;
      left: 25px;
    }

    &:before {
      background-color: pink;
      content: '';
      border-radius: 50%;
      position: absolute;
      width: 50px;
      height: 50px;
      top: -25px;
      left: 0px;
    }

    &>.btn-text {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      transform: rotate(45deg) scale(0.8);
    }
  }
}

@keyframes beat {
  0% {
    transform: scale(1) rotate(-45deg);
  }

  50% {
    transform: scale(0.6) rotate(-45deg);
  }
}
</style>