<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        我的收藏
      </span>
    </all-header>
    <div class="content t4 saveList">
      <ul>
        <li v-for = '(item, index) in dataJson' :key = 'index'>
          <h4>
            <span>
              <img :src="item.headurl" alt="">
            </span>
            <font>
              {{item.remarks ? item.remarks : item.petname}}
            </font>
            <em>
              {{item.collectime}}
            </em>
          </h4>
          <div class="txt">
            <p v-if = 'item.collectext'>
              {{item.collectext}}
            </p>
            <img :src="item.collectimg" alt="" v-if = 'item.collectimg'>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import img1 from '@/assets/images/10.gif'
import e1 from '@/assets/images/replaceAvatar_01.png'
import e2 from '@/assets/images/replaceAvatar_02.png'
import e3 from '@/assets/images/replaceAvatar_03.png'
import e4 from '@/assets/images/replaceAvatar_04.png'
import e5 from '@/assets/images/replaceAvatar_05.png'
import e6 from '@/assets/images/replaceAvatar_06.png'
export default {
  data () {
    return {
      imgUrl: img1,
      // 数据
      dataJson: [
        {
          'wxid': 'achuqiao',
          'headurl': e1,
          'petname': 'a楚乔',
          'sex': 1,
          'remarks': '楚乔',
          'collectext': '儿童节快到了，这边为大家推荐一款宝宝性格养成书哈。月销近万哦，会发声的绘本故事呢',
          'collectimg': '',
          'collectime': '今天'
        },
        {
          'wxid': 'caiawei',
          'headurl': e2,
          'petname': '采薇',
          'sex': 1,
          'remarks': '',
          'collectext': '',
          'collectimg': e4,
          'collectime': '昨天'
        },
        {
          'wxid': 'liangshaoqing',
          'headurl': e3,
          'petname': '梁少卿',
          'sex': 0,
          'remarks': '',
          'collectext': '',
          'collectimg': e6,
          'collectime': '昨天'
        },
        {
          'wxid': 'chenchangsheng',
          'headurl': e6,
          'petname': '陈长生',
          'sex': 0,
          'remarks': '',
          'collectext': '思落',
          'collectimg': '',
          'collectime': '昨天'
        },
        {
          'wxid': 'ayuwenyue',
          'headurl': e5,
          'petname': 'a宇文玥',
          'sex': 0,
          'remarks': '',
          'collectext': '',
          'collectimg': e1,
          'collectime': '昨天'
        }
      ]
    }
  },
  components: {
    allHeader
  }
}
</script>

<style lang = "scss">
  .saveList ul {
    li {
      background: #fff;
      padding: .3rem;
      margin-bottom: .2rem;
      box-shadow: 0px 2px 10px rgba(195, 195, 195, .2);
      h4 {
        display: flex;
        align-items: center;
        margin-bottom: .2rem;
        span {
          width: .6rem;
          border-radius: .6rem;
          overflow: hidden;
          margin-right: 5px;
          img {
            width: 100%;
            height: 100%;
            display: block;
          }
        }
        em {
          margin-left: auto;
          font-size:12px;
          color: #999
        }
      }
      p {
        color: #666;
        padding: 0 0 .2rem 0;
      }
      img {
        max-width: 100%;
        min-width: 32.3%;
      }
    }
    li:last-child {
      margin-bottom: 0;
    }
  }
</style>
