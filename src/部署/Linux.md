---
title: Linux部署
icon: fab fa-linux
order: 3
---

::: tip 推荐系统
建议优先选择 Ubuntu 22，兼容性最佳。
:::

## 一键安装脚本(推荐)

```bash
curl -Lo install-gsm3.sh https://download.xiaozhuhouses.asia/开源项目/GSManager/GSManager3/install-gsm3.sh && sudo bash install-gsm3.sh
```

## 手动安装
### 🧰 一、安装后台管理工具

推荐使用 `screen`，方便面板后台运行。

- CentOS 安装：
  ```bash
  yum install screen -y
  ```
- Ubuntu 安装：
  ```bash
  apt install screen -y
  ```

### 📦 二、下载与解压面板文件

1. 下载面板压缩包：
   ```bash
   wget https://github.com/GSManagerXZ/GameServerManager/releases/latest/download/gsm3-management-panel-linux.tar.gz
   ```
2. 解压文件：
   ```bash
   tar -zxvf gsm3-management-panel-linux.tar.gz
   ```

### ⚙️ 三、运行面板

1. 启动 screen 后台服务（如未创建可省略）：
   ```bash
   screen -r gsmanager
   ```
2. 赋予启动脚本权限：
   ```bash
   chmod +x start.sh
   chmod +x node/bin/node
   ```
3. 启动面板：
   ```bash
   ./start.sh
   ```
4. 挂入后台：
   使用快捷键 `Ctrl+A` 后松开，再按 `D`

::: warning 注意
如遇权限或依赖问题，建议以 root 用户或 sudo 权限执行相关命令。
:::

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。

## 更新面板

1. 删除 `public` 文件夹
2. 删除 `server` 文件夹 可以保留 `.env` `data`
3. 解压新的面板文件到原来目录即可 

## ⚙️ 如何修改端口

[点击这里创建配置文件](./面板配置文件.md)
编辑 `.env` 文件中的端口号，保存后重启面板即可生效。

::: details 进阶说明
如需自定义更多参数，请参考配置文件注释或查阅官方文档。
:::