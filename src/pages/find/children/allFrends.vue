<template>
  <div class="childHome bg0">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        朋友圈
      </span>
    </all-header>
    <div class="content t4 bg0" style = 'min-height: calc(100% - 0px);'>
      <frends-top :userImg = 'userImg'></frends-top>
      <div class="frendsList">
        <ul>
          <li v-for = '(item, index) in dataJson' :key = 'index'>
            <span class="img">
              <img :src="item.headurl" alt="">
            </span>
            <div class="txt">
              <h4>
                {{item.remarks ? item.remarks : item.petname}}
              </h4>
              <h5>
                {{item.statements}}
              </h5>
              <div>
                <yd-lightbox :num = 'item.postimage.length'>
                  <yd-lightbox-img v-for = '(img, index) in item.postimage' :src = 'img' :original = 'img' :key = "index"></yd-lightbox-img>
                  <yd-lightbox-txt>
                    <div slot = content>
                      <p>{{item.statements}}</p>
                    </div>
                  </yd-lightbox-txt>
                </yd-lightbox>
              </div>
              <h6>
                <em class = 'time'>{{item.time}}</em>
                <i @click = 'oneClick(item)'>
                  <svg class="icon" aria-hidden = "true">
                    <use xlink:href = "#icon-gengduo"></use>
                  </svg>
                </i>
                <transition name = 'fade'>
                  <span class="reply" v-if = '!item.flag'>
                    <em class='sjx'></em>
                    <b @click = 'clickzan(item)'>
                      <svg class="icon" aria-hidden = "true">
                        <use xlink:href = "#icon-zan1"></use>
                      </svg>
                      {{item.suporthtml}}
                    </b>
                    <b @click = 'replyClick(item)'>
                      <svg class="icon" aria-hidden = "true">
                        <use xlink:href = "#icon-comment"></use>
                      </svg>
                      评论
                    </b>
                  </span>
                </transition>
              </h6>
              <div class="replyZan" v-if = 'item.like.length > 0 || item.comment.length > 0'>
                <p class="zan" v-if = 'item.like.length > 0'>
                  <font  v-for = '(i, index) in item.like' :key = 'index'>
                    {{i}},
                  </font>
                </p>
                <p class = 'replyList' v-if = 'item.comment.length > 0' v-for = '(i, index) in item.comment' :key = 'index'>
                  <span class = 'name'>
                    {{i.remarks ? i.remarks : i.petname}}:
                  </span>
                  <font class='text'>
                    {{i.commentext}}
                  </font>
                </p>
              </div>
            </div>
            <transition name = 'fadebot'>
              <div class="fixShu" v-if = 'item.criticism'>
                <span>
                  <input type="text" placeholder="说点什么..." v-model = "message">
                </span>
                <font @click = 'send(item)'>
                  发送
                </font>
              </div>
            </transition>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import img from '@/assets/images/31.jpg'
import e1 from '@/assets/images/replaceAvatar_01.png'
import e2 from '@/assets/images/replaceAvatar_02.png'
import e3 from '@/assets/images/replaceAvatar_03.png'
import e4 from '@/assets/images/replaceAvatar_04.png'
import e5 from '@/assets/images/replaceAvatar_05.png'
import e6 from '@/assets/images/replaceAvatar_06.png'
import localSession from '@/utils/localSession'
// 朋友圈背景墙
import frendsTop from '@/components/addressBook/frendsTop'
export default {
  data () {
    return {
      userImg: img,
      // 当前点击的是哪个
      indexNum: null,
      userinfo: localSession.getSession('userinfo'),
      // 是否点击更多
      isShow: false,
      // 点赞
      zan: false,
      // 回复消息
      message: '',
      // 评论是否显示
      replyShow: false,
      // 朋友圈数据
      dataJson: [
        {
          'wxid': 'chenchangsheng',
          'headurl': e1,
          'petname': '陈长生',
          'sex': 0,
          'remarks': '',
          'statements': '逆天改命',
          'time': '20分钟前',
          'postimage': [

          ],
          'like': ['楚乔', '嗯'],
          'comment': [],
          'reviewshow': false,
          'reviewhide': false,
          'criticism': false,
          'flag': true,
          'suporthtml': '赞'
        }, {
          'wxid': '812571880',
          'headurl': e2,
          'petname': '百里辰',
          'sex': 1,
          'remarks': '',
          'statements': '身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。',
          'time': '5分钟前',
          'postimage': [
            e1, e2, e3
          ],
          'like': [
            '嗯'
          ],
          'comment': [
            {
              'wxid': 'enen',
              'petname': '嗯',
              'remarks': '嗯',
              'commentext': '看好你呦！'
            },
            {
              'wxid': 'achuqiao',
              'petname': 'a楚乔',
              'remarks': '楚乔',
              'commentext': '披荆斩棘'
            }
          ],
          'reviewshow': false,
          'reviewhide': false,
          'criticism': false,
          'flag': true,
          'suporthtml': '赞'
        },
        {
          'wxid': 'chenyuan',
          'headurl': e4,
          'petname': '程鸢',
          'sex': 0,
          'remarks': '',
          'statements': '',
          'time': '20分钟前',
          'postimage': [
            e1
          ],
          'like': [],
          'comment': [
            {
              'wxid': 'enen',
              'petname': '嗯',
              'remarks': '嗯',
              'commentext': '看好你呦！'
            },
            {
              'wxid': 'achuqiao',
              'petname': 'a楚乔',
              'remarks': '楚乔',
              'commentext': '披荆斩棘'
            }
          ],
          'reviewshow': false,
          'reviewhide': false,
          'criticism': false,
          'flag': true,
          'suporthtml': '赞'
        },
        {
          'wxid': 'shugeuifei',
          'headurl': e5,
          'petname': '魏贵妃',
          'sex': 0,
          'remarks': '',
          'statements': '',
          'time': '1小时前',
          'postimage': [
            e1, e6
          ],
          'like': [],
          'comment': [
            {
              'wxid': 'enen',
              'petname': '嗯',
              'remarks': '嗯',
              'commentext': '看好你呦！'
            },
            {
              'wxid': 'achuqiao',
              'petname': 'a楚乔',
              'remarks': '楚乔',
              'commentext': '披荆斩棘'
            }
          ],
          'reviewshow': false,
          'reviewhide': false,
          'criticism': false,
          'flag': true,
          'suporthtml': '赞'
        }
      ]
    }
  },
  components: {
    allHeader,
    frendsTop
  },
  methods: {
    // 打开
    oneClick (item) {
      item.flag = !item.flag
    },
    // 点赞
    clickzan (item) {
      if (item.suporthtml === '赞') {
        item.suporthtml = '取消'
        item.like.push(this.userinfo.username)
      } else {
        item.suporthtml = '赞'
        item.like.pop()
      }
      item.flag = true
    },
    // 回复
    send (item) {
      if (!this.message) {
        this.$dialog.toast({
          mes: '请输入评论内容',
          timeout: 1500,
          icon: 'error'
        })
      } else {
        item.comment.push({
          'wxid': this.userinfo.username,
          'petname': this.userinfo.username,
          'commentext': this.message
        })
      }
      this.message = ''
      item.criticism = false
      console.log(item)
    },
    // 评论
    replyClick (item) {
      item.criticism = !item.criticism
      item.flag = true
      // this.replyShow = !this.replyShow
      // this.isShow = false
    }
  },
  mounted () {
    console.log(this.userinfo.username)
  }
}
</script>

<style lang="scss">
  .frendsList {
      padding:.8rem .3rem;
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
      z-index: 2;
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
