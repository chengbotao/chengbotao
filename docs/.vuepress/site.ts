/*
 * @Author: Chengbotao
 * @Date: 2023-02-28 23:18:04
 */
import { UserConfig } from "vuepress";

export const SiteConfig: UserConfig = {
    // 站点顶层配置
    base: "/chengbotao/",
    head: [
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:title", content: "Botaoxy" }],
        ["meta", { property: "og:description", content: "寻找，自己生活态度！️✌️ 拒绝标签，追求自我！👍 学习，摄影绘画理财！🤜 一切尽意，万事从欢！🤟" }],
        ["meta", { property: "og:image", content: "https://chengbotao.github.io/chengbotao/chengbotao.png" }],
        ["meta", { property: "og:url", content: "https://chengbotao.github.io/chengbotao" }]
    ],
    lang: "zh-CN",
    title: "Botaoxy",
    description: "Chengbotao's WebSite!!!"
};