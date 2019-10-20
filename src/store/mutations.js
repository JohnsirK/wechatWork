// 定义同步方法
const mutations = {
  // 保存聊天记录数据
  saveMessageList (state, data) {
    state.saveList = data
  }
}
// es6导出
export default mutations
