# 本地引入min.js文件

借鉴魔盒，dcloudh5项目

魔盒项目最终不会联网，会简单打包给用户本地使用

### 第一步：

自然是下载需要的min.js文件

### 第二步：

现在的项目cli4下，需要把这些不用再次打包的文件（各种min.js）放到public下，在public目录下的文件不会被编译。

并建立一个static目录，用于存放js,css文件，在这里的文件是不会被打包的。主要是为了和index.html同级。

同时不要使用import xx form '相对路径/xx.js’去引入xx.js，因为import使用相对路径会默认对该文件进行编译

### 第三步

##### 修改`vue.config.js`

```js
configureWebpack: {
    externals: {
      'vue': 'Vue',
      'vuex': 'Vuex',
      'vue-router': 'VueRouter',
      'axios': 'axios',
      'element-ui': 'ELEMENT'
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js', 这里要注释掉
        '@': resolve('src'),
      }
    },
  }
```









