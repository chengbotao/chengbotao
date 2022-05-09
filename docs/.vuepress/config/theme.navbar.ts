/*
 * @Description: navbar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:29
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-09 21:14:04
 * @FilePath: \vuepress-docs\docs\.vuepress\config\theme.navbar.ts
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
          text: "Vue",
          link: "//",
        },
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
          text: "Vue",
          link: "//",
        },
      ],
    },
    {
      text: "三省吾身",
      children: [
        {
          text: "单元测试",
          link: "/tools/test",
        },
      ],
    },
  ],
};
