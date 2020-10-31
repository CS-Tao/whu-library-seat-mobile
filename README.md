[![Build Status](https://www.travis-ci.com/CS-Tao/whu-library-seat-mobile.svg?branch=master)](https://www.travis-ci.com/CS-Tao/whu-library-seat-mobile)
[![Join the chat at https://gitter.im/whu-library-seat/Lobby](https://img.shields.io/badge/chat-on%20gitter-28BC99.svg)](https://gitter.im/whu-library-seat/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![license](https://img.shields.io/badge/license-none-yellow.svg)](#版权声明)

# whu-library-seat-mobile

> 📲 武汉大学图书馆助手 - 移动端(Android)

> 🧰 IOS 解决方案：[IOS-GUIDE.md](./IOS-GUIDE.md)

> 💻 桌面端：[https://github.com/CS-Tao/whu-library-seat](https://github.com/CS-Tao/whu-library-seat)

## 📗 使用说明

|文档地址|
| :---: |
| [![文档地址](https://img.shields.io/badge/文档地址-vuepress-blightgreen.svg)](https://home.cs-tao.cc/whu-library-seat/)|

|桌面端演示|
| :---: |
| ![软件演示](https://home.cs-tao.cc/github-content/contents/github/whu-library-seat/full.gif)|

## 🚀 下载和安装

### 最新版本下载

| 平台 |                                                                                                  Android                                                                                                   |                                                IOS                                                |
| :--- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: |
| 链接 | [![Android 版本下载链接 v1.7.4](https://img.shields.io/badge/v1.7.4-Android-limegreen.svg)](https://github.com/CS-Tao/whu-library-seat-mobile/releases/download/v1.7.4/whu-library-seat-mobile_v1.7.4.apk) | [![IOS 不完全解决方案](https://img.shields.io/badge/不完全解决方案-IOS-blue.svg)](./IOS-GUIDE.md) |

|                                                         本页面二维码                                                          |
| :---------------------------------------------------------------------------------------------------------------------------: |
| ![安卓版本二维码](https://home.cs-tao.cc/github-content/contents/github/whu-library-seat/user-validation/last-android-qr.jpg) |

### 申请软件使用权

v1.6.0 已移除本功能，改为 GitHub Star 认证，具体请查看 [GitHub Star 认证](https://home.cs-tao.cc/whu-library-seat/specification/auth.html)

当然，因为本软件为开源软件，您可以自己构建软件并删除其中的认证代码

### 软件更新

软件启动的时候会自动访问[这个文件](https://github.com/CS-Tao/github-content/blob/master/contents/github/whu-library-seat/user-validation/last-mobile.json)检查更新，如果有更新，在软件的左下角会出现下载更新的按钮

![图片加载失败](https://home.cs-tao.cc/github-content/contents/github/whu-library-seat/update.png)

## 👨‍💻 面向开发者

您可以通过以下步骤自行构建本软件，但请您务必注意，本仓库并未提供任何源码`许可证`，您没有权利将源码更改后继续传播，更没有权利将本软件或源码用于商业活动

```bash
# 全局安装 cordova cli
npm install -g cordova

# 添加项目依赖
yarn

# 开发模式运行网页
yarn dev

# 打包 apk 包(调试)
yarn build:android
```

如果您是自行构建而不是通过[申请软件使用权](#申请软件使用权)使用本软件，重新构建的软件只能您自己使用

如果您希望在本软件的基础上继续添加新的功能，非常欢迎您向本仓库发送 Pull Request

## 📑 版权声明

本软件开源，但没有向开发者提供任何源码`许可证`，作者本人保留源代码的所有权利，任何组织和个人不得将本软件或源码用于商业活动

## ⚖️ 免责声明

本软件和软件源代码仅用于学习研究和技术交流，使用本软件或软件源代码造成的任何不良影响由使用者自行承担，与软件开发人员无关
