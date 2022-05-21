/*
 * @Description: vuepress 配置文件
 * @Author: Chengbotao
 * @Date: 2022-05-05 22:25:26
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-21 21:39:12
 * @FilePath: \vuepress-docs\docs\.vuepress\config.ts
 */

import { defineUserConfig } from "vuepress";
import { SiteConfig, ThemeConfig } from "./config/index";
import { localTheme } from "./theme";
import markdownItLatex2img from "markdown-it-latex2img"

export default defineUserConfig({
  ...SiteConfig,
  theme: localTheme(ThemeConfig),
  extendsMarkdown: (md: any) => {
    md.use(markdownItLatex2img);
  },
});
