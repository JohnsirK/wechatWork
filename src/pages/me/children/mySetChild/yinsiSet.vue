<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        隐私
      </span>
    </all-header>
    <div class="content t4">
      <div class="findTwo mt2">
        <h5>聊天记录</h5>
        <ul class="bg0 box1">
          <li>
           <span>
             加我好友时需要验证
           </span>
           <yd-switch class='switchRight' v-model = "switch1" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li class = 'noli'>
            <h4>
              <span>
                向我推荐通讯录好友
              </span>
              <yd-switch class='switchRight' v-model = "switch2" color = '#1aad16' size = 'small'></yd-switch>
            </h4>
            <p>
              开启后，为你推荐已开通微信的手机联系人
            </p>
          </li>
          <li>
           <span>
             添加我的方式
           </span>
          </li>
          <li>
            <span>
              通讯录黑名单
            </span>
          </li>
        </ul>
      </div>
      <div class="findTwo mt2">
        <h5>朋友圈</h5>
        <ul class="bg0 box1">
          <li>
           <span>
             不让他/她看我的朋友圈
           </span>
          </li>
          <li>
            <span>
              不看他/她的朋友圈
            </span>
          </li>
          <li>
            <span>
              朋友分组
            </span>
          </li>
          <li>
           <span>
             允许陌生人查看十张照片
           </span>
           <yd-switch class='switchRight' v-model = "switch3" color = '#1aad16' size = 'small'></yd-switch>
          </li>
          <li>
            <span>
              允许朋友查看朋友圈的范围
            </span>
            <font class="switchRight">
              全部
            </font>
          </li>
          <li class = 'noli'>
            <h4>
              <span>
                开启朋友圈入口
              </span>
              <yd-switch class='switchRight' v-model = "switch4" color = '#1aad16' size = 'small'></yd-switch>
            </h4>
            <p>
              关闭后，将隐藏“发现”中的朋友圈入口，你发的朋友圈不会清空，朋友仍可以看到
            </p>
          </li>
          <li class = 'noli' v-if = 'switch4'>
            <h4>
              <span>
                朋友圈更新提醒
              </span>
              <yd-switch class='switchRight' v-model = "switch5" color = '#1aad16' size = 'small'></yd-switch>
            </h4>
            <p>
              关闭后，有朋友更新照片时，界面下方的“发现”切换按钮上不在出现红点提示
            </p>
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
      // 加我好友时需要验证
      switch1: true,
      // 向我推荐通讯录好友
      switch2: true,
      // 允许陌生人查看十张照片
      switch3: true,
      // 开启朋友圈入口
      switch4: true,
      // 朋友圈更新提醒
      switch5: true
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
  li.noli {
    display: block !important;
    h4 {
      padding: 0 0 .1rem 0;
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
    }
  }
</style>
