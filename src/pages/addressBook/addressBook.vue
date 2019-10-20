<template>
  <div class="home">
    <all-head></all-head>
    <div class="content t4b5 bg0 pos" >
      <ul class = "tpoNav">
        <li>
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-xindepengyou"></use>
          </svg>
          新的朋友
        </li>
        <li>
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-qunliao"></use>
          </svg>
          群聊
        </li>
        <li>
          <svg class="icon" aria-hidden = "true">
            <use xlink:href = "#icon-weixinbiaoqian"></use>
          </svg>
          标签
        </li>
        <li>
          <svg class="icon" aria-hidden = "true" style="background: #42B983">
            <use xlink:href = "#icon-gongzhonghao"></use>
          </svg>
          公众号
        </li>
      </ul>
      <div class="addressList" ref = 'addlist'>
        <dl v-for = '(item, key, index) in book' :key = "index" class="bookOne">
          <dt class='dt' v-if = 'item.length > 0'>{{key}}</dt>
          <dd v-for = '(i, index) in item' :key = 'index'>
            <router-link :to = "{name: 'detail', query: {info: JSON.stringify(i)}}">
              <span>
                <img :src="i.headurl" alt="">
              </span>
              {{i.remarks ? i.remarks : i.petname}}
            </router-link>
          </dd>
        </dl>
        <h6>
          22位联系人
        </h6>
      </div>
      <div class="sortList">
        <ul>
          <li v-for = '(item, index) in sortList' :key = 'index' @touchstart = 'startNum(item)' @touchend = 'endNum'>
            {{item}}
          </li>
        </ul>
      </div>
      <div class="isNum" v-if = 'isNum'>
        {{lettNum}}
      </div>
    </div>
    <all-footer></all-footer>
    <transition name = 'left'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import allHead from '@/components/global/head'
import allFooter from '@/components/global/footer'
import img1 from '@/assets/images/31.jpg'
import img2 from '@/assets/images/32.jpg'
import e1 from '@/assets/images/replaceAvatar_01.png'
import e2 from '@/assets/images/replaceAvatar_02.png'
import e3 from '@/assets/images/replaceAvatar_03.png'
import e4 from '@/assets/images/replaceAvatar_04.png'
import e5 from '@/assets/images/replaceAvatar_05.png'
import e6 from '@/assets/images/replaceAvatar_06.png'
import e7 from '@/assets/images/replaceAvatar_07.png'
import e8 from '@/assets/images/replaceAvatar_08.png'
export default {
  data () {
    return {
      // 是否显示索引
      isNum: false,
      // 当前数字
      lettNum: '',
      imgList: [img1, img2],
      // 同学录数据
      book: {
        A: [
          {
            'id': 1,
            'wxid': 'achuqiao',
            'headurl': e1,
            'petname': 'a楚乔',
            'sex': 1,
            'remarks': '楚乔',
            'sdasd': '披荆斩棘',
            'phone': '13333333333',
            'sendobject': 1,
            'gallery': [
              e1, e2, e3
            ],
            'district': '奴籍少女',
            'source': '通过搜索手机号添加',
            'newmeassage': '从前有个剑客，他人很冷，心很冷，剑很冷，最后冷死了',
            'Messageblob': ''
          },
          {// 没有备注
            'id': 2,
            'wxid': 'ayuwenyue',
            'headurl': e2,
            'petname': 'a宇文玥',
            'sex': 0,
            'remarks': '',
            'sdasd': '涅槃而生',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '宇文府',
            'source': '通过搜索微信号添加',
            'newmeassage': '你的肩膀，那么近却那么远，到最后想说的话都未曾讲。!',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        B: [],
        C: [
          {
            'id': 3,
            'wxid': 'caiawei',
            'headurl': e3,
            'petname': '采薇',
            'sex': 1,
            'remarks': '',
            'sdasd': '',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '淳公主的侍女',
            'source': '通过群聊添加',
            'newmeassage': '一发型师在给一个女客人做头发的时候把她脸给烫伤了，后来经过协商。。。。他把她给娶了。。。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 4,
            'wxid': 'chenchangsheng',
            'headurl': e4,
            'petname': '陈长生',
            'sex': 0,
            'remarks': '',
            'sdasd': '逆天改命',
            'phone': '13002566500',
            'gallery': [
              e1, e2, e3
            ],
            'district': '河边',
            'source': '通过搜索微信号添加',
            'newmeassage': '你因为穷做过什么违心的事？——上班。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 5,
            'wxid': 'chenyuan',
            'headurl': e5,
            'petname': '程鸢',
            'sex': 0,
            'remarks': '',
            'sdasd': '',
            'phone': '13002566500',
            'gallery': [
              e1, e2, e3
            ],
            'district': '燕洵手下将军',
            'source': '通过群聊添加',
            'newmeassage': '跟长辈聊天时，我们总是用尽方法想讨他们开心，而长辈三言两语就可以让我们烦心。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        D: [
          {
            'id': 6,
            'wxid': 'dinglan',
            'headurl': e6,
            'petname': '丁澜',
            'sex': 0,
            'remarks': '临惜',
            'sdasd': '',
            'phone': '13002566500',
            'gallery': [
              e1, e2, e3
            ],
            'district': '楚乔的五哥',
            'source': '通过搜索微信号添加',
            'newmeassage': '越是没有能力改变自己生活的人，越喜欢批评别人的改变。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        E: [],
        F: [
          {
            'id': 7,
            'wxid': 'fengmian',
            'headurl': e7,
            'petname': '风眠',
            'sex': 0,
            'remarks': '风眠',
            'sdasd': '',
            'phone': '13002566500',
            'gallery': [
              e1, e2, e3
            ],
            'district': '燕洵的书童',
            'source': '通过群聊添加',
            'newmeassage': '身边总有几个这样的朋友，第一次遇见斯斯文文的，熟识之后会发与不知道是哪个精神病院放出来的。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        G: [],
        H: [
          {
            'id': 8,
            'wxid': 'hexiao',
            'headurl': e8,
            'petname': '贺萧',
            'sex': 0,
            'remarks': '',
            'sdasd': '',
            'phone': '13002566500',
            'gallery': [
              e1, e2, e3
            ],
            'district': '燕洵的书童',
            'source': '通过搜索手机号添加',
            'newmeassage': '全国人民都上听了，单吊敬业福。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        I: [],
        J: [
          {
            'id': 9,
            'wxid': 'jinghan',
            'headurl': e2,
            'petname': '景邯',
            'sex': 0,
            'remarks': '',
            'sdasd': '',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '大夏云绸封地景小王爷',
            'source': '通过群聊添加',
            'newmeassage': '春节发现，原来‘喜新厌旧”还可以说成‘辞旧迎新”这般高尚！',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 10,
            'wxid': 'jingsi',
            'headurl': e3,
            'petname': '锦偲',
            'sex': 1,
            'remarks': '',
            'sdasd': '',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '青山院大丫鬟',
            'source': '通过群聊添加',
            'newmeassage': '刚领导问我：‘你觉得这个项目最大的风险是什么？” ，我：‘我怕加班猝死。。。”',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        K: [],
        L: [
          {
            'id': 11,
            'wxid': 'lanshuyi',
            'headurl': e1,
            'petname': '兰淑仪',
            'sex': 1,
            'remarks': '兰淑仪',
            'sdasd': '',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '大魏淑仪，来历成谜。',
            'source': '通过群聊添加',
            'newmeassage': '名人用过的东西叫‘文物”；凡人用过的视为‘废物”。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 12,
            'wxid': 'liangshaoqing',
            'headurl': e2,
            'petname': '梁少卿',
            'sex': 0,
            'remarks': '',
            'sdasd': '',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '二货书生',
            'source': '通过搜索手机号添加',
            'newmeassage': '名人酗酒称‘豪饮”；凡人多喝叫‘贪杯”。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 13,
            'wxid': 'lichun',
            'headurl': e3,
            'petname': '李策',
            'sex': 0,
            'remarks': '',
            'sdasd': '默默守护',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '南梁太子',
            'source': '通过群聊添加',
            'newmeassage': '名人蓬头垢面谓‘艺术气质”；凡人不修边幅叫‘流里流气”。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        M: [
          {
            'id': 14,
            'wxid': 'mengfeng',
            'headurl': e1,
            'petname': '蒙枫',
            'sex': 1,
            'remarks': '',
            'sdasd': '我是个杀手！',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '往生营',
            'source': '通过搜索手机号添加',
            'newmeassage': '名人的空话谓‘指导”；凡人的实话叫‘唠叨”。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        N: [],
        O: [],
        P: [],
        Q: [],
        R: [],
        S: [
          {
            'id': 15,
            'wxid': 'shugeuifei',
            'headurl': e2,
            'petname': '魏贵妃',
            'sex': 1,
            'remarks': '',
            'sdasd': '本宫乏了~',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '魏阀',
            'source': '通过群聊添加',
            'newmeassage': '名人的空话谓‘指导”；凡人的实话叫‘唠叨”。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        T: [],
        U: [],
        V: [],
        W: [
          {
            'id': 16,
            'wxid': 'wudaoya',
            'headurl': e3,
            'petname': '乌道涯',
            'sex': 0,
            'remarks': '',
            'sdasd': '本宫乏了~',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '燕北',
            'source': '通过群聊添加',
            'newmeassage': '钱财多的回家少，美貌多的穿衣少，想法多的成事少，劳累多的收入少，权力多的时间少，情人多的安宁少，朋友多的困难少，锻炼多的疾病少。 ',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        X: [
          {
            'id': 17,
            'wxid': '812571880',
            'headurl': e1,
            'petname': '百里辰',
            'sex': 1,
            'sdasd': '披荆斩棘',
            'phone': '15800319949',
            'sendobject': 1,
            'gallery': [
              e1, e2, e3
            ],
            'district': '上海 闵行',
            'newmeassage': '你的肩膀，那么近却那么远，到最后想说的话都未曾讲。',
            'Messageblob': ''
          },
          {
            'id': 18,
            'wxid': 'xiaoheilong',
            'headurl': e2,
            'petname': '小黑龙',
            'sex': 1,
            'remarks': '吃货',
            'sdasd': '我是个小吃货，啦啦啦啦~',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '大陆道尊',
            'source': '通过群聊添加',
            'newmeassage': '皇叔是仁德的；爱民是如子的；特长是会哭的；眼泪是充足的。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 19,
            'wxid': 'xiaoyu',
            'headurl': e3,
            'petname': '萧玉',
            'sex': 1,
            'remarks': '',
            'sdasd': '美女~',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '南梁',
            'source': '通过群聊添加',
            'newmeassage': '孔明是伟大的；治国是有方的；用兵是如神的；放火是专长的。 ',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        Y: [
          {
            'id': 20,
            'wxid': 'yexun',
            'headurl': e1,
            'petname': '燕洵',
            'sex': 0,
            'remarks': '',
            'sdasd': '楚乔......',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '西凉',
            'source': '通过群聊添加',
            'newmeassage': '庞统是可惜的；出场是很少的；长相是挺丑的；死的是很惨的。',
            'sendobject': 1,
            'Messageblob': ''
          },
          {
            'id': 21,
            'wxid': 'yuanchun',
            'headurl': e2,
            'petname': '元淳',
            'sex': 1,
            'remarks': '',
            'sdasd': '喜欢燕洵',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '西魏公主',
            'source': '通过群聊添加',
            'newmeassage': '云长是红脸的；胡子是很长的；自负是肯定的；倒霉是迟早的。',
            'sendobject': 1,
            'Messageblob': ''
          }
        ],
        Z: [
          {
            'id': 22,
            'wxid': 'zhaosong',
            'headurl': e3,
            'petname': '赵嵩',
            'sex': 0,
            'remarks': '',
            'sdasd': '小八小八小八',
            'phone': '13000000000',
            'gallery': [
              e1, e2, e3
            ],
            'district': '大魏十三皇子',
            'source': '通过群聊添加',
            'newmeassage': '翼德是莽撞的；粗中是有细的；嗓门是挺大的；睡觉是睁眼的。',
            'sendobject': 1,
            'Messageblob': ''
          }

        ]
      }
    }
  },
  components: {
    allHead,
    allFooter
  },
  computed: {
    // 右侧索引
    sortList () {
      let sortNumList = []
      for (let i = 65; i <= 90; i++) {
        sortNumList.push(String.fromCharCode(i))
      }
      return sortNumList
    }
  },
  methods: {
    // 滑到指定地方
    startNum (value) {
      this.isNum = true
      this.lettNum = value
    },
    endNum () {
      this.isNum = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
  .tpoNav {
    padding: 0 .3rem;
    li {
      padding:.1rem 0;
      border-bottom: 1px solid #f3eeee;
      display: flex;
      align-items: center;
      font-size:14px;
      color: #2a2a2a;
      .icon {
        width: .8rem;
        height: .8rem;
        margin-right: .2rem
      }
      #icon-gongzhonghao path {
        fill: #fff
      }
    }
  }
  .addressList {
    dt {
      background: #EBEBEB;
      color:#808080;
      padding:.1rem .2rem;
    }
    dd {
      padding:.1rem .3rem;
      border-bottom: 1px solid #f3eeee;
      font-size:14px;
      color: #2a2a2a;
      a {
        display: flex;
        align-items: center;
        span {
          width:.8rem;
          height:.8rem;
          margin-right: .2rem;
          img {
            width:100%;
          }
        }
      }
    }
    h6 {
      color: #999;
      font-weight: normal;
      text-align: center;
      padding: .2rem 0;
      font-size:14px;
    }
  }
  .sortList {
    background: rgba(0, 0, 0, .3);
    position: fixed;
    top:10%;
    right:.2rem;
    padding:.1rem .06rem;
    border-radius: 10px;
    font-size:12px;
    color: #FFF;
    li {
      text-align: center;
      padding: .06rem 0;
    }
  }
  .isNum {
    width:2rem;
    height:2rem;
    border-radius: 10px;
    background: rgba(0, 0, 0, .3);
    color: #fff;
    font-size:48px;
    position: fixed;
    top:50%;
    left:50%;
    margin-top:-1rem;
    margin-left:-1rem;
    display: flex;
    justify-content: center;
    align-items: center;
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
