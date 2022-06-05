/*
 * @Description: navbar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-05 19:24:14
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
          text: "TypeScript",
          link: "/typeScript/ts",
        },
        {
          text: "CSS",
          link: "/css/reset",
        },
        {
          text: "CSS",
          link: "/css/tips",
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
          text: "单元测试",
          link: "/tools/test",
        },
        {
          text: "chengbt-工具函数",
          link: "/tools/chengbt/is_xxx",
        },
        {
          text: "chengbt-工具函数",
          link: "/tools/chengbt/utils",
        },
        {
          text: "chengbt-计算机概述",
          link: "/tools/chengbt/computer",
        },
        {
          text: "Linux",
          link: "/tools/linux/command",
        },
        {
          text: "Webpack",
          link: "/tools/webpack/learn",
        },
        {
          text: "实战项目",
          link: "/hands-on/billows",
        },
      ],
    },
  ],
};
