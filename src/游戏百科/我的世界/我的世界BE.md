---
title: 我的世界BE
author: 又菜有爱玩的小朱
---

::: info 说明
在线部署已包含在内，赞助者可以直接使用在线部署。
:::

<AutoCatalog />

BE 代表基岩版，Linux 和 Windows 开服完全一样：
- Windows 需安装 [VC_redist](http://langlangy.server.xiaozhuhouses.asia:8081/#s/_yfcruRQ)
- Linux 需安装 GCC 9.0 或更高版本（游戏容器已包含）

## [访问服务端官网](https://www.minecraft.net/zh-hans/download/server/bedrock)

1. 下载对应平台安装包
2. 文件管理中：
   - Windows 可在任意目录创建服务端文件夹
   - Linux 容器需放在 `/root` 目录，并以 root 用户运行服务端
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/j6ad30.png)
3. 解压
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/juny6w.png)
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jv5e3e.png)
4. 创建实例
   - 选择复制绝对路径
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jvsg2p.png)
   - 启动命令：
     - Windows：`.\bedrock_server.exe`
     - Linux：`./bedrock_server`
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jx1ilq.png)
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jy5cj2.png)
5. 启动实例
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jybtie.png)
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jyomt3.png)

## 开放端口
::: warning 注意
需要开放/映射 19132 UDP 端口，否则外部无法连接服务器。
:::
