<template>
  <div class="childHome">
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>我的相册</span>
    </all-header>
    <div class="content t4 bg0">
      <ul class="divList" v-for = '(item, index) in dataJson' :key = 'index + 11'>
        <h4>
          <b>{{item.albumday}}</b>
          <font>5月</font>
        </h4>
        <li class="haveImg" v-if = 'item.diagram.length > 0' v-for = '(i, index) in item.diagram' :key = 'index + 22'>
          <span>
            <yd-lightbox>
              <yd-lightbox-img v-for = '(ii, index) in i.diagramimg' :key = 'index + 33' :src = 'ii'></yd-lightbox-img>
            </yd-lightbox>
          </span>
          <p>
            {{i.diagramtext}}
            <font>
              共 {{i.diagramimg.length}}张
            </font>
          </p>
        </li>
        <li class="noImg" v-if = 'item.puretext.length > 0' v-for = '(i, index) in item.puretext' :key = 'index + 44'>
          {{i}}
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
          'albummonth': '5月',
          'albumday': '26',
          'puretext': [
            '人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。'
          ],
          'diagram': [
            {
              'diagramimg': [
                e1, e2
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4, e5, e6
              ],
              'diagramtext': '胖兔'
            }
          ]

        },
        {
          'albummonth': '5月',
          'albumday': '20',
          'puretext': [

          ],
          'diagram': [
            {
              'diagramimg': [
                e1
              ],
              'diagramtext': '人生很多事，终究是会随着时间好起来的。像很多人原本只是胖，久了就变好胖。'
            }
          ]

        },
        {
          'albummonth': '5月',
          'albumday': '10',
          'puretext': [
            '福建福清发现千年古墓 出土精美鱼纹砖',
            '陕西将每年发布消费环境指数',
            '英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙'
          ],
          'diagram': []
        },
        {
          'albummonth': '4月',
          'albumday': '20',
          'puretext': [
            '福建福清发现千年古墓 出土精美鱼纹砖',
            '陕西将每年发布消费环境指数',
            '英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙'
          ],
          'diagram': [
            {
              'diagramimg': [
                e1, e2, e3, e4, e5, e6
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1, e2, e3
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1
              ],
              'diagramtext': '胖兔'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4, e5
              ],
              'diagramtext': '胖兔'
            }
          ]
        },
        {
          'albummonth': '3月',
          'albumday': '06',
          'puretext': [
            '福建福清发现千年古墓 出土精美鱼纹砖',
            '陕西将每年发布消费环境指数',
            '英国警方继续搜捕曼彻斯特恐袭案嫌疑人同伙'
          ],
          'diagram': [
            {
              'diagramimg': [
                e1, e2
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1
              ],
              'diagramtext': '胖兔'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4, e5, e6
              ],
              'diagramtext': '美女'
            },
            {
              'diagramimg': [
                e1, e2, e3, e4
              ],
              'diagramtext': '胖兔'
            }
          ]
        }
      ]
    }
  },
  components: {
    allHeader
  }
}
</script>

<style lang="scss">
  .t4 {
    padding: 46px 0 0 0;
    min-height: calc(100% - 0px);
  }
  .divList {
    overflow: hidden;
    padding: .3rem;
    position: relative;
    h4 {
      position: absolute;
      top: .3rem;
      left:.3rem;
      b {
        font-size: 20px;
      }
      font {
        color: #666;
        font-weight: normal;
      }
    }
    li {
      margin-bottom: .2rem;
    }
    li.haveImg {
       width: 85%;
       float:right;
       display: flex;
       span {
         margin-right: .1rem;
         width: 1.2rem;
         height: 1.2rem;
         position: relative;
       }
       img {
         position: absolute;
         top:0;
         left:0;
         display: block;
         width:100%;
       }
       p {
         width: calc(100% - 1.3rem);
         font {
           display: block;
           margin-top:.2rem;
           font-size:12px;
           color: #999
         }
       }
    }
    li.noImg {
      display: flex;
      background: #ebebeb;
      float:right;
      width: 85%;
      box-sizing: border-box;
      padding:.1rem .2rem;
    }
  }
</style>
