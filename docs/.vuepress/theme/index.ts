/*
 * @Description: 继承默认主题
 * @Author: Chengbotao
 * @Date: 2022-05-06 01:52:14
 * @LastEditors: Chengbotao
 * @LastEditTime: 2022-05-06 01:53:27
 * @FilePath: \vuepress-docs\docs\.vuepress\theme\index.ts
 */
import type { Theme } from "@vuepress/core";
import { defaultTheme } from "@vuepress/theme-default";
import type { DefaultThemeOptions } from "@vuepress/theme-default";
import { path } from "@vuepress/utils";

export const localTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: "vuepress-theme-local",
    extends: defaultTheme(options),
    layouts: {
      404: path.resolve(__dirname, "layouts/404.vue"),
    },
  };
};
