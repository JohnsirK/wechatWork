// 统一在这里管理vuex
// 先引入vue 注意此处的vue和vuex必须是大写
import Vue from 'vue'
// 引入Vuex
import Vuex from 'vuex'
// 引入vuex其他文件   ./表示当前同目录
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

// 将vuex挂载到vue中
Vue.use(Vuex)

// 导出Vuex,方便其他页面使用.导出之后main.js页面统一全局注册
// Vuex.Store大写
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
