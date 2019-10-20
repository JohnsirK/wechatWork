// localSession封装文件
export default {
  // 获取Session
  getSession: function (name) {
    if (!name) {
      return false
    }
    return JSON.parse(window.sessionStorage.getItem(name))
  },
  // 设置Session,设置需要两个参数，name名称和context内容
  setSession: function (name, context) {
    if (!name) {
      return false
    }
    if (context !== 'String') {
      context = JSON.stringify(context)
    }
    window.sessionStorage.setItem(name, context)
  },
  // 删除session
  removeSession: function (name) {
    if (!name) {
      return false
    }
    return window.sessionStorage.removeItem(name)
  },
  // 获取localStorage
  getLocal: function (name) {
    if (!name) {
      return false
    }
    return JSON.parse(window.localStorage.getItem(name))
  },
  // 设置localStorage,参数同上
  setLocal: function (name, context) {
    if (!name) {
      return false
    }
    if (context !== 'String') {
      context = JSON.stringify(context)
    }
    window.localStorage.setItem(name, context)
  },
  // 删除localStorage
  removeLocal: function (name) {
    if (!name) {
      return false
    }
    return window.localStorage.removeItem(name)
  }
}
