/*
 * @Description: navbar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-15 11:19:44
 * @FilePath: \chengbotao\docs\.vuepress\config\theme.navbar.ts
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
      ],
    },
    {
      text: "内在善",
      children: [
        {
          text: "Python",
          link: "/python/",
        },
      ],
    },
    {
      text: "三省吾身",
      children: [
        {
          text: "前端工具函数库",
          link: "/billows/",
        },
      ],
    },
  ],
};
