<template>
  <div class="home">
    <all-head></all-head>
    <div class="content mt4b5">
      <div class="bg0 mt2 p3 fix weChatUser box1">
        <span>
          <img :src="imgUrl" alt="">
        </span>
        <div class="txt">
          <h4>
            hh.
          </h4>
          <p>
            微信号：15511315
          </p>
          <i>
            <svg class="icon" aria-hidden = "true">
              <use xlink:href = "#icon-ico"></use>
            </svg>
          </i>
        </div>
      </div>
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
            <router-link to = '/findme/myPhoto'>
              <svg class="icon" aria-hidden = "true">
                <use xlink:href = "#icon-xiangce-selected"></use>
              </svg>
              相册
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/mySave'>
              <svg class="icon" aria-hidden = "true">
                <use xlink:href = "#icon-weixinshoucang"></use>
              </svg>
              收藏
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bg0 mt2 p3 fix box1">
        <a @click = 'alertNo'>
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-biaoqing1"></use>
          </svg>
          表情
        </a>
      </div>
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
            <router-link to = '/findme/myMoney'>
              <svg class="icon" aria-hidden = "true">
                <use xlink:href = "#icon-qianbao"></use>
              </svg>
              钱包
            </router-link>
          </li>
          <li>
            <router-link to = '/findme/myCart'>
              <svg class="icon" aria-hidden = "true">
                <use xlink:href = "#icon-qiabao"></use>
              </svg>
              卡包
            </router-link>
          </li>
        </ul>
      </div>
      <div class="bg0 mt2 p3 fix box1">
        <router-link to = '/findme/mySet'>
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-config--shixin-copy"></use>
          </svg>
          设置
        </router-link>
      </div>
    </div>
    <all-footer></all-footer>
    <transition name = 'left'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import allHead from '@/components/global/head'
import allFooter from '@/components/global/footer'
import img1 from '@/assets/images/10.gif'
export default {
  data () {
    return {
      imgUrl: img1
    }
  },
  components: {
    allHead,
    allFooter
  },
  methods: {
    // 该功能尚未开放
    alertNo () {
      this.$dialog.toast({
        mes: '该功能暂未开放!',
        timeout: 3000,
        icon: 'error'
      })
    }
  }
}
</script>

<style lang = "scss">
  .content {
    font-size: 14px;
    color: #666;
  }
  .p3 {
    padding: .18rem .24rem
  }
  .weChatUser {
    span {
      width: 1.2rem;
      height:1.2rem;
      border-radius: 3px;
      overflow: hidden;
      margin-right: .2rem;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    .txt {
      position: relative;
      width: calc(100% - 1.3rem);
      h4 {
        color: #296BE4;
        font-size: 16px;
      }
      p {
        color: #666;
        font-size: 12px;
        margin: .1rem 0;
      }
      i {
        position: absolute;
        right: 0;
        bottom: .2rem;
      }
    }
  }
  .findTwo {
    li {
      border-bottom: 1px solid #f5eeee;
      padding:.24rem .3rem;
    }
    a {
      display: flex;
      align-items: center;
      .icon {
        margin-right: 10px;
      }
    }
    li:last-child {
      border-bottom: 0;
    }
  }
  .fix {
    display: flex;
    align-items: center;
    a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
    }
    .icon {
      margin-right: 8px;
      width: 26px;
      height: 26px;
      font-size: 26px;
    }
  }
  /* 动画 */
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
