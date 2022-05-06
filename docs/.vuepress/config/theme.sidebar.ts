/*
 * @Description: sidebar
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:24:15
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-06 01:47:08
 * @FilePath: \vuepress-docs\docs\.vuepress\config\theme.sidebar.ts
 */

import { SidebarConfig } from "vuepress";

interface ThemeSidebarConfig {
  [path: string]: SidebarConfig;
}

export const ThemeSidebar: ThemeSidebarConfig = {
  default: [],
};
