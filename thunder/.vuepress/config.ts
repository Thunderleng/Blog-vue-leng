/*
 * @Date: 2022-10-27 11:57:18
 * @LastEditors:  thunder thunderleng@gmail.com
 * @LastEditTime: 2022-10-27 15:19:06
 * @FilePath: \Blog-vue\thunder\.vuepress\config.ts
 */
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import recoTheme from 'vuepress-theme-reco'

export default defineUserConfig({
  title: 'Notes-Thunder-Leng',
  description: 'Just playing around',
  theme: recoTheme({
    style: '@vuepress-reco/style-default',
    logo: '/logo.png',
    // author: 'reco_luan',
    docsRepo: 'https://github.com/vuepress-reco/vuepress-theme-reco-next',
    docsBranch: 'main',
    docsDir: 'example',
    lastUpdatedText: '',
    // series 为原 sidebar
    series: {
      '/blogs/main/': [
        {
          text: 'Personal',
          children: ['01', '02']
        },
        {
          text: 'JavaScript',
          children: ['home', 'theme']
        },
        {
          text: 'Solidity',
          children: ['api', 'plugin']
        }
      ],
    },
    navbar:
    [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blogs/main/01.md'},
      { text: '类别', link: '/categories/reco/1/' },
      { text: 'Docs',
        children: [
          { text: 'vuepress-reco', link: '/docs/theme-reco/theme' },
          { text: 'vuepress-theme-reco', link: '/blogs/other/guide' }
        ]
      },
    ],
    bulletin: {
      body: [
      ],
    },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
})
