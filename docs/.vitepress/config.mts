import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "通途码道",
  description: "前端修行者的技术手札，记录Vue的禅意时刻与React的顿悟瞬间",
  base: '/blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Api', link: '/tree' }
    ],

    sidebar: [
      {
        text: '工具方法',
        collapsed: true,
        items: [
          { text: '树', link: '/tree' },
          { text: '类型', link: '/is' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
