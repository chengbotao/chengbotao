import { navbar } from "vuepress-theme-hope";

export const Navbar = navbar([
  {
    text: "外表美",
    icon: "discover",
    children: [
      {
        text: "Vue3xy",
        link: "https://chengbotao.github.io/vue3xy",
      },
      {
        text: "Reactxy",
        link: "https://chengbotao.github.io/reactxy",
      },
    ]
  },
  {
    text: "内在善",
    icon: "edit",
    prefix: "/",
    children: [
    ],
  },
  {
    text: "三省吾身",
    icon: "note",
    link: "/chengbotao"
  },
]);
