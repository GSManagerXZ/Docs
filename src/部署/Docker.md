---
title: Docker部署
icon: fab fa-docker
order: 4
---

::: tip 提示
GSManager3中采用的仍然是游戏容器，拥有绝大部分的游戏运行库，所有游戏都跑在容器中，需要对Docker需要具备基础知识。建议搭配[1panel](https://1panel.cn/)面板进行使用
:::

<AutoCatalog />

## 拉取镜像

1. 在线拉取
    ```bash
    docker pull xiaozhu674/gameservermanager:latest
    ```

## 创建 docker-compose.yml
准备一个目录，在该目录下创建文件 `docker-compose.yml`

```yml
volumes:
  gsm3_data:
    driver: local

services:
  management_panel:
    build: .
    container_name: GSManager3
    image: xiaozhu674/gameservermanager:latest
    user: root                       
    ports:
      # GSM3管理面板端口
      - "3001:3001" 
      # 游戏端口，按需映射
      - "27015:27015"
    volumes:
    #steam用户数据目录 不建议修改
      - ./game_data:/home/.config 
      - ./game_data:/home/.local
      - ./game_file:/home/steam/games
    #root用户数据目录 不建议修改
      - ./game_data:/root/.config 
      - ./game_data:/root/.local   
      - ./game_file:/root/steam/games 
    #面板数据，请勿改动
      - gsm3_data:/root/server/data 
    environment:
      - TZ=Asia/Shanghai              # 设置时区
      - SERVER_PORT=3001              # GSM3服务端口
    stdin_open: true                  # 保持STDIN打开
    tty: true                         # 分配TTY
    restart: unless-stopped           # 自动重启策略
    
    # 如果需要，取消注释下面的行来限制资源
    # deploy:
    #   resources:
    #     limits:
    #       cpus: '4.0'
    #       memory: 8G
    #     reservations:
    #       cpus: '2.0'
    #       memory: 4G
```

::: info 镜像说明
`image`为镜像名称，需要根据实际下载的镜像名称修改，末尾冒号的右边为版本号，不知道可以使用latest，如果需要进行版本更新建议使用版本号，详情可以从[Github Release](https://github.com/GSManagerXZ/GameServerManager/releases)获取最新版本号。
:::

## 创建容器
在 `docker-compose.yml` 文件目录下执行：

```bash
docker compose up -d
```

## 🌐 访问面板

在浏览器输入：`面板所在IP:3001`（默认端口为 3001）即可访问。

## 更新
在 docker-compose.yml 目录下载执行
```bash
docker-compose up -d --pull always
```

## 常见问题

::: details 无法拉取镜像
若您使用设备在中国大陆，dockerhub默认仓库受网络封锁属于正常情况，目前观察到1panel镜像源将本项目进行了缓存，实测可以以较快速度拉取，[了解详情](https://1panel.cn/docs/v2/user_manual/containers/setting/#1)
:::

::: details 无法连接到游戏服务端或不想映射端口
若您对游戏端口不太清楚，可以将容器网络模式改为host，这样容器中的游戏服务端端口就会映射到宿主机上，直接用宿主机 IP 加游戏端口即可连接。
:::