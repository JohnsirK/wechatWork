// axios 封装
import axios from 'axios'
// 创建axios 实例
const server = axios.create({
  // 接口地址
  baseURL: '',
  // 响应时长
  timeout: 30000,
  // 响应头
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

// 定义axios拦截器
server.interceptors.request.use(config => {
  // 请求数据之前遮罩显示
  // 例如store.commit('functionName')
  // commit用于分发mutations里的同步函数.dispatch用于分发actions里面的异步函数
  return config
}, err => {
  // 如果失败
  console.log('数据请求发生错误，请重试')
  // 返回promise的reject错误对象
  return Promise.reject(err)
})

// 定义axios响应器
server.interceptors.response.use(res => {
  // 数据响应之前的操作,例如关闭遮罩
  // store.commit('functionName')
  // 此处用res.data是因为res返回的数据总是在data属性里。所以统一添加data。
  return res.data
}, err => {
  // 响应数据出错之后
  console.log('数据请求发生错误，请重试!')
  // 返回Promise的reject错误对象
  return Promise.reject(err)
})

// 导出server,方便其他页面调用
export default server
