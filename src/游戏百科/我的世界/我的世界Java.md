---
title: 我的世界Java
author: 又菜有爱玩的小朱
---

::: info 说明
在线部署已包含在内，赞助者可以直接使用在线部署。
:::

<AutoCatalog />

## 安装Java（游戏容器可忽略）

### Windows 安装 Java

1. 访问 [Oracle Java 下载页面](https://www.oracle.com/java/technologies/downloads/)
2. 选择 Windows x64 Installer 下载
3. 运行下载的安装包
4. 按照安装向导完成安装
5. 打开命令提示符，输入 `java -version` 验证安装

::: tip
推荐安装 Java 24 版本，兼容所有版本
:::

### Linux 安装 Java

在 Linux 上安装 Java 通常可以通过包管理器进行，具体取决于您使用的 Linux 发行版。

#### Debian/Ubuntu (使用 APT)

1.  **更新包列表**:
    ```bash
    sudo apt update
    ```
2.  **安装 OpenJDK (推荐)**:
    ```bash
    sudo apt install openjdk-21-jre
    ```
3.  **验证安装**:
    ```bash
    java -version
    ```

#### CentOS/RHEL (使用 YUM/DNF)

1.  **安装 OpenJDK (推荐)**:
    ```bash
    sudo yum install java-21-openjdk
    # 或者使用 dnf: sudo dnf install java-21-openjdk
    ```
2.  **验证安装**:
    ```bash
    java -version
    ```

## [访问服务端官网](https://www.minecraft.net/zh-hans/download/server)

1. 上传文件到文件管理中：
   - Windows 可在任意目录创建服务端文件夹
   - Linux 容器需放在 `/root` 目录，并以 root 用户运行服务端
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/k6i5yo.png)
2. 创建实例
   - 选择复制绝对路径
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jvsg2p.png)
   - 启动命令：`java -jar server.jar nogui`
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/k89uaw.png)
3. 启动实例
   ![](https://images.xiaozhuhouses.asia:3000/i/2025/07/25/jybtie.png)

::: warning 注意
如需公网访问，需要开放/映射 25565 TCP 端口。
:::