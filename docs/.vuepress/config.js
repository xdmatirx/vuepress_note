
module.exports = {
    title: 'Vuepress介绍',
    description: '帮助个人博客或技术文档',
    themeConfig: {
      lastUpdated: 'Last Updated',
      smoothScroll: true,
      siderbar:[
        {
          sidebarDepth: 2,
        }
      ],
      nav: [
        {text: 'HOME', link: '/Introduce/1.getting-start.md'},
        {text: 'github', link: 'https://xdmatirx.github.io/'}
      ]
    },
    plugins: [
      '@vuepress/back-to-top',
      'permalink-pinyin',
      'autobar',
      'rpurl',
      'fulltext-search',
    ]
}