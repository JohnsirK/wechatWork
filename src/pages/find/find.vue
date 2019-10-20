<template>
  <div class="home">
    <all-head></all-head>
    <div class="content mt4b5">
      <div class="bg0 mt2 p3 fix">
        <router-link to = "findNew/allFrends">
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-pengyouquan"></use>
          </svg>
          朋友圈
        </router-link>
      </div>
      <div class="findTwo bg0 mt2">
        <ul>
          <li class='fix'>
            <svg class="icon" aria-hidden = "true">
              <use xlink:href = "#icon-saoyisao1"></use>
            </svg>
            扫一扫
          </li>
          <li class='fix'>
            <svg class="icon" aria-hidden = "true">
              <use xlink:href = "#icon-yaoyiyao"></use>
            </svg>
            摇一摇
          </li>
        </ul>
      </div>
      <div class="bg0 mt2 p3 fix">
        <svg class="icon" aria-hidden = "true">
          <use xlink:href = "#icon-fujinderen"></use>
        </svg>
        附近的人
      </div>
      <div class="findTwo bg0 mt2">
        <ul>
          <li class= 'fix'>
            <svg class="icon" aria-hidden = "true">
              <use xlink:href = "#icon-shopping"></use>
            </svg>
            购物
          </li>
          <li class='fix'>
            <svg class="icon" aria-hidden = "true">
              <use xlink:href = "#icon-youxi"></use>
            </svg>
            游戏
          </li>
        </ul>
      </div>
      <div class="bg0 mt2 p3 fix">
        <svg class="icon" aria-hidden = "true">
          <use xlink:href = "#icon-xiaochengxu"></use>
        </svg>
        小程序
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
export default {
  data () {
    return {}
  },
  components: {
    allHead,
    allFooter
  }
}
</script>

<style lang="scss" scoped>
  .content {
    font-size: 14px;
    color: #666;
  }
  .findTwo {
    li {
      border-bottom: 1px solid #f5eeee;
      padding:.24rem 0;
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
      margin-right: 10px;
      width: 26px;
      height: 26px;
      font-size: 26px;
    }
  }
</style>
