<template>
  <div class="bgWill">
    <div class="imgBg" v-if = 'bgImg'>
      <img :src="bgImg">
    </div>
    <template v-else>
      <span >
        轻触更换主题图片
      </span>
      <input type="file" class="imgUpload" @change = 'imgUpload($event)' accept = 'image/jpeg, image/png, image/jpg'>
    </template>
    <div class="imgTx">
      <img :src="userImg " alt="" v-if = 'userImg'>
      <svg class="icon" aria-hidden = "true" v-else>
        <use xlink:href = "#icon-zanwutouxiang"></use>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: ['userImg'],
  data () {
    return {
      bgImg: ''
    }
  },
  methods: {
    // 更换背景墙
    imgUpload (e) {
      // 获取input里面的文件组
      const file = e.target.files[0]
      // 实例化fileReader接口，提供读取文件的方法和事件
      let reader = new FileReader()
      console.log(file)
      // 以DataURL格式读取文件内容
      reader.readAsDataURL(file)
      // 读取操作成功时触发。
      // 此处用箭头函数。如果使用普通函数的话this需要保存
      reader.onload = (e) => {
        console.log(e.target)
        // e.target.result就是图片对象
        this.bgImg = e.target.result
      }
    }
  }
}
</script>

<style lang = 'scss'>
.bgWill {
  background: #6b6868;
  min-height: 5rem;
  max-height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  span {
    color: #333;
    font-size: 14px;
  }
  .imgTx {
    border-radius: 5px;
    position: absolute;
    right:.2rem;
    bottom: -0.6rem;
    width: 1.4rem;
    height:1.4rem;
    border:3px solid #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EBEBEB;
    .icon {
      width: 0.6rem;
      height:0.6rem;
      font-size:0.6rem;
      color: #a5aba8
    }
    img {
      width: 100%;
    }
  }
  .imgBg {
    position: absolute;
    width:100%;
    height:100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.imgUpload {
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  opacity: 0;
  overflow: hidden;
}
</style>
