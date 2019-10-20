<template>
  <div class="singChat">
    <header>
      <span @click = "goBack">
        <svg class="icon" aria-hidden = "true" style="color:#fff;">
          <use xlink:href = "#icon-fanhui1"></use>
        </svg>
      </span>
      <font>
        {{objInfo.info.id}}
        与 {{objInfo.info ? objInfo.info.petname : ''}} 交谈中
      </font>
      <em>
        <svg class="icon" aria-hidden = "true" >
          <use xlink:href = "#icon-tianjiahaoyou"></use>
        </svg>
      </em>
    </header>
    <div class="content t4b5">
      <ul class="infoList" ref = 'list'>
        <li v-for = "(item, index) in dataList" :key = 'index'>
          <span :class="item.isSelf ? 'fr' : 'fl'">
            <img :src="item.isSelf ? imgList[0] : imgList[1]">
          </span>
          <font :class="item.isSelf ? 'fr' : 'fl'">
            {{item.text}}
            <i class="triangle"></i>
          </font>
        </li>
      </ul>
    </div>
    <footer>
      <span class="fl">
        <svg class="icon" aria-hidden = "true" style="width:.6rem;height:.6rem; color:#333" >
          <use xlink:href = "#icon-yuyin"></use>
        </svg>
      </span>
      <input type="text" v-model = 'text'>
      <span class="fr">
        <!-- <i class="iconfont icon-biaoqing"></i>
        <i class="iconfont icon-jiahao"></i> -->
        <button class="btnSend" @click = 'getData'>发送</button>
      </span>
    </footer>
  </div>
</template>

<script>
import axios from 'axios'
import img1 from '@/assets/images/31.jpg'
import img2 from '@/assets/images/32.jpg'
import {mapState, mapMutations} from 'vuex'
import localSession from '@/utils/localSession'
export default {
  data () {
    return {
      text: '',
      // 回答数组
      dataList: [],
      imgList: [img1, img2],
      // 交谈者信息
      objInfo: {
        info: JSON.parse(this.$route.query.item),
        index: this.$route.query.index
      }
    }
  },
  computed: {
    ...mapState(['saveList'])
  },
  methods: {
    ...mapMutations(['saveMessageList']),
    getData () {
      if (!this.text) {
        return false
      }
      this.dataList.push({
        text: this.text,
        isSelf: true
      })
      axios.post('http://www.ricky.kim/openapi/api/v2', {
        reqType: 0,
        perception: {
          'inputText': {
            'text': this.text
          },
          'inputImage': {
            'url': 'imageUrl'
          },
          'selfInfo': {
            'location': {
              'city': '北京',
              'province': '北京',
              'street': '信息路'
            }
          }
        },
        userInfo: {
          apiKey: '82a9db86010c4a1f914dbdde22b616be',
          userId: this.objInfo.index
        }
      }).then(res => {
        this.dataList.push({
          text: res.data.results[0].values.text,
          isSelf: false
        })
        this.$nextTick(() => {
          const h = this.$refs.list
          document.documentElement.scrollTop = h.scrollHeight
        })
        this.filterData()
        // this.saveMessageList(this.dataList)
        this.text = ''
      })
    },
    // 返回
    goBack () {
      this.$router.go(-1)
    },
    filterData () {
      if (!localSession.getSession('chatList')) {
        localSession.setSession('chatList', {[this.objInfo.info.id]: this.dataList})
      } else {
        let old = localSession.getSession('chatList')
        Object.keys(old).map(item => {
          if (this.objInfo.info.id === parseInt(item)) {
            let newObj = {
              [this.objInfo.info.id]: this.dataList
            }
            localSession.setSession('chatList', newObj)
          } else {
            let newObj = {
              [this.objInfo.info.id]: this.dataList
            }
            const all = Object.assign(newObj, old)
            localSession.setSession('chatList', all)
          }
          console.log(old)
        })
      }
    },
    init () {
      if (localSession.getSession('chatList')) {
        const old = localSession.getSession('chatList')
        Object.keys(old).map((item) => {
          Object.keys(old[item]).map((i) => {
            if (this.objInfo.info.id === parseInt(item)) {
              this.dataList.push(old[item][i])
            }
          })
        })
      }
    }
  },
  mounted () {
    this.init()
  }
}
</script>

<style lang="scss">
.singChat {
  position: absolute;
  top:0;
  left:0;
  height: 100%;
  width:100%;
  background: #ebebeb;
  z-index: 9;
  header {
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    background: #373b3e;
    height: 46px;
    color:#fff;
    display: flex;
    padding:0 .2rem;
    align-items: center;
    z-index: 9;
    span {
      margin-right:.4rem;
    }
    font {
      border-left: 1px solid #7d7c7c;
      padding-left:.2rem;
      font-size: 14px;
    }
    em {
      margin-left: auto;
    }
  }
  footer {
    background: #f5f5f5;
    height: 50px;
    border-top: 1px solid #e0e0e0;
    position: fixed;
    bottom:0;
    left:0;
    width:100%;
    box-sizing: border-box;
    padding: 0 .2rem;
    display: flex;
    align-items: center;
    i {
      font-size:28px;
      color: #666
    }
    span.fr {
      margin-left: auto;
      .btnSend {
        background: #22b718;
        border:none;
        padding: .2rem;
        color:#fff;
        width:1.2rem;
        border-radius: 3px;
      }
    }
    input {
      padding:.2rem;
      width:69.7%;
      margin: 0 .2rem;
      background: none;
      border-bottom: 1px solid #ddd;
      border-top: 0;
      border-left: 0;
      border-right: 0;
    }
  }
  .infoList {
    margin-top:.2rem;
  }
  .infoList li{
    padding: 0 .2rem .2rem .2rem ;
    overflow: hidden;
    img {
      width:.8rem;
      background: #fff;
    }
    font {
     max-width: calc(100% - 2rem);
     background: #FFFFFF;
     box-sizing: border-box;
     padding:.2rem .2rem;
     border-radius: 3px;
     font-size:14px;
    }
    .fl {
      float:left;
      position: relative;
      img {
        margin-right:.2rem
      }
      .triangle {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 6px solid #fff;
        border-bottom: 5px solid transparent;
        position: absolute;
        top:.26rem;
        left:-6px;
      }
    }
    .fr {
      float:right;
      position: relative;
      img {
        margin-left:.2rem
      }
      .triangle {
        position: absolute;
        top:.26rem;
        right:-6px;
        width:0;
        height:0;
        border-top:5px solid transparent;
        border-left: 6px solid #24d618;
        border-bottom: 5px solid transparent;
      }
    }
    font.fr {
      background: #24d618;
    }
  }
}
</style>
