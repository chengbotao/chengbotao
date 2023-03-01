import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index";
import { Sidebar } from "./sidebar/index";

export default hopeTheme({
  hostname: "https://chengbotao.github.io",

  author: {
    name: "ChengBotao",
    url: "https://chengbotao.github.io/chengbotao",
    email: "chengbotao5221@163.com",
  },

  iconAssets: "iconfont",

  logo: "/chengbotao.png",

  favicon: "favicon.ico",

  // repo: "https://github.com/chengbotao",

  docsDir: "docs",

  blog: {
    description: "🍀拒绝标签,追求自我🆙",
    // intro: "/zh/intro.html",
    medias: {
      GitHub: "https://github.com/chengbotao",
      BiliBili: "https://b23.tv/sGCZXZW",
      Weibo: "https://weibo.com/u/5324411691",
      Gitee: "https://gitee.com/chengbotao",
    },
  },

  // navbar
  navbar: Navbar,

  // sidebar
  sidebar: Sidebar,

  footer: "🍀拒绝标签,追求自我🆙",

  displayFooter: true,

  // page meta
  metaLocales: {
    // editLink: "在 GitHub 上编辑此页",
  },

  encrypt: {
    config: {
    },
  },

  plugins: {
    blog: true,

    comment: false,
    // comment: {
    //   // @ts-expect-error: You should generate and use your own comment service
    //   provider: "Giscus",
    // },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
