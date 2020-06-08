# 快速开始

## [vuepress官网](https://vuepress.vuejs.org/zh/)



- 纯构建完整的博客或技术文档
- 依托项目，构建介绍性文档



## 完整的博客

建议全局安装
```sh
# 全局安装

yarn global add vuepress # 或 npm install -g vuepress

# 创建项目目录
mkdir vuepress-starter && cd vuepress-starter

# 新建一个 markdown 文件
echo '# Hello VuePress!' > README.md
```



## 为已有项目添加文档

```sh
# 将 VuePress 作为一个本地依赖安装
yarn add -D vuepress # 或者：npm install -D vuepress

# 新建一个 docs 文件夹
mkdir docs

# 新建一个 markdown 文件
echo '# Hello VuePress!' > docs/README.md
```

接着，在项目的 `package.json` 里加脚本，用于启动本地服务或打包`vuepress`。

```json
{
  "scripts": {
    "docs:dev": "Introduce dev docs",
    "docs:build": "Introduce build docs"
  }
}
```

# 运行

把 `docs` 目录作为 `targetDir` ，所有的“文件的相对路径”都是相对于 `docs` 目录的。在项目根目录下的 `package.json` 中添加 `scripts` ：

```sh
yarn docs:dev # 或 npm run docs:dev
```

# 打包生成静态HTML

```sh
yarn docs:build # 或 npm run docs:build
```

