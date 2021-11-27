<!--  -->
<template>
  <div class="tab-bar-item" @click="TabClick">
		<div :style="activeStyle"><slot name="item-icon"></slot></div>
		<div :style="activeStyle"><slot name="item-text"></slot></div>
		<!-- :style 动态绑定activeStyle-->
	</div>
</template>

<script>
export default {
  name:'Tabitem',
	props:{
		path: String,
		activeColor:{ 
			type: String, //转换成字符串型
			default:'palevioletred', //这里是显示颜色
		}
	},
  data(){
		return{
			// isActive:true
		}
	},
	methods: {
		TabClick(){
			// console.log('TabClick');
			this.$router.replace(this.path) //这个是让路由显示 每次点击然后就显示要显示的内容
			
		},
		
	},
	computed: {
		isActive(){ 
			return this.$route.path.indexOf(this.path) !== -1
		},
		activeStyle(){ 
			return this.isActive ? {color: this.activeColor} : {}
		}
	}
}
</script>

<style  scoped>
	.tab-bar-item {
		flex: 1;
		text-align: center;
		height: 59px;
		font-size: 18px;
		font-weight: 550;
	}
	
</style>
