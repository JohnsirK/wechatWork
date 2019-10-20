<template>
  <div class="hello">
    <!-- <span @click = "btn">我是1</span> -->
    <swiper :options = "swiperOption">
      <swiper-slide>
        <!-- swiper-animate-effect   动画类型
        swiper-animate-duration 执行时间
        swiper-animate-delay    延迟时间 -->
        <img src="../assets/images/1.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/2.png" alt="">
      </swiper-slide>
      <swiper-slide>
        <h6 class="href">
          跳过 <b>{{num}}</b>
        </h6>
        <h4 class="title animated fadeInDown" v-if = "isAnimate">
          仿微信项目
        </h4>
        <h5 class="toHome">
          <template>
            <router-link to = '/login' class="fl animated zoomInLeft" v-if = "isAnimate">
              登录
            </router-link>
            <router-link to = '/reg' class = "fr animated zoomInRight" v-if = "isAnimate">
              注册
            </router-link>
          </template>
          <!-- <span>进入首页</span> -->
        </h5>
        <p class="info animated fadeInUp" v-if = "isAnimate">
          禁止用于商业用途 by @胖虎
        </p>
        <img src="../assets/images/3.jpg" alt="">
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import localSession from '@/utils/localSession'
export default {
  name: 'welcome',
  data () {
    let that = this
    return {
      // 是否需要动画
      isAnimate: false,
      // 定时器
      num: 5,
      // 计时器
      timer: null,
      // 是否第一次进
      isCookie: false,
      // swiper配置
      swiperOption: {
        // 光标形状
        grabCursor: true,
        // 抵抗率
        resistanceRatio: 0,
        // 事件
        on: {
          slideChange: function () {
            if (this.activeIndex === 2) {
              that.isAnimate = true
              // 跳过倒数
              that.jumpNum()
            } else {
              that.isAnimate = false
              clearInterval(this.timer)
            }
          }
        }
      }
    }
  },
  methods: {
    // 跳过倒数
    jumpNum () {
      this.num = 5
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.num--
          if (this.num === 0) {
            clearInterval(this.timer)
            this.$router.push('/home')
          }
        }, 1000)
      }
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '@/assets/css/main.scss';
.hello {
  width: $w100;
  height: $h100;
  h4.title {
    position: absolute;
    top:70px;
    left:0;
    right:0;
    color:#fff;
    font-size:24px;
    font-weight: normal;
    text-align: center;
  }
  h6.href {
    position: absolute;
    right:20px;
    top:20px;
    background: rgba(0,0,0,.6);
    border-radius: 3px;
    color:#fff;
    padding:4px 6px;
    font-size: 12px;
    b {
      font-weight: normal;
    }
  }
  h5.toHome {
    position: absolute;
    bottom:80px;
    left: 0;
    display: flex;
    justify-content: center;
    width:100%;
    a{
      border:1px solid #fff;
      color:#fff;
      font-size:16px;
      font-weight: normal;
      border-radius: 5px;
      padding:3% 15%;
      margin-right: .2rem;
    }
    a:last-child {
      margin-right: 0;
    }
    a.fl {
      background: #42B983;
      border:1px solid #42B983;
    }
    a.fr{
      background: #fff;
      border:1px solid #fff;
      color:#333
    }
  }
  p.info {
    color:#dcdcdc;
    position: absolute;
    bottom:50px;
    left:0;
    text-align: center;
    font-size:12px;
    width: 100%;
  }
  .swiper-container, .swiper-slide img {
    width: 100%;
    height: 100%;
  }
}
</style>
