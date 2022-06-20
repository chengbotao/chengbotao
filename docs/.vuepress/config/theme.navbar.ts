/*
 * @Description: navbar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-20 12:59:22
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
          link: "/css/",
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
          text: "Billows 工具函数库",
          link: "/billows/",
        },
      ],
    },
  ],
};
