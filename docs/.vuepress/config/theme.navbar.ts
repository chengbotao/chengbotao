/*
 * @Author: Chengbotao
 * @Date: 2022-06-13 09:20:02
 */

import { NavbarConfig } from "vuepress";

interface ThemeNavbarConfig {
  [path: string]: NavbarConfig;
}

export const ThemeNavbar: ThemeNavbarConfig = {
  default: [
    {
      text: "外表美",
      children: [
        {
          text: "CSS",
          link: "/css/reset",
        },
        {
          text: "Vue3xy",
          link: "https://chengbotao.github.io/vue3xy",
        },
        {
          text: "Reactxy",
          link: "https://chengbotao.github.io/reactxy",
        },
      ],
    },
    {
      text: "内在善",
      children: [
        {
          text: "前端工具函数库",
          link: "/billows/",
        },
      ],
    },
    {
      text: "三省吾身",
      children: [
        {
          text: "心灵避风港",
          link: "/billows/",
        },
      ],
    },
  ],
};
