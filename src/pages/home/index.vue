<template>
  <div class="home">
    <all-head></all-head>
    <div class="content t4b5">
      <ul class="messageList">
        <li v-for = "(item, index) in dataList" :key = "index">
          <router-link :to = "{path: '/home/singChat', query: {item: JSON.stringify(item), index: index}}">
            <span>
              <img :src="item.headurl" alt="">
            </span>
            <div class="txt">
              <h4>
                {{item.remarks}}
                <font>16:12</font>
              </h4>
              <p>
                {{item.newMessage}}
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <all-footer></all-footer>
    <transition name = 'left'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import localSession from '@/utils/localSession'
import allHead from '@/components/global/head'
import allFooter from '@/components/global/footer'
import e1 from '@/assets/images/replaceAvatar_01.png'
import e2 from '@/assets/images/replaceAvatar_02.png'
import e3 from '@/assets/images/replaceAvatar_03.png'
import e4 from '@/assets/images/replaceAvatar_04.png'
import e5 from '@/assets/images/replaceAvatar_05.png'
import e6 from '@/assets/images/replaceAvatar_06.png'
export default {
  name: 'home',
  data () {
    return {
      // 动画
      transitionName: 'slide-left',
      // 对话列表
      dataList: [
        // headurl      对话人头像
        // remarks      对话人名字
        // newMessage   对话最新一条信息
        // sendObject   发送信息的对象 1是别人,0 是自己
        // messageBlob  消息内容
        {
          id: 1,
          'wxid': 'ididid1',
          'headurl': e1,
          'petname': '机器人聊天',
          'remarks': '机器人聊天',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        },
        {
          id: 2,
          'wxid': 'ididid2',
          'headurl': e2,
          'petname': '章三1',
          'remarks': '章三1',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        },
        {
          id: 3,
          'wxid': 'ididid3',
          'headurl': e3,
          'petname': '第三方我',
          'remarks': '第三方我',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        },
        {
          id: 4,
          'wxid': 'ididid4',
          'headurl': e4,
          'petname': 'safasf',
          'remarks': 'safasf',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        },
        {
          id: 5,
          'wxid': 'ididid5',
          'headurl': e5,
          'petname': '司法所',
          'remarks': '司法所',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        },
        {
          id: 6,
          'wxid': 'ididid6',
          'headurl': e6,
          'petname': '的烦恼和男的',
          'remarks': '的烦恼和男的',
          'newMessage': '请从通讯录的联系人进入机器人单人聊天',
          'sendObject': 1
        }
      ]
    }
  },
  components: {
    allHead,
    allFooter
  },
  methods: {
    // 是否第一次进入页面
    isWelcome () {
      if (!localSession.getSession('userinfo')) {
        this.$router.push('/login')
      } else {
        console.log('1')
      }
    }
  },
  mounted () {
    this.isWelcome()
  },
  beforeRouteUpdate (to, from, next) {
    let isBack = this.$router.isBack
    if (isBack) {
      this.transitionName = 'slide-right'
    } else {
      this.transitionName = 'slide-left'
    }
    this.$router.isBack = false
    next()
  }
}
</script>

<style lang="scss">
  .home {
    width:100%;
    height: 100%;
    overflow-x: hidden;
  }
  .messageList {
    li a{
      padding:.16rem;
      background: #fff;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      span {
        width: 1rem;
        height:1rem;
        margin-right: 0.1rem;
        img {
          width: 100%;
        }
      }
      .txt {
        width: calc(100% - 1.1rem);
        h4 {
          font-weight: normal;
          font-size: 14px;
          color: #38373c;
          display: flex;
          margin-bottom: .1rem;
          font {
            margin-left: auto;
            font-size:12px;
            color: #999
          }
        }
        p{
          color: #999;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  // 动画
  .left-enter-active {
    animation:left-in .2s linear
  }
  .left-leave-active {
    animation: left-out .2s linear
  }
  @keyframes left-in {
    0% {
      transform: translate3d(100%, 0, 0)
    }
    50% {
      transform: translate3d(50%, 0, 0)
    }
    100% {
      transform: translate3d(0, 0, 0)
    }
  }
  @keyframes left-out {
    0% {
      transform: translate3d(0, 0, 0)
    }
    50% {
      transform: translate3d(50%, 0, 0)
    }
    100% {
      transform: translate3d(100%, 0, 0)
    }
  }
</style>
