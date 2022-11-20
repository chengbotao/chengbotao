/*
 * @Description: 文件描述
 * @Author: Chengbotao
 * @Date: 2022-05-05 23:31:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-20 23:12:48
 * @FilePath: \vuepress-docs\docs\.vuepress\config\site.ts
 */
import { SiteLocaleConfig, UserConfig } from "vuepress";

// 多语言支持
// const locales: SiteLocaleConfig = {
//   "/": {
//     lang: "zh-CN",
//     title: "程波涛",
//     description: "程波涛的博客!!!",
//     // head: [],
//   },
//   "/en/": {
//     lang: "en-US",
//     title: "chengbotao",
//     description: "Chengbotao's WebSite!!!",
//     // head: [],
//   },
// };

export const SiteConfig: UserConfig = {
  // locales,
  // 站点顶层配置
  base: "/chengbotao/",
  head: [["link", { rel: "icon", href: "/chengbotao/chengbotao.ico" }]],
  lang: "zh-CN",
  title: "Botaoxy",
  description: "Chengbotao's WebSite!!!"
};
