# svg-icon的使用

## 1. 要想使用svg图标，首先安装插件

```shell
npm i svg-sprite-loader --save
```


## 2. 创建svg文件目录 src/icons/svg  里面放置所有.svg图片

  [](./img/svg-icon.png)

## 3. 在src/icons下创建index.js

   ```js
   //index.js
   import Vue from 'vue'
   import SvgIcon from '@/components/SvgIcon'
   // SvgIcon的路径就是这个svg组件的路径
   /* require.context("./test", false, /.test.js$/);
       这行代码就会去 test 文件夹（不包含子目录） 下面的找所有文件名以 .test.js 结尾的文件能被 require 的文件。
       更直白的说就是 我们可以通过正则匹配引入相应的文件模块。
        require.context有三个参数：
        directory：说明需要检索的目录
        useSubdirectories：是否检索子目录
        regExp: 匹配文件的正则表达式 */
   // 全局注册
   Vue.component('svg-icon', SvgIcon)
   const requireAll = requireContext => requireContext.keys().map(requireContext)
   const req = require.context('./svg', false, /\.svg$/)
   requireAll(req)
   ```

## 4. 在vue.config.js中添加rules

   ```js
   
   // my personal config
   const path = require('path')
   const CopyWebpackPlugin = require('copy-webpack-plugin')
   const isProduction = process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test'
   function resolve(dir) {
     return path.join(__dirname, dir)
   }
   
   module.exports = {
     chainWebpack: (config) => {
       config.module
         .rule('svg')
         .exclude.add(resolve('src/icons/svg'))
         .end()
       config.module
         .rule('svgs-loader')
         .test(/\.svg$/)
         .include.add(resolve('src/icons/svg'))
         .end()
         .use('svg-sprite-loader')
         .loader('svg-sprite-loader')
         .options({
           symbolId: 'icon-[name]'
         })
         .end()
     }
   }
   ```

## 5. 创建那个svg-icon组件

   ```vue
   <!-- @/components/SvgIcon -->
   <template>
       <svg :class="svgClass" aria-hidden="true" 	@click="$listeners">
           <use :xlink:href="iconName"></use>
       </svg>
   </template>
   
   <script>
   /**
    * svg 图标组件
    * iconClass="图标名称"
    * className="风格名称"
    */
   export default {
     name: 'svg-icon',
     props: {
       iconClass: { type: String, required: true },
       className: { type: String }
     },
     computed: {
       iconName () {
         return `#${this.iconClass}`
       },
       svgClass () {
         if (this.className) {
           return 'svg-icon ' + this.className
         } else {
           return 'svg-icon'
         }
       }
     }
   }
   </script>
   
   <style scoped>
   .svg-icon {
     width: 1em;
     height: 1em;
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
   }
   </style>
   ```

## 6. 最后还需要把那个js引入到main中

   ```js
   import './icons/index.js'
   ```

## 7. ```js
   使用方法
   <svg-icon icon-class="svg文件名"/>
   ```

## 8. 改色或者改图片大小的方法
   ```
    首先需要发过来的svg是透明的，也就是fill属性为空，
    改色可以通过给父元素的属性 fill: #fff 这样改色
    大小是font-size: 14px 这样
  ```

  ```