<template>
  <div class="main">
    <all-header>
      <span slot = 'title'>
        登录
      </span>
      <span slot = 'titleTwo'></span>
    </all-header>
    <div class="login">
      <p class = "logo">
        <svg class="icon" aria-hidden = "true" style = 'width:3rem;height:3rem;'>
          <use xlink:href = "#icon-weixin"></use>
        </svg>
      </p>
      <p>
        <input type="text" v-model = "username" placeholder="请输入用户名">
      </p>
      <p>
        <input type="password" v-model="password" placeholder="请输入密码">
      </p>
      <p>
        <button @click = 'loginIn'>登录</button>
      </p>
      <h6>
        <router-link to = '/reg'>
          还没账号？点此注册
        </router-link>
      </h6>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import localSession from '@/utils/localSession'
export default {
  data () {
    return {
      // 用户名
      username: '',
      password: ''
    }
  },
  components: {
    allHeader
  },
  methods: {
    // 登录
    loginIn () {
      let res = localSession.getSession('userinfo')
      if (!this.username) {
        this.$dialog.toast({
          mes: '用户名不能为空',
          timeout: 3000,
          icon: 'error'
        })
        return false
      }
      if (!res) {
        this.$dialog.toast({
          mes: '无此用户，请先注册',
          timeout: 1500,
          icon: 'error'
        })
        return false
      }
      if (this.username !== res.username) {
        this.$dialog.toast({
          mes: '账号错误，请重试',
          timeout: 1500,
          icon: 'error'
        })
      } else if (this.password !== res.pwd) {
        this.$dialog.toast({
          mes: '密码错误，请重试',
          timeout: 1500,
          icon: 'error'
        })
      } else {
        this.$dialog.toast({
          mes: `欢迎您,${this.username}`,
          timeout: 1500
        })
        this.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="scss">
p.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding:96px 0 1rem 0;
  color:#48ca52;
  i {
    font-size:120px;
  }
}
.login {
  p {
    margin: 0 .2rem .2rem .2rem;
    input {
      width:100%;
      box-sizing: border-box;
      padding:.2rem;
      border: 1px solid #cac9c9;
      border-radius: 3px;
      background: #fff;
    }
    button {
      margin-top:.2rem;
      width:100%;
      box-sizing: border-box;
      padding:.2rem;
      border:1px solid #34c538;
      border-radius: 3px;
      background: #34c538;
      color:#fff;
    }
  }
  h6 {
    margin:0 .2rem;
    font-weight: normal;
    a {
      color:#999;
    }
  }
}
</style>
