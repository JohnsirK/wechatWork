<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>详细资料</span>
    </all-header>
    <div class="content t4">
      <template v-if = 'detailInfo.wxid'>
        <div class="detailTop bg0 mt2 p3">
          <span>
            <img :src="detailInfo.headurl" alt="" v-if = 'detailInfo.headurl'>
            <svg class="icon" aria-hidden = "true" v-else>
              <use xlink:href = "#icon-zanwutouxiang"></use>
            </svg>
          </span>
          <div class="txt">
            <h4>
              {{detailInfo.remarks ? detailInfo.remarks : detailInfo.petname}}
              <svg class="icon nv" aria-hidden = "true" v-if = 'detailInfo.sex === 2 ? true : false'>
                <use xlink:href = "#icon-nv"></use>
              </svg>
              <svg class="icon nan" aria-hidden = "true" v-if = 'detailInfo.sex === 1 ? true : false'>
                <use xlink:href = "#icon-nan1"></use>
              </svg>
            </h4>
            <p v-if = 'detailInfo.remarks'>
              昵称：{{detailInfo.petname}}
            </p>
            <p>
              微信号：sesnegs
            </p>
          </div>
        </div>
        <!-- 设置备注和标签 -->
        <div class="setRemark bg0 mt2 p3">
          <h4 class = "fs14 fc333 nb">设置备注和标签</h4>
        </div>
        <!-- 地区，个人相册，个性签名，来源 -->
        <div class="detailInfo bg0 mt2 pl3">
          <p>
            <span>地区</span>
            <font>{{detailInfo.district}}</font>
          </p>
          <p>
            <router-link :to = "{name: 'frends', query: {item: JSON.stringify(detailInfo)}}">
              <span>个人相册</span>
              <i>
                <img :src="img" v-for = '(img, index) in detailInfo.gallery' :key = 'index'>
              </i>
            </router-link>
          </p>
          <p>
            <span>个性签名</span>
            <font>{{detailInfo.newmeassage}}</font>
          </p>
          <p>
            <span>来源</span>
            <font>{{detailInfo.source}}</font>
          </p>
          <p v-if = 'detailInfo.phone'>
            <span>电话号码</span>
            <font>{{detailInfo.phone}}</font>
          </p>
        </div>
        <!-- 开始聊天 -->
        <router-link class="actionTalk" :to = "{name: 'singChat', query: {item: JSON.stringify(detailInfo), index: detailInfo.id}}">
          发消息
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import img1 from '@/assets/images/1.gif'
export default {
  name: 'detal',
  data () {
    return {
      imgUrl: img1,
      // 个人信息
      detailInfo: this.$route.query.info ? JSON.parse(this.$route.query.info) : {}
    }
  },
  components: {
    allHeader
  },
  mounted () {
    console.log(JSON.parse(this.$route.query.info))
  }
}
</script>

<style lang="scss">
  // 引入scss
  @import '@/assets/css/main.scss';
  .fs14 {
    font-size: $fs10 * 1.4
  }
  .detailTop {
    display: flex;
    span {
      width: 1.1rem;
      height: 1.1rem;
      margin-right: .2rem;
      border-radius: 5px;
      overflow: hidden;
      background: #EBEBEB;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        width: 0.6rem;
        height:0.6rem;
        font-size:0.6rem;
        color: #a5aba8
      }
      img {
        width:100%;
        display: block;
      }
    }
    .txt {
      width: calc(100% - 1.4rem);
      display: flex;
      justify-content: center;
      flex-direction: column;
      h4 {
        color: #333;
        font-weight: normal;
        font-size:14px;
        display: flex;
        align-items: center;
        svg {
          margin-left: 5px;
        }
        .nan {
          width: 12px; height: 12px;
          font-size: 12px;
          fill: currentColor;
        }
        .nv {
          width: 17px; height: 17px;
          font-size: 17px;
          fill: currentColor;
        }
      }
      p {
        color:#999;
        font-size:12px;
      }
    }
  }
  .detailInfo {
    p {
      border-bottom: 1px solid #e2e2e2;
      display: flex;
      padding:.2rem 0;
      align-items: center;
      a {
        display: flex;
        align-items: center;
      }
      span {
        width: 1.6rem;
        font-size: 14px;
      }
      i,font {
        width: calc(100% - 1.6rem)
      }
      i {
        display: flex;
        img {
          width: 18.5%;
          margin-right: 5px;
        }
        img:last-child {
          margin-right:0
        }
      }
      font {
        color: #666
      }
    }
    p:last-child {
      border-bottom: 0;
    }
  }
  .actionTalk {
    background: #1aad16;
    color: #fff;
    font-size:16px;
    margin: .4rem .2rem;
    display: block;
    text-align: center;
    padding:.2rem;
    border-radius: 3px;
  }
</style>
