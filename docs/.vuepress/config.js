
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
      ],
      algolia: {
        appId: "UH893VLS68", //当你使用的是自建algolia服务器或者API调用时需要填写此项,否则会报错invaild apikey or IndexName
        apiKey: "e8e4bb2a03f147568ab7f27e996209df", //填写你的Search-Only API Key
        indexName: "doc", //填写你的index名称,Indices >>>> 你的application名 >>>> Copy Index Name
      },
    },
    plugins: [
      '@vuepress/back-to-top',
      'permalink-pinyin',
      'autobar',
      'rpurl',
      // 'fulltext-search',
    ]
}