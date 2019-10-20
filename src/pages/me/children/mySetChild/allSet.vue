<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        通用
      </span>
    </all-header>
    <div class="content t4">
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
           <span>
             开启横屏模式
           </span>
           <yd-switch class='switchRight' v-model = "switch1" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li>
            <span>
              自动下载微信安装包
            </span>
            <font class="switchRight">
              从不
            </font>
          </li>
          <li>
            <span>
              多语言
            </span>
            <font class="switchRight">
              跟随系统
            </font>
          </li>
          <li>
            <span>
              字体大小
            </span>
          </li>
          <li>
            <span>
              照片和视频
            </span>
          </li>
          <li>
            <span>
              功能
            </span>
          </li>
          <li>
            <span>
              流量统计
            </span>
          </li>
          <li>
            <span>
              清理微信存储空间
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
export default {
  data () {
    return {
      // 开启横屏模式
      switch1: false
    }
  },
  components: {
    allHeader
  }
}
</script>

<style>
</style>
