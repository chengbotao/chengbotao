/*
 * @Description: sidebar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-15 11:19:13
 * @FilePath: \vuepress-docs\docs\.vuepress\config\theme.sidebar.ts
 */

import { SidebarConfig } from "vuepress";

interface ThemeSidebarConfig {
  [path: string]: SidebarConfig;
}

export const ThemeSidebar: ThemeSidebarConfig = {
  default: {
    "/billows/": [
      {
        text: "curry-函数柯里化",
        link: "curry",
      },
      {
        text: "deepClone-深克隆",
        link: "deepClone",
      },
      {
        text: "flatToTree-扁平化结构转树形",
        link: "flatToTree",
      },
      {
        text: "getNodeFromTree-获取树结构节点",
        link: "getNodeFromTree",
      },
      {
        text: "getValueByReference-获取对象值",
        link: "getValueByReference",
      },
      {
        text: "instanceOf-手写instanceof",
        link: "instanceOf",
      },
      {
        text: "partial-偏函数",
        link: "partial",
      },
      {
        text: "setValueByReference-设置对象的值",
        link: "setValueByReference",
      },
      {
        text: "treeToFlat-树结构扁平化",
        link: "treeToFlat",
      },
      {
        text: "typeOf-手写typeof",
        link: "typeOf",
      },
    ],
    "/css/": [
      {
        text: "rest.css",
        link: "reset",
      },
      {
        text: "第一弹👍",
        link: "tips",
      },
    ]
  },
};
