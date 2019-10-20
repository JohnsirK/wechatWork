<template>
  <footer class="footer">
    <router-link to = '/home' :class="$route.path.indexOf('home') !== -1 ? 'cur' : ''">
      <svg class="icon" aria-hidden = "true">
        <use xlink:href = "#icon-dibudaohanglan-"></use>
      </svg>
      微信
    </router-link>
    <router-link to = '/addressBook' :class="$route.path.indexOf('addressBook') !== -1 ? 'cur' : ''">
      <svg class="icon" aria-hidden = "true" style="width:.48rem;height:.48rem">
        <use xlink:href = "#icon-weimingmingwenjianjia_tongxunlu"></use>
      </svg>
      通讯录
    </router-link>
    <router-link to = '/findNew' :class="$route.path.indexOf('findNew') !== -1 ? 'cur' : ''">
      <svg class="icon" aria-hidden = "true">
        <use xlink:href = "#icon-faxian"></use>
      </svg>
      发现
    </router-link>
    <router-link to = '/findme' :class="$route.path.indexOf('findme') !== -1 ? 'cur' : ''">
      <svg class="icon" aria-hidden = "true">
        <use xlink:href = "#icon-wo"></use>
      </svg>
      我
    </router-link>
  </footer>
</template>

<script>
</script>

<style lang="scss">
.footer {
  height: 50px;
  background: #fcfcfc;
  border-top: 1px solid #d4d4d4;
  position:fixed;
  bottom:0;
  left:0;
  width:100%;
  display: flex;
  color:#666;
  a {
    color:#666;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    i {
      display: flex;
      align-items: center;
      font-size: 20px;
      min-height:28px;
    }
  }
  a.cur {
    color:#46bf18;
    // i {
    //   background: #42B983;
    // }
  }
  a:nth-child(2) {
    i{
      font-size: 26px;
    }
  }
}
</style>
