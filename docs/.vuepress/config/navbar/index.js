export const navbar = [
  {
    text: '首页',
    link: '/'
  },
  {
    text: '站外链接',
    children: [
      { text: '微信公众平台', link: 'https://mp.weixin.qq.com/' },
      { text: '蓝湖', link: 'https://lanhuapp.com/dashboard/#/item?tid=fa319572-ba47-4384-be47-49d88465b73c' },
      { text: 'gitee', link: 'https://gitee.com/lzwdmy' },
      { text: '掘金', link: 'https://juejin.cn/user/1060408701227079' },
      { text: '赵明明', link: 'https://zmmlet.github.io/' },
      { text: 'iconfont', link: 'https://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=4732197' },
      { text: '魔戒', link: 'https://mojie.app/dashboard' },
    ]
  },
  {
    text: '博客',
    prefix: '/pages/blog/',
    children: ['instruction.md']
  },
  {
    text: '前端',
    children: [
      {
        text: 'CSS',
        prefix: '/pages/frontend/css/',
        children: ['flex.md', 'grid.md']
      },
      {
        text: 'nvm',
        prefix: '/pages/frontend/nvm/',
        children: ['index.md']
      }
    ]
  },
  {
    text: '项目',
    children: [
      {
        text: '英邦科技',
        prefix: '/pages/project/yingbang/',
        children: ['index.md']
      }
    ]
  },
  {
    text: '其它',
    link: '/pages/other/index.md',
  }
]