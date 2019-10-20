import Vue from 'vue'
import Router from 'vue-router'
// 采用按需加载形式
// 欢迎页
const welcome = () => import('@/components/welcome')
// 主页
const home = () => import('@/pages/home/index')
// 聊天界面
const singChat = () => import('@/pages/home/children/singChat')
// 登录页面
const login = () => import('@/pages/login/login')
// 注册页面
const reg = () => import('@/pages/login/reg')
// 通讯录页面
const addressBook = () => import('@/pages/addressBook/addressBook')
// 个人信息页面
const detail = () => import('@/pages/addressBook/children/detail')
// 某人朋友圈
const frends = () => import('@/pages/addressBook/children/frends')
// 发现
const findNew = () => import('@/pages/find/find')
// 全部朋友圈
const allFrends = () => import('@/pages/find/children/allFrends')
// 我
const findme = () => import('@/pages/me/me')
// 我的相册
const myPhoto = () => import('@/pages/me/children/myPhoto')
// 我的收藏
const mySave = () => import('@/pages/me/children/mySave')
// 我的钱包
const myMoney = () => import('@/pages/me/children/myMoney')
// 我的卡包
const myCart = () => import('@/pages/me/children/myCart')
// 设置
const mySet = () => import('@/pages/me/children/mySet')
// 新消息提醒设置
const newMessage = () => import('@/pages/me/children/mySetChild/newMessage')
// 勿扰模式
const norao = () => import('@/pages/me/children/mySetChild/norao')
// 聊天设置
const chatSet = () => import('@/pages/me/children/mySetChild/chatSet')
// 隐私
const yinsiSet = () => import('@/pages/me/children/mySetChild/yinsiSet')
// 通用设置
const allSet = () => import('@/pages/me/children/mySetChild/allSet')
// 关于微信
const aboutWc = () => import('@/pages/me/children/mySetChild/aboutWc')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'singChat',
          name: 'singChat',
          component: singChat
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/addressBook',
      name: 'addressBook',
      component: addressBook,
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: detail
        },
        {
          path: 'frends',
          name: 'frends',
          component: frends
        }
      ]
    },
    {
      path: '/findNew',
      name: 'findNew',
      component: findNew,
      children: [
        {
          path: 'allFrends',
          name: 'allFrends',
          component: allFrends
        }
      ]
    },
    {
      path: '/findme',
      name: 'findme',
      component: findme,
      children: [
        {
          path: 'myPhoto',
          name: 'myPhoto',
          component: myPhoto
        },
        {
          path: 'mySave',
          name: 'mySave',
          component: mySave
        },
        {
          path: 'myMoney',
          name: 'myMoney',
          component: myMoney
        },
        {
          path: 'myCart',
          name: 'myCart',
          component: myCart
        },
        {
          path: 'mySet',
          name: 'mySet',
          component: mySet,
          children: [
            {
              path: 'newMessage',
              name: 'newMessage',
              component: newMessage
            },
            {
              path: 'norao',
              name: 'norao',
              component: norao
            },
            {
              path: 'chatSet',
              name: 'chatSet',
              component: chatSet
            },
            {
              path: 'yinsiSet',
              name: 'yinsiSet',
              component: yinsiSet
            },
            {
              path: 'allSet',
              name: 'allSet',
              component: allSet
            },
            {
              path: 'aboutWc',
              name: 'aboutWc',
              component: aboutWc
            }
          ]
        }
      ]
    }
  ]
})
