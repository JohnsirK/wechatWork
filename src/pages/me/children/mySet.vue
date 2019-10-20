<template>
  <div class="childHome">
    <all-header style = 'z-index: 1;'>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        设置
      </span>
    </all-header>
    <div class="content t4 moneyList">
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
            <router-link to = '/findme/mySet/newMessage'>
              新消息提醒
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/mySet/norao'>
              勿扰模式
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/mySet/chatSet'>
              聊天
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/mySet/yinsiSet'>
              隐私
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/mySet/allSet'>
              通用
            </router-link>
          </li>
        </ul>
      </div>
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
            <router-link to = '/findme/mySet/aboutWc'>
              关于微信
            </router-link>
          </li>
          <li @click = 'loginOut'>
            退出
          </li>
        </ul>
      </div>
    </div>
    <transition name = 'left'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import localSession from '@/utils/localSession'
export default {
  data () {
    return {}
  },
  components: {
    allHeader
  },
  methods: {
    // 退出
    loginOut () {
      // 1
      localSession.removeSession('userinfo')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang = "scss">
  .findTwo a {
    display: block;
    width: 100%;
    height: 100%;
  }
  .left-enter-active {
    animation: left-in .2s linear
  }
  .left-leave-active {
    animation: left-out .2s linear
  }
  @keyframes left-in {
    0% {
      transform: translate3d(100%, 0, 0)
    }
    50% {
      transform: translate3d(50%, 0, 0)
    }
    100% {
      transform: translate3d(0, 0, 0)
    }
  }
  @keyframes left-out {
    0% {
      transform: translate3d(0, 0, 0)
    }
    50% {
      transform: translate3d(50%, 0, 0)
    }
    100% {
      transform: translate3d(100%, 0, 0)
    }
  }
</style>
