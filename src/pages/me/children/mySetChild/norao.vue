<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        勿扰模式
      </span>
    </all-header>
    <div class="content t4">
      <div class="noli bg0 mt2 box1">
        <h4>
          <span>
            勿扰模式
          </span>
          <yd-switch class='switchRight' v-model = "switch1" color = '#1aad16' size = 'small'></yd-switch>
        </h4>
        <p>
          开启后，在设定时间段内收到新消息时不会响铃或振动
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
export default {
  data () {
    return {
      // 勿扰模式
      switch1: false
    }
  },
  components: {
    allHeader
  }
}
</script>

<style lang="scss">
  .noli {
    padding: 0 .3rem;
    h4 {
      padding: .24rem 0 .1rem 0;
      display: flex;
      align-items: center;
      font-size: 14px;
      font-weight: normal;
      .switchRight {
        margin-left: auto
      }
    }
    p {
      color: #999;
      font-size:12px;
      padding-bottom: .20rem;
    }
  }
</style>
