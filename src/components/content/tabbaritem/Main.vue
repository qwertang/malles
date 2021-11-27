<!--  -->
<template>
  <tab-bar>
  	<Tabitem path="/home">
  		<span class="iconfont icon-shouye" slot="item-icon"></span>
  		<div slot="item-text">首页</div>
  	</Tabitem>
  	<Tabitem path="/categar">
  		<span class="iconfont icon-fenlei" slot="item-icon"></span>
  		<div slot="item-text">分类</div>
  	</Tabitem>
  	<Tabitem path="/cart">
  		<span class="iconfont icon-gouwucheman" slot="item-icon"></span>
  		<div slot="item-text">购物车</div>
  	</Tabitem>
  	<Tabitem path="/profile">
  		<span class="iconfont icon-wode" slot="item-icon"></span>
  		<div slot="item-text">我的</div>
  	</Tabitem>
  </tab-bar>
</template>

<script>

import TabBar from '../../common/tabbar/TabBar'
import Tabitem from '../../common/tabbar/Tabitem.vue'


export default {
  name:'MainTbaBar',
  data () {
    return {
    }
  },
	components:{
		TabBar,
		Tabitem
	},

}
</script>

<style  scoped>
  .icon-shouye,.icon-fenlei,.icon-gouwucheman,.icon-wode{
    font-size: 35px;
  }
</style>
