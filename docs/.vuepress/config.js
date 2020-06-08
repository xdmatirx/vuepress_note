
module.exports = {
    title: 'Vuepress介绍',
    description: '帮助个人博客或技术文档',
    themeConfig: {
      
      siderbar:[
        {
          sidebarDepth: 2,
          collapsable: false,
        }
      ]
    },
    plugins: ['permalink-pinyin', ['autobar', {'pinyinNav': true}], 'rpurl', 'fulltext-search']


}