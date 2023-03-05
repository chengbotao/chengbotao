/*
 * @Author: Chengbotao
 * @Date: 2023-02-28 23:13:58
 */
import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
    // 基础入门
    "/language/": [
        {
            text: "HTML",
            prefix: "html/",
            link: "/language/html/",
            collapsible: true,
            children: []
        },
        {
            text: "CSS",
            prefix: "css/",
            link: "/language/css/",
            collapsible: true,
            children: []
        },
        {
            text: "JavaScript",
            prefix: "javascript/",
            link: "/language/javascript/",
            collapsible: true,
            children: []
        },
        {
            text: "TypeScript",
            prefix: "typescript/",
            link: "/language/typescript/",
            collapsible: true,
            children: [
                {
                    text: "工具函数",
                    prefix: "utils/",
                    link: "/language/typescript/utils/",
                    children: [
                        {
                            text: "curry<函数柯里化>",
                            link: "curry"
                        },
                        {
                            text: "partial<偏函数>",
                            link: "partial"
                        },
                        {
                            text: "deepClone<深克隆>",
                            link: "deepClone"
                        },
                        {
                            text: "flatToTree<扁平化数据结构树形>",
                            link: "flatToTree"
                        },
                        {
                            text: "treeToFlat<树形数据结构扁平化>",
                            link: "treeToFlat"
                        },
                        {
                            text: "setValueByReference<根据对象的引用设置值>",
                            link: "setValueByReference"
                        },
                        {
                            text: "getValueByReference<根据对象的引用获取值>",
                            link: "getValueByReference"
                        },
                        {
                            text: "typeOf<操作数的类型>",
                            link: "typeOf"
                        },
                        {
                            text: "instanceOf<检测构造函数>",
                            link: "instanceOf"
                        },
                        {
                            text: "getNodeFromTree<根据标志获取树形中的节点>",
                            link: "getNodeFromTree"
                        },
                        {
                            text: "debounce<防抖>",
                            link: "debounce"
                        },
                        {
                            text: "throttle<节流>",
                            link: "throttle"
                        },
                        {
                            text: "buildURL<构建URL>",
                            link: "buildURL"
                        },
                        {
                            text: "parseURL<解析URL>",
                            link: "parseURL"
                        },
                        {
                            text: "encodeURIC<URI 针对特殊字符编码处理>",
                            link: "encodeURIC"
                        },
                        {
                            text: "jsonp<Promise版jsonp>",
                            link: "jsonp"
                        },
                        {
                            text: "isxxx<判断结果>",
                            link: "isxxx"
                        },
                        {
                            text: "代码集合",
                            link: "codeCollection"
                        },
                    ]
                },
            ]
        }
    ],
    // 框架类
    "/code/": [],
    // 构建工具
    "/tools/": [],
    // 点滴记录
    "/note/": [
        {
            text: "copywriter",
            prefix: "copywriter/",
            link: "/note/copywriter/",
            collapsible: true,
            children: [
                {
                    text: "碎碎念 0️⃣",
                    link: "0"
                },
                {
                    text: "碎碎念 1️⃣",
                    link: "1"
                },
                {
                    text: "碎碎念 3️⃣",
                    link: "2"
                },
            ]
        },
    ],
});