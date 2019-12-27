# 针对 IOS 系统的解决方案

本项目默认只提供了 Android 系统的应用程序包，在没有资金支持的情况下，本项目只能提供 IOS 应用程序的打包方案，无法直接提供打包好的应用程序

IOS 系统的应用程序在不能上架的情况下，只能使用开发者证书对应用程序进行签名，而开发者证书申请时需要输入设备的 UUID，故只能自己打包生成 ipa 文件给自己用，下面是利用本项目构建 IOS 应用程序的方法

## 方案一 本地构建此项目（推荐，需要 XCode 开发环境）

### 步骤

1. 克隆本项目到本地并构建 XCode 工程

    ```bash
    # 全局安装 cordova-cli
    npm i -g cordova
    # 克隆本项目到本地
    git clone https://github.com/CS-Tao/whu-library-seat-mobile.git
    # 构建项目
    cd whu-library-seat-mobile
    yarn
    yarn build:ios
    ```
1. 使用 XCode 打开 `platforms/ios` 项目文件夹
1. 按照常规 IOS 软件打包方式对软件进行打包（需要申请开发者证书），方法自行百度

### 更新方式

```bash
# 进入项目目录
cd whu-library-seat-mobile
# 更新代码
git pull origin master --rebase
# 构建项目
yarn
yarn build:ios
```
重新使用 XCode 打包

## 方案二 利用 Travis-ci 进行构建（适用于没有 XCode 开发环境的情况）

### 步骤

1. 点击右上角按钮 fork 本项目
1. 申请开发者证书，并获得 developmentTeam 和 provisioningProfile 的值
1. 修改 `.travis.yml` 文件中的 `IOS_APPLE_ID` 和 `IOS_PP` 环境变量，分别为 developmentTeam 和 provisioningProfile 的值，并同时取消对 Android 环境的构建，如下

    ```yml
    matrix:
    include:
      - env: PLATFORM=android # 删除此行
        <<: *_android # 删除此行
      - env:
        - PLATFORM=ios
        - IOS_APPLE_ID=YOUR_APPLE_ID # 更改此行
        - IOS_PP=YOUR_IOS_PP # 更改此行
        <<: *_ios
    ```
1. 进入 `https://travis-ci.org/<你的名字>` 或 `https://travis-ci.com/<你的名字>`，开启本项目的持续集成功能(处于部署需要，必须在 Travis 中添加加密环境变量 GH_TOKEN)
1. 在本项目的最新提交上添加 tag
1. 等待 Travis-ci 部署，部署完成后在 `https://github.com/<你的名字>/whu-library-seat-mobile/releases` 下检查部署后的文件

### 更新方法

发起 pull request 使 fork 后的项目和原项目保持一致，并在最新提交上添加 tag，等待 Travis-ci 部署

## 相关疑问

1. 如何申请开发者证书？

    [iOS苹果开发者账号申请教程](http://www.applicationloader.net/blog/zh/547.html)

1. 如何在最新提交上添加 tag？

    克隆本项目到本地
    ```bash
    git clone https://github.com/<你的名字>/whu-library-seat-mobile.git
    cd whu-library-seat-mobile
    ```
    修改 package.json 和 config.xml 的 version 字段，比如可以改为 1.8.2 之类的，然后暂存更改并提交到本地，然后打 tag 推送到远程
    ```bash
    git add package.json config.xml
    git commit -m "提升版本号"
    git tag v1.8.2
    git push origin --tags
    ```

1. 如何申请并添加 GH_TOKEN？

    在 [https://github.com/settings/tokens/new](https://github.com/settings/tokens/new) 中申请 Token，在 `https://travis-ci.com/<你的名字>/whu-library-seat-mobile/settings` 中添加 Environment Variables，Name 为 GH_TOKEN，Value 为 刚申请到的 Token。<br/>
    注意：申请的 Token 应当有部署(deploy)的权限

1. 有更多疑问？

    请在 [GitHub Issues](https://github.com/CS-Tao/whu-library-seat-mobile/issues) 中提出，或在本项目的 [gitter](https://gitter.im/whu-library-seat/Lobby) 聊天室讨论
