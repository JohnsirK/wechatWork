<template>
  <div class="childHome" style = 'background:#fff'>
    <all-header>
      <span slot = 'title'></span>
      <span slot = 'titleTwo'>
        朋友圈
      </span>
    </all-header>
    <div class="content t4 bg0">
      <frends-top :userImg = 'userImg'></frends-top>
      <div class="bgCon">
        <!-- 个人朋友圈内容 -->
        <frends-list :itemJson = "item"></frends-list>
      </div>
    </div>
  </div>
</template>

<script>
import allHeader from '@/components/global/header'
import img from '@/assets/images/31.jpg'
// 朋友圈背景墙
import frendsTop from '@/components/addressBook/frendsTop'
// 朋友圈列表
import frendsList from '@/components/addressBook/frendsList'
export default {
  data () {
    return {
      userImg: img,
      // 背景墙
      bgImg: '',
      item: JSON.parse(this.$route.query.item)
    }
  },
  components: {
    allHeader,
    frendsTop,
    frendsList
  },
  methods: {
  },
  mounted () {
    console.log(this.item)
  }
}
</script>

<style lang = 'scss'>
  .bgCon {
    margin: .8rem 0 0 0;
    padding-bottom: 20px;
  }
</style>
