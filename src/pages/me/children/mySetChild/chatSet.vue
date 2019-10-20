<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        聊天
      </span>
    </all-header>
    <div class="content t4">
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
           <span>
             使用听筒播放语音
           </span>
           <yd-switch class='switchRight' v-model = "switch1" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li>
            <span>
              回车键发送信息
            </span>
            <yd-switch class='switchRight' v-model = "switch2" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li>
           <span>
             使用听筒播放语音
           </span>
          </li>
          <li>
            <span>
              回车键发送信息
            </span>
          </li>
        </ul>
      </div>
      <div class="findTwo mt2 ">
        <h5>聊天记录</h5>
        <ul class = 'bg0 box1'>
          <li>
           <span>
             聊天记录迁移
           </span>
          </li>
          <li>
            <span>
              清空聊天记录
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
      // 使用听筒播放语音
      switch1: false,
      // 回车键发送信息
      switch2: true
    }
  },
  components: {
    allHeader
  }
}
</script>

<style lang = "scss">
  .findTwo {
    h5 {
      font-size: 14px;
      color: #999;
      padding: 0 .2rem;
      font-weight: normal;
      margin-bottom: .1rem;
    }
    ul{
      padding: 0 .3rem;
      li {
        padding: .24rem 0;
        font-size: 14px;
        display: flex;
        align-items: center;
        .switchRight {
          margin-left: auto
        }
        font.switchRight {
          color: #999;
          font-size:12px;
        }
      }
    }
  }
</style>
