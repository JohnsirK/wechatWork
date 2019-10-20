<template>
  <header>
    <span @click = "goBack" class="goBack">
      <svg class="icon" aria-hidden = "true" style="color:#fff;">
        <use xlink:href = "#icon-fanhui1"></use>
      </svg>
    </span>
    <span class="title">
      <slot name = "title">
        我是标题
      </slot>
    </span>
    <span class="titleTwo">
      <slot name = 'titleTwo'>
      我是副标题
      </slot>
    </span>
  </header>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    // 返回
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang = "scss">
header {
  height:46px;
  background: #373b3e;
  display: flex !important;
  justify-content: center;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  z-index: 10;
  width:100%;
  .title {
    color:#fff;
    font-size:16px;
  }
  .titleTwo {
    position: absolute;
    left: 1rem;
    color: #fff;
    font-size:16px;
  }
  .goBack {
    position: absolute;
    left: 10px;
    color:#fff;
  }
}
</style>
