<!--  -->
<template>
  <div class="wrapper" ref="warpper">
		<div class="content">
			<slot></slot>
		</div>
  </div>
</template>

<script>
	import BScroll from "better-scroll";
	import PullUp from '@better-scroll/pull-up'

  BScroll.use(PullUp)
	export default {
		name:'',
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: true
      }
    },
		data () {
			return {
				scroll:null
			}
		},
		mounted() {
      //1.创建BSroll对象
			this.scroll = new BScroll (this.$refs.warpper ,{
				click: true,
        observeDOM:true, //加上这个之后能进行滑动
        observeImage:true, //加上这个之后Home里面的那个属性就不用了

        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
			})

      //** 2.监听滚动的位置
      this.scroll.on('scroll',(position) => {
        // console.log(position)
        this.$emit('scroll',position) //把这个给传出去 谁用就调用
      })

      //3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        // console.log('上拉更多加载')
        this.$emit('pullingUp')
      })

		},
    methods: {
      scrollTo(x,y, time) {
        this.scroll.scrollTo(x,y ,time)
        //把它封装起来
      },
      finishPullUp() {
        this.scroll.finishPullUp()
        //封装 前面直接调用 这个是加载更多下下页
      },
      getScrollY() {
        return this.scroll ? this.scroll.y :0
        //判断有没有值的情况下 如果有的话就取出来 如果没有的话默认是0
      }
    }
	}
</script>

<style  scoped>

</style>
