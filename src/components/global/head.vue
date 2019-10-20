<template>
  <div class="head">
    <span class="fl">
      <slot name = 'left'>
        微信
      </slot>
    </span>
    <span class="fr">
      <slot name = "right">
        <svg class="icon ml10" aria-hidden = "true">
          <use xlink:href = "#icon-sousuo"></use>
        </svg>
        <span @click = 'isDown'>
          <svg class="icon c0" aria-hidden = "true" >
            <use xlink:href = "#icon-hao"></use>
          </svg>
        </span>
      </slot>
    </span>
    <ul class="down" v-if = 'isShow'>
      <ul>
        <li>
          <svg class="icon ml10" aria-hidden = "true">
            <use xlink:href = "#icon-xiaoxi"></use>
          </svg>
          发起群聊
        </li>
        <li>
          <svg class="icon ml10" aria-hidden = "true">
            <use xlink:href = "#icon-tianjiahaoyou"></use>
          </svg>
          添加朋友
        </li>
        <li>
          <svg class="icon ml10" aria-hidden = "true">
            <use xlink:href = "#icon-saoyisao1"></use>
          </svg>
          扫一扫
        </li>
        <li>
          <svg class="icon ml10" aria-hidden = "true" >
            <use xlink:href = "#icon-shoufukuan" style="fill: #FFFFFF"></use>
          </svg>
          收付款
        </li>
        <li>
          <svg class="icon ml10" aria-hidden = "true">
            <use xlink:href = "#icon-bangzhuyufankui"></use>
          </svg>
          帮助与反馈
        </li>
      </ul>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isShow: false
    }
  },
  methods: {
    isDown () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style lang="scss">
.head {
  height:46px;
  background: #373b3e;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  span.fl {
    position: absolute;
    left: .3rem;
    color:#fff;
    font-size:16px;
  }
  span.fr {
    position: absolute;
    right:.3rem;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon-add {
      margin-left: 15px;
      font-size: 24px;
    }
  }
  .down {
    position: absolute;
    top:46px;
    right: 0;
    color: #fff;
    width: 3rem;
    background: #373b3e;
    li{
      padding:.2rem .3rem;
      display: flex;
      align-items: center;
      i {
        font-size: 20px;
        margin-right: 10px;
      }
    }
  }
}

</style>
