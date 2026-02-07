import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "部署",
    icon: "fa-download",
    prefix: "/部署/",
    children: ["Windows","Linux","Docker"]
  },
  {
    text: "功能详解",
    icon: "fa-book",
    link: "/功能详解/",
  },
  {
    text: "使用技巧",
    icon: "fa-lightbulb",
    link: "/使用技巧/",
  },
  {
    text: "游戏百科",
    icon: "fa-gamepad",
    prefix: "/游戏百科/",
    children: ["Steam/","我的世界/","游戏参数/"]
  },
  {
    text: "开发文档",
    icon: "fa-wrench",
    link: "/开发文档/",
  },
  {
    text: "服务状态",
    icon: "fa-wrench",
    link: "http://status.xiaozhuhouses.asia/status/game",
  },
  {
    text: "开服包云构建",
    icon: "fa-cloud",
    link: "https://download.mc.xiaozhuhouses.asia:4433",
  },
]);
