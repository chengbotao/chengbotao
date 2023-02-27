/*
 * @Description: 文件描述
 * @Author: Chengbotao
 * @Date: 2022-05-05 23:31:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-02-27 15:35:21
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
  head: [
    ["link", { rel: "icon", href: `chengbotao/chengbotao.ico` }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:title", content: "Botaoxy" }],
    ["meta", { property: "og:description", content: "一切尽意,万事从换！！！" }],
    ["meta", { property: "og:image", content: "https://chengbotao.github.io/chengbotao/chengbotao.png" }],
    ["meta", { property: "og:url", content: "https://chengbotao.github.io/chengbotao" }]
  ],
  lang: "zh-CN",
  title: "Botaoxy",
  description: "Chengbotao's WebSite!!!"
};
