<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        我的卡包
      </span>
    </all-header>
    <div class="content t4 moneyList">
      <dl>
        <dt>
          优惠券
        </dt>
        <dd>
          <svg class="icon" aria-hilien = "true">
            <use xlink:href = "#icon-youhuiquan2"></use>
          </svg>
          朋友的优惠券
        </dd>
        <dd>
          <svg class="icon" aria-hilien = "true">
            <use xlink:href = "#icon-piaoquanhexiao"></use>
          </svg>
          我的票券
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
export default {
  data () {
    return {}
  },
  components: {
    allHeader
  }
}
</script>

<style lang="scss" scoped>
  .moneyList {
    dt {
      background: #ecf0f3;
      padding: .2rem .3rem;
      color: #727375;
      font-weight: normal;
      font-size: 14px;
    }
    dd {
      margin:.2rem;
      box-shadow: 0 2px 10px rgba(195, 195, 195, .2);
      background: #fff;
      padding: .3rem;
      display: flex;
      align-items: center;
      font-size:14px;
      border-radius: 3px;
      .icon {
        margin-right: 10px;
        width: 32px;
        height: 32px;
        font-size: 32px;
      }
    }
  }
</style>
