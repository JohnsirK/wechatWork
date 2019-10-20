<template>
  <div class="frendsList">
    <ul>
      <li>
        <span class="img">
          <img :src="itemJson.headurl" alt="">
        </span>
        <div class="txt">
          <h4>
            {{itemJson.remarks ? itemJson.remarks : itemJson.petname}}
          </h4>
          <h5>
            {{itemJson.newmeassage}}
          </h5>
          <div>
            <yd-lightbox :num = 'itemJson.gallery.length'>
              <yd-lightbox-img v-for = '(item, index) in itemJson.gallery' :src = 'item' :original = 'item' :key = "index"></yd-lightbox-img>
              <yd-lightbox-txt>
                <div slot = content>
                  <p>{{itemJson.newmeassage}}</p>
                </div>
              </yd-lightbox-txt>
            </yd-lightbox>
          </div>
          <h6>
            <em class = 'time'>昨天</em>
            <i @click = 'isShow = !isShow'>
              <svg class="icon" aria-hidden = "true">
                <use xlink:href = "#icon-gengduo"></use>
              </svg>
            </i>
            <transition name = 'fade'>
              <span class="reply" v-if = 'isShow'>
                <em class='sjx'></em>
                <b @click = 'clickzan'>
                  <svg class="icon" aria-hidden = "true">
                    <use xlink:href = "#icon-zan1"></use>
                  </svg>
                  {{zan ? '取消' : '点赞'}}
                </b>
                <b @click = 'replyClick'>
                  <svg class="icon" aria-hidden = "true">
                    <use xlink:href = "#icon-comment"></use>
                  </svg>
                  评论
                </b>
              </span>
            </transition>
          </h6>
          <div class="replyZan" v-if = 'zanNum.length > 0 || replyNum.length > 0'>
            <p class="zan" v-if = 'zanNum.length > 0'>
              <font  v-for = '(i, index) in zanNum' :key = 'index'>
                {{i}} ,
              </font>
            </p>
            <p class = 'replyList' v-if = 'replyNum.length > 0' v-for = '(i, index) in replyNum' :key = 'index'>
              <span class = 'name'>
                {{itemJson.remarks ? itemJson.remarks : itemJson.petname}}:
              </span>
              <font class='text'>
                {{i}}
              </font>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <transition name = 'fadebot'>
      <div class="fixShu" v-if = 'replyShow'>
        <span>
          <input type="text" placeholder="说点什么..." v-model = "message">
        </span>
        <font @click = 'send'>
          发送
        </font>
      </div>
    </transition>
  </div>
</template>

<script>
import img1 from '@/assets/images/10.gif'
export default {
  props: ['itemJson'],
  data () {
    return {
      img: img1,
      // 是否点击更多
      isShow: false,
      // 点赞
      zan: false,
      // 点赞人数
      zanNum: [],
      // 回复人数
      replyNum: [],
      // 回复消息
      message: '',
      // 评论是否显示
      replyShow: false
    }
  },
  methods: {
    // 点赞
    clickzan () {
      this.zan = !this.zan
      this.isShow = false
      if (this.zan) {
        this.zanNum.push(this.itemJson.remarks ? this.itemJson.remarks : this.itemJson.petname)
      } else {
        this.zanNum.shift(this.itemJson.remarks ? this.itemJson.remarks : this.itemJson.petname)
      }
    },
    // 回复
    send () {
      this.replyNum.push(this.message)
      this.message = ''
    },
    // 评论
    replyClick () {
      this.replyShow = !this.replyShow
      this.isShow = false
    }
  }
}
</script>

<style lang = 'scss'>
  .frendsList {
    padding: 0 .3rem;
    ul {
      li {
        display: flex;
        margin-bottom: .2rem;
        border-bottom: 1px solid #e7e7e7;
        padding-bottom: .2rem;
        span.img {
          width: .8rem;
          height: .8rem;
          margin-right: .2rem;
          img {
            width: 100%;
            height:100%;
            display: block;
          }
        }
        .txt {
          width: calc(100% - 1rem);
          h4 {
            color: #296be4;
            font-size: 14px;
            margin-bottom: .1rem;
          }
          h5 {
            font-size: 12px;
            color: #666;
            font-weight: normal;
            margin: .2rem 0;
          }
          h6 {
            display: flex;
            align-items: center;
            position: relative;
            em.time {
              color: #999;
              margin-right: .2rem
            }
            font {
              color: #296BE4;
              font-weight: normal;
            }
            i {
              margin-left: auto;
              color: #6196f9;
              background: #EBEBEB;
              padding:0 .1rem;
              border-radius: 3px;
              .icon {
                font-size:16px;
                width: 16px;
                height: 16px;
              }
            }
            .reply {
              position: absolute;
              right: 0.8rem;
              padding: .1rem .2rem;
              color: #fff;
              display: flex;
              align-items: center;
              background: #373b3e;
              border-radius: 3px;
              b {
                display: flex;
                align-items: center;
                padding: 0 .2rem;
              }
              em.sjx {
                width: 0;
                height: 0;
                border-top:5px solid transparent;
                border-left: 6px solid #333333;
                border-bottom: 5px solid transparent;
                position: absolute;
                right: -6px;
              }
            }
          }
          p.zan {
            border-bottom: 1px solid #e4e1e1;
            padding:.1rem 0;
            font {
              color: #6196f9;
              margin-right: 5px;
            }
          }
        }
        .replyZan {
          background: #EBEBEB;
          border-radius: 3px;
          padding:.1rem .2rem;
          margin:.2rem 0 0 0;
          .replyList {
            margin:.1rem 0;
            .name {
              color: #6196f9
            }
            .text {
              color: #666
            }
          }
        }
      }
    }
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
  }
  .fadebot-enter, .fadebot-leave-to {
    opacity: 1;
    transform: translateY(10px);
  }
  #icon-comment path {
    color: #fff;
    fill: #fff;
  }
  .fixShu {
    position: fixed;
    bottom:0;
    left:0;
    width: 100%;
    height:50px;
    box-sizing: border-box;
    padding:.0 .2rem;
    display: flex;
    align-items: center;
    background: #E4E1E1;
    span {
      width: 82%;
      input {
        padding: .2rem;
        border:0;
        background: #fff;
        width:100%
      }
    }
    font {
      padding: .16rem .3rem;
      background: #42B983;
      color:#fff;
      margin-left:auto
    }
  }
</style>
