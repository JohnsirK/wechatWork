// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决移动端300ms点击延迟
import FastClick from 'fastclick'
// 引入vuex
import store from '@/store/index.js'
// ydui 重置基础样式
import 'vue-ydui/dist/ydui.base.css'
// 引入全局样式
import '@/assets/css/global.css'
// 引入vueSwiper
import vueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入swiper.animate.min.js 用于解决动画只执行一次问题
// import * as obj from 'xx' 这种写法是把所有的输出包裹在obj对象里。会将若干export导出的内容组合成一个对象返回，调用obj.xx
// import * as swiperAni from '../static/js/swiper.animate1.0.3.min.js'
// 引入animate.css
import animated from 'animate.css'
// ydui样式表
import {ActionSheet} from 'vue-ydui/dist/lib.rem/actionsheet'
// 按钮
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
// 弹出框
import { Confirm, Alert, Toast, Notify, Loading } from 'vue-ydui/dist/lib.rem/dialog'
// 图片预览
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
// 开关
import {Switch} from 'vue-ydui/dist/lib.rem/switch'
// 注册全局组件
// 第一个参数是自定义元素名称，就是将来在别的组件中使用这个组件的名称
// 第二个参数是将要注册的vue组件
Vue.component(
  // 样式
  ActionSheet.name,
  ActionSheet,
  // 按钮
  Button.name,
  Button,
  ButtonGroup.name,
  ButtonGroup
)
// 图片预览
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
// 开关
Vue.component(Switch.name, Switch)
// 注册插件
// 接收一个参数，这个参数必须具有install方法。vue.use函数内部会调用参数的install方法
// 如果插件没有被注册过，那么注册成功会给插件添加一个installed的属性值为true。vue.use方法内部会检测插件的installed属性。从而避免重复注册插件。
Vue.use(
  // vueSwiper
  vueAwesomeSwiper,
  // 动画
  animated
)
// vue绑定实例属性
Vue.prototype.$dialog = {
  confirm: Confirm,
  alert: Alert,
  toast: Toast,
  notify: Notify,
  loading: Loading
}
// 是否显示生产模式的消息
// true是，false否
Vue.config.productionTip = false
// fastclick 作用于document.body
FastClick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 此处将vuex注册到vue实例中
  store,
  components: { App },
  template: '<App/>'
})
