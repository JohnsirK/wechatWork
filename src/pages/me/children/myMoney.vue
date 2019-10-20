<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        我的钱包
      </span>
    </all-header>
    <div class="content t4 moneyList">
      <div class="top">
        <ul>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-shoufukuan1"></use>
            </svg>
            <p>收付款</p>
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-lingqian"></use>
            </svg>
            <p>零钱</p>
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-icon"></use>
            </svg>
            <p>银行卡</p>
          </li>
        </ul>
      </div>
      <div class="bot">
        <h4>
          腾讯服务
        </h4>
        <ul>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-hongbao"></use>
            </svg>
            面对面红包
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-shoujichongzhi"></use>
            </svg>
            手机充值
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-licaitong"></use>
            </svg>
            理财通
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-weilidaijieqian1"></use>
            </svg>
            微粒贷借钱
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-Qbichongzhi"></use>
            </svg>
            Q币充值
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-shenghuojiaofei"></use>
            </svg>
            生活缴费
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-chengshifuwu"></use>
            </svg>
            城市服务
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-xinyongqiahuankuan"></use>
            </svg>
            信用卡还款
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-tengxungongyi"></use>
            </svg>
            腾讯公益
          </li>
        </ul>
      </div>
      <div class="bot">
        <h4>
          第三方服务
        </h4>
        <ul>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-mobaidanche"></use>
            </svg>
            膜拜单车
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-didichuhang"></use>
            </svg>
            滴滴出行
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-huochepiao"></use>
            </svg>
            火车票机票
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-jiudian"></use>
            </svg>
            酒店
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-meituanwaimai"></use>
            </svg>
            美团外卖
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-daojia"></use>
            </svg>
            58到家
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-meilishuo"></use>
            </svg>
            美丽说
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-jingdongyouxuan"></use>
            </svg>
            京东优选
          </li>
          <li>
            <svg class="icon" aria-hilien = "true">
              <use xlink:href = "#icon-chihewanle"></use>
            </svg>
            吃喝玩乐
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
    return {}
  },
  components: {
    allHeader
  }
}
</script>

<style lang = 'scss'>
  .moneyList {
    .top {
      background: #666f76;
      ul {
        overflow: hilien;
        display: flex;
        li {
          display: flex;
          flex: 1;
          align-items: center;
          justify-content: center;
          color: #fff;
          flex-direction: column;
          min-height: 2rem;
          .icon {
            width: 36px;
            height: 36px;
            font-size: 36px;
          }
          p {
            margin-top: .2rem;
          }
        }
      }
    }
    .bot {
      h4 {
        background: #ecf0f3;
        padding:.2rem .3rem;
        color: #727375;
        font-weight: normal;
        font-size:14px;
      }
      ul {
        background: #fff;
        overflow: hidden;
      }
      li {
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33.3%;
        border-right: 1px solid #efebeb;
        border-bottom: 1px solid #efebeb;
        padding: .3rem 0;
        flex-direction: column;
        .icon {
          width: 32px;
          height:32px;
          font-size:32px;
          margin-bottom: .1rem;
        }
      }
      li:nth-child(3n + 3) {
        border-right: 0;
      }
    }
  }
</style>
