<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        新消息提醒
      </span>
    </all-header>
    <div class="content t4">
      <div class="findTwo bg0 mt2 box1">
        <ul>
          <li>
           <span>
             接收新消息通知
           </span>
           <yd-switch class='switchRight' v-model = "switch1" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li>
            <span>
              接收语音和视频聊天邀请通知
            </span>
            <yd-switch class='switchRight' v-model = "switch2" color = '#1aad16' size = 'small'></yd-switch>
          </li>
        </ul>
      </div>
      <template v-if = 'switch1'>
        <div class="noli bg0 mt2 box1">
          <h4>
            <span>
              接收新消息通知
            </span>
            <yd-switch class='switchRight' v-model = "switch3" color = '#1aad16' size = 'small'></yd-switch>
          </h4>
          <p>
            若关闭，当收到微信消息时，通知提示将不显示发信人和内容摘要。
          </p>
        </div>
        <div class="findTwo bg0 mt2 box1">
          <ul>
            <li>
             <span>
               声音
             </span>
             <yd-switch class='switchRight' v-model = "switch4" color = '#1aad16' size = 'small'></yd-switch>
            </li>
            <li>
              <span>
                新消息提示音
              </span>
              <font class="switchRight">
                notification_001
              </font>
            </li>
            <li>
              <span>
                震动
              </span>
              <yd-switch class='switchRight' v-model = "switch5" color = '#1aad16' size = 'small'></yd-switch>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
export default {
  data () {
    return {
      // 接收新消息通知
      switch1: true,
      // 接收语音和视频聊天邀请通知
      switch2: true,
      // 通知显示消息详情
      switch3: false,
      // 声音
      switch4: true,
      // 震动
      switch5: true
    }
  },
  components: {
    allHeader
  }
}
</script>

<style lang = "scss" scoped>
  .findTwo {
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
