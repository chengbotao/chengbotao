/*
 * @Author: Chengbotao
 * @Date: 2022-06-02 11:37:14
 */

import { defineUserConfig } from "vuepress-vite";
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
