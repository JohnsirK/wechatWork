<template>
  <div class="main">
    <all-header>
      <span slot = 'title'>
        用户注册
      </span>
      <span slot = 'titleTwo'></span>
    </all-header>
    <div class="reg">
      <p>
        <input type="text" v-model = 'username' placeholder="请输入用户名">
      </p>
      <p>
        <input type="password" v-model = 'password' placeholder="请输入密码">
      </p>
      <p>
        <input type="password" v-model = 'okpsd' placeholder="请再次输入密码">
      </p>
      <p>
        <button @click = 'regHandler'>
          注册
        </button>
      </p>
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
      // 密码
      password: '',
      // 确认密码
      okpsd: ''
    }
  },
  components: {
    allHeader
  },
  methods: {
    // 注册
    regHandler () {
      if (!this.username) {
        this.$dialog.toast({
          mes: '用户名不能为空',
          timeout: 1500,
          icon: 'error'
        })
      } else if (!this.password) {
        this.$dialog.toast({
          mes: '密码不能为空',
          timeout: 1500,
          icon: 'error'
        })
      } else if (!this.okpsd) {
        this.$dialog.toast({
          mes: '确认密码不能为空',
          timeout: 1500,
          icon: 'error'
        })
      } else if (this.password !== this.okpsd) {
        this.$dialog.toast({
          mes: '两次密码不一致',
          timeout: 1500,
          icon: 'error'
        })
      } else {
        this.$dialog.toast({
          mes: '注册成功',
          timeout: 1500,
          icon: 'success'
        })
        let user = {
          username: this.username,
          pwd: this.password
        }
        localSession.setSession('userinfo', user)
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
  .reg {
    padding-top:66px;
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
  }
</style>
