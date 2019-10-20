// vuex是一个状态管理.state表示vuex中的变量.getters表示vuex中的计算属性.mutations里面用来定义同步方法.actions里面用来定义异步方法.actions里面可以通过commit来使用mutations方法.mutations使用commit分发.actions使用dispatch分发
// 定义变量
const state = {
  // 聊天记录
  saveList: []
}
// 利用 es6 export default 导出state
export default state
