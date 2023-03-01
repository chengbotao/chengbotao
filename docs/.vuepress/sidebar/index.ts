/*
 * @Author: Chengbotao
 * @Date: 2023-02-28 23:13:58
 */
import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
    "/html/": [],
    "/css/": [],
    "/javascript/": [],
    "/typescript/": [
        {
            text: "工具函数",
            prefix: "utils/",
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
            ]
        },

    ],
    "/tools/": [],
});