<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        关于微信
      </span>
    </all-header>
    <div class="content t4">
      <div class="aboutWeChat">
        <div class = "titleTop">
          <svg class="icon" aria-hilien = "true">
            <use xlink:href = "#icon-weixin"></use>
          </svg>
          <font>
            Version 7.0.7 for Android
          </font>
        </div>
        <div class="findTwo bg0 mt2 box1">
          <ul>
            <li>
             <span>
               功能介绍
             </span>
            </li>
            <li>
              <span>
                投诉
              </span>
            </li>
            <li>
              <span>
                检查新版本
              </span>
            </li>
          </ul>
        </div>
        <div class="footBot">
          <h4>
            <router-link to = 'https://weixin.qq.com/agreement?lang=zh_CN'>
              《微信软件许可及服务协议》
            </router-link>
            和
            <router-link to = 'https://privacy.qq.com/yszc-m.htm'>
              《微信隐私保护指引》
            </router-link>
          </h4>
          <p>
            本项目为仿微信练手项目，不用于商业 @by 胖虎
          </p>
          <p>
            All Right Reserved
          </p>
        </div>
      </div>
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

<style lang = "scss">
  .aboutWeChat {
    .titleTop {
      text-align: center;
      margin-top: 2rem;
      margin-bottom: 1rem;
      flex-direction: column;
      .icon {
        width: 2.8rem;
        height:2.8rem;
        font-size: 2.8rem;
        color: #44b942
      }
      font {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom:.2rem;
      }
    }
  }
  .footBot {
    position: absolute;
    bottom: .3rem;
    width: 100%;
    h4 {
      text-align: center;
      font-size: 12px;
      font-weight: normal;
      color: #bbb8b8;
      a {
        color: #4b6eaf
      }
    }
    p {
      color: #bbb8b8;
      font-size: 12px;
      text-align: center;
      margin: .06rem 0;
    }
  }
</style>
