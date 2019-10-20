<template>
  <div id="app">
    <transition name = "fade" mode = "out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
  #app {
    // background: #f5f5f5;
    width: 100%;
    margin: 0 auto;
    min-height: 100%;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .2s
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
