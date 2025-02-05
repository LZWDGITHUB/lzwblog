export const navbar = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '站外链接',
    children: [
      { text: 'gitee', link: 'https://gitee.com/lzwdmy' },
      { text: '掘金', link: 'https://juejin.cn/user/1060408701227079' },
      { text: '赵明明', link: 'https://zmmlet.github.io/' },
    ]
  },
  {
    text: '前端',
    children: [
      {
        text: 'CSS',
        prefix: '/pages/frontend/css/',
        children: ['flex.md']
      }
    ]
  }
]
