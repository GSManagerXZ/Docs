---
title: Windows部署
icon: fab fa-windows
order: 2
---

::: tip 温馨提示
本教程适用于 Windows 系统下部署 GSManager 面板，建议优先使用国内下载源，安装过程如遇问题可前往常见问题页面查阅。
:::

## 🚀 一、下载文件

下载 GSManager：
  - [国内下载源](http://langlangy.server.xiaozhuhouses.asia:8082/disk1/GSM3/gsm3-management-panel-windows.zip)
  - [GitHub](https://github.com/GSManagerXZ/GameServerManager/releases/latest)

## 📤 二、上传与解压文件

1. 解压 GSManager 面板压缩包至任意目录
2. 双击 `start.bat` 启动面板

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。

## ⚙️ 如何修改端口

[点击这里创建配置文件](./面板配置文件.md)
编辑 `server/.env` 文件中的端口号，保存后重启面板即可生效。

## 🚫 无法访问面板？

::: warning 防火墙设置
Windows 默认开启防火墙，需要进行以下配置：

1. 打开 Windows Defender 防火墙设置
2. 允许面板程序通过防火墙
3. 或临时关闭防火墙（不推荐）

![Windows防火墙设置](https://images.xiaozhuhouses.asia:3000/i/2025/07/20/u6apvm.png)
:::

::: tip 特殊环境配置
- 云服务器：
  - 确保已在安全组中开放面板端口(TCP协议)
  - 检查服务商防火墙设置

- NAT转发服务器：
  - 内网端口需设置为面板端口
  - 使用外部映射端口进行访问
:::
