/*
 * @Author: Chengbotao
 * @Date: 2023-02-28 23:13:58
 */
import { defineUserConfig } from "vuepress";
import {SiteConfig} from "./site"
import theme from "./theme";

export default defineUserConfig({
  // site config
  ...SiteConfig,

  // Hope config
  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
