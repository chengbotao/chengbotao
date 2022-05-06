/*
 * @Description: vuepress 配置文件
 * @Author: Chengbotao
 * @Date: 2022-05-05 22:25:26
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-06 01:54:40
 * @FilePath: \vuepress-docs\docs\.vuepress\config.ts
 */

import { defineUserConfig } from "vuepress";
import { SiteConfig, ThemeConfig } from "./config/index";
import { localTheme } from './theme'

export default defineUserConfig({
  ...SiteConfig,
  theme: localTheme(ThemeConfig),
});
