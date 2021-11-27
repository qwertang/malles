<template>
  <div class="back-top">
    <i class="iconfont icon-xiangshang3"></i>
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
  .icon-xiangshang3{
    color: palevioletred;
    font-size: 65px;
    /*background-color: pink;*/
    /*border-radius: 40%;*/
  }
  .back-top{
    position: fixed;
    right: 10px;
    bottom: 70px;
    z-index: 10;
  }
</style>