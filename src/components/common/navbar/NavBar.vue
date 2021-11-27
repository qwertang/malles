<!--  -->
<template>
  <div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name:'NavBar',
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
  .nav-bar{
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    font-weight: 600;
    box-shadow: 0 1px 1px pink;
    z-index: 9;
  }
  .left, .right{
    width: 60px;
  }
  .center{
    flex: 1;
    /*background-color: #42b983;*/
  }
</style>
