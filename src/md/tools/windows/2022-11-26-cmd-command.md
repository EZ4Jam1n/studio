---
title: 常用 CMD 命令
isOriginal: true
order: 4
icon: terminal
category:
  - Windows 教程
date: 2022-11-26
---

作者：村雨遥

博客：[JavaPark](https://cunyu1943.github.io/JavaPark)

原文：https://mp.weixin.qq.com/s/LAZY7sMiwzNwimTpmlh0rw

>   吾生也有涯，而知也无涯。

---

## 前言

作为一个程序员，可能更多的是在 `Linux` 中使用命令来操作。但在日常使用 `Windows` 的过程中，或多或少会使用到命令提示符窗口，也就是 `Windows` 中的 `CMD`。这个时候，掌握一些常用的命令就尤为重要了，一方面方便自己使用，另一方面，也方便给电脑小白露一手 👀。那接下来就来看看，`CMD` 中最常用的一些命令。

## 如何打开命令提示符窗口

打开的方式很多，这里例举常用的 `5` 种。

1.   **方法 1**

`Win + R` 快捷键打开运行，输入 `cmd` 后回车。

2.   **方法 2**

依次打开开始菜单 -> `Windows` 系统（`Windows` 工具） -> 命令提示符。

3.   **方法 3**

打开资源管理器，然后在地址栏输入 `cmd` 后回车。

4.   **方法 4**

鼠标右键点击开始菜单的 `Win` 图标，找到命令提示符（终端）并进入。

5.   **方法 5**

在任务栏中的搜索栏中搜索 `cmd` 并打开。

## 常用命令

### 目录操作

1.   **磁盘切换**

```shell
盘符 + 冒号
```

如 `D:` 就代码进入 `D` 盘。

![](https://img-blog.csdnimg.cn/09414a722bdc4ecb919d9c12a20cbeff.png)


2.   **进入指定目录**

```shell
cd 目录
```

![](https://img-blog.csdnimg.cn/1ef51757d619425383bb0e847186d46b.png)




3.   **返回磁盘根目录**

```shell
cd \
```

![](https://img-blog.csdnimg.cn/9ab01d4d9b7c4ecea2deb6985bd3ba9e.png)


4.   **返回上级目录**

```shell
cd ..
```

![](https://img-blog.csdnimg.cn/5dea8e9f04c34e91869c7356b32bfab2.png)




5.   **新建目录**

```shell
md 目录名
```

![](https://img-blog.csdnimg.cn/6617f0f262cd44b39bc6e75f7146e0e7.png)


6.   **查看当前目录中内容**

```shell
dir
```
![](https://img-blog.csdnimg.cn/bddda2e75fb6487b9e0631b00f52b5ff.png)



7.   **查看指定目录结构**

```shell
tree 目录
```

![](https://img-blog.csdnimg.cn/aaf0e471c2434efa905e0d160b1b060e.png)


8.   **删除目录**

```shell
rd 目录名
```

![](https://img-blog.csdnimg.cn/c422e4c274ba4e4eab773b94763c9f06.png)


9.   **复制文件**

```shell
copy 源文件 目标文件
```

![](https://img-blog.csdnimg.cn/45336c8adbc94cb4ae00a8754280930e.png)




10.   **删除文件**

```shell
del 文件名
```

![](https://img-blog.csdnimg.cn/98b36e84ffaf4292a6cd97bdc98aa4fd.png)



### 开关机操作

1.   **关机**
```shell
shutdown /s
```


2.   **重启**
```shell
shutdown /r
```


3.   **注销**
```shell
shutdown /l
```


4.   **休眠**
```shell
shutdown /h /f
```


5.   **定时关机**

```shell
shutdown /s /t 时间（秒）
```

![](https://img-blog.csdnimg.cn/e88262049fb2404894e0137de05d83b5.png)


6.   **取消关机**

```shell
shutdown /a
```

![](https://img-blog.csdnimg.cn/e77917423cde4e07b1552897ee9497d7.png)


### 网络操作

1.   **测试网络延迟和丢包率**

```shell
ping ip/域名
```

![](https://img-blog.csdnimg.cn/b90c248998964ff79241b7d5a4a5dba9.png)


2.   **查看本机 ip 地址**

```shell
ipconfig
```

![](https://img-blog.csdnimg.cn/68a68e8dc08745ee90b562feb5120de5.png)


3.   **清除本地 DNS 缓存**

```shell
ipconfig /flushdns
```

![](https://img-blog.csdnimg.cn/2d7f861853f44810821c50208d9d88eb.png)



4.   **路由追踪**

```shell
tracert ip/域名
```

![](https://img-blog.csdnimg.cn/280ecadf38664625b5be11c324f170c1.png)


### 进程/服务操作

1.   **查看当前运行的进程**

```shell
tasklist
```

![](https://img-blog.csdnimg.cn/074848735de8420cab1ba252e95fa575.png)


2.   **运行指定程序或命令**

```shell
start 程序名
```



3.   **按名称结束进程**

```shell
taskkill /im 进程名
```

![](https://img-blog.csdnimg.cn/39d7659d45884808b26da56f85afca97.png)


4.   **按 PID 结束进程**

```shell
taskkill /pid PID
```

![](https://img-blog.csdnimg.cn/fb1d63432bae44d18462e68655232300.png)



5.   **查看当前运行的服务**

```shell
net start
```

![](https://img-blog.csdnimg.cn/925f0da34e374d1b8b27799209af0293.png)


6.   **启动指定服务**

```shell
net start 服务名
```

![](https://img-blog.csdnimg.cn/4ff4342792f3439e934eb03776188aff.png)



7.   **停止指定服务**

```shell
net stop 服务名
```
![](https://img-blog.csdnimg.cn/867c5f3845c34e9e9332612406020dc1.png)


### 其他操作

1.   **清除屏幕**

```shell
cls
```

![清除前](https://img-blog.csdnimg.cn/89af78bbcd7a48d6be489b09a0505ea0.png)
![清除后](https://img-blog.csdnimg.cn/871450fabd614115ac62f4d8cc552871.png)




2.   **退出**

```shell
exit
```


## 总结

以上就是今天所带来的 `Windows` 中常用的 `CMD` 命令了，对付日常使用完全够了，更多的一些命令用到的频率较低，可以在有需要的时候再去具体搜索。

如果觉得对各位朋友有用的话，不妨点个赞再走呀 ~