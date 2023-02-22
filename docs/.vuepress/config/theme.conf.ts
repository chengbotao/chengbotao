/*
 * @Description: 默认主题的配置
 * @Author: Chengbotao
 * @Date: 2022-05-06 00:54:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-22 17:27:41
 * @FilePath: \vuepress-docs\docs\.vuepress\config\theme.conf.ts
 */
import {
  DefaultThemeOptions,
  LocaleConfig,
  DefaultThemeLocaleData,
} from "vuepress";

import { ThemeNavbar } from "./theme.navbar";
import { ThemeSidebar } from "./theme.sidebar";

// const locales: LocaleConfig<DefaultThemeLocaleData> = {
//   "/": {
//     selectLanguageText: "选择语言",
//     selectLanguageName: "简体中文",
//     editLinkText: "编辑此页",
//     lastUpdatedText: "更新于",
//     contributorsText: "贡献者",
//     notFound: [
//       "这里什么都没有。",
//       "我是谁?我在哪?",
//       "这是一个Four-Oh-Four.",
//       "看来我们的链接坏掉了~",
//     ],
//     navbar: ThemeNavbar.default,
//     sidebar: ThemeSidebar.default,
//   },
//   "/en/": {
//     selectLanguageName: "English",
//     notFound: ["Not Found"],
//   },
// };

const defaultThemeConfig: DefaultThemeOptions = {
  home: "/",
  logo: "/chengbotao.jpg",
  colorModeSwitch: false,
  // logoDark: "/chengbotao.jpg",
  repo: "https://github.com/chengbotao",
  repoLabel: "GitHub",
  editLink: false,
  // editLinkText: "编辑此页",
  lastUpdatedText: "更新于",
  contributorsText: "贡献者",
  notFound: [
    "这里什么都没有。",
    "我是谁?我在哪?",
    "这是一个Four-Oh-Four.",
    "看来我们的链接坏掉了~",
  ],
  navbar: ThemeNavbar.default,
  sidebar: ThemeSidebar.default,
};

export const ThemeConfig: DefaultThemeOptions = {
  // locales,
  ...defaultThemeConfig,
};
