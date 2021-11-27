<!--  -->
<template>
  <div id="home" class="wrapper">
		<nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <hometabcontrol :titles="['流行','新款','精选']" class="homecontrol"
                    @tabClick="tabClick" ref="tabControl1"
                    v-show="isTabFixed"></hometabcontrol>

		<scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true" @pullingUp="loadMore">

			<home-swiper :banners = "banners" @swiperImageLoad="swiperImageLoad"></home-swiper>

			<home-recommend :recommends="recommends"></home-recommend>

			<feature-view></feature-view>

			<hometabcontrol :titles="['流行','新款','精选']"
			                @tabClick="tabClick" ref="tabControl2"
                      ></hometabcontrol>

			<goodsList :goods="showGoods"></goodsList>

		</scroll>
    <back-top @click.native="backClick" v-show="isShowbacktop"></back-top>
  </div>
</template>
//native修饰什么时候使用
//在我们需要监听一个组件的原生事件时 必须给对应的事件加上.native修饰符才能进行点击
<script>
import NavBar from "../../components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import FeatureView from "./childComps/FeatureView";

import GoodsList from "../../components/content/goods/GoodsList";
import Scroll from "../../components/common/scroll/Scroll.vue";
import BackTop from "../../components/content/backTop/BackTop";

import Hometabcontrol from "../../components/content/tabcontrol/Hometabcontrol";


import {getHomeMultidata,getHomedata} from "../../network/homes";

  export default {
    name:'Hmoes',
    components: {
      NavBar,
      HomeSwiper,
      HomeRecommend,
      FeatureView,
      Hometabcontrol,
      GoodsList,
			Scroll,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page:0 , list: []},
          'new': {page:0 , list: []},
          'sell': {page:0 , list: []},
        },
        currentTpye: 'pop',
        isShowbacktop: false,
        tabOffsetTop:0,
        isTabFixed: false,
        saveY: 0
      }
    },
    computed: {
      showGoods() {
        return this.goods[this.currentTpye].list
      }
    },
    activated() {
      //进来的时候
      // console.log('activated')
      this.$refs.scroll.refresh //每次进来的时候做一次刷新 确保保持当前的位置
      this.$refs.scroll.scrollTo(0,this.saveY,-1)

    },
    deactivated() {
      //离开的时候
      // console.log('deactivated')
      this.saveY = this.$refs.scroll.getScrollY()
    },


    created() {
      //1.请求多个数据
      this.getHomeMultidata()

      //2.请求商品数据
      this.getHomedata('pop')
      this.getHomedata('new')
      this.getHomedata('sell')


    },

    methods: {
      //事件监听相关的方法
      tabClick(index) {
        // console.log(index)
        switch (index) {
          case 0:
            this.currentTpye = 'pop'
                break
          case 1:
            this.currentTpye = 'new'
                break
          case 2:
            this.currentTpye = 'sell'
                break
        }
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      mounted() {
        //3.获取tabControl的offsetTop
        //所有的组件都有一个属性$el: 用于获取组件中的元素
        // console.log(this.$refs.tabControl.$el.offsetTop)
      },

      backClick() {
        // console.log('backClick')
        // this.$refs.scroll.scroll.scrollTo(0,0,1000)
        this.$refs.scroll.scrollTo(0,0,1000) //这个是封装的方法
        //后面这个参数是x、y 和后面返回时间
        /* 通过这个方法让这个组件监听到Scroll里面的scroll 当然上面还要设置一个ref才能拿到这个*/
      },

      contentScroll(position){ //这个就是在Home这里能监听xy
        // console.log(position)
        //1.判断BackTop是否显示
        this.isShowbacktop = (-position.y) > 800  //先让它转成和控制台的值一样 -
        /* 当大于1000的时候隐藏*/

        //2.决定tabControl是否吸顶
        this.isTabFixed = (-position.y) > this.tabOffsetTop
      },

      //将这个传到这里来 就能监听到加载更多
      loadMore() {
        // console.log('加载更多')
        this.getHomedata(this.currentTpye)

        // this.$refs.scroll.scroll.refresh() //这个是把加载速度计算出来
      },

      //这个是导航栏吸顶的值
      swiperImageLoad(){
        // console.log(this.$refs.tabControl2.$el.offsetTop);
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
      },

      //网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          // console.log(res)
          // this.result = res;
          this.banners = res.data.data.banner.list;
          this.recommends = res.data.data.recommend.list;
        })
      },

      getHomedata(type){
        const page = this.goods[type].page + 1
        getHomedata(type,page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.data.list)
          this.goods[type].page += 1

          //再次加载更多
          this.$refs.scroll.finishPullUp()
        })
      }
    }
  }
</script>

<style  scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
  }

  .home-nav{
    background-color: pink;
    color: #222222;

    font-size: 25px;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  }

  /*.homecontrol{*/
  /*  position: fixed;*/
  /*  top: 44px;*/
  /*}*/
  /*第二种方法  最上面的home-mav 还有给它一个定位
  /*.content{*/
  /*  overflow: hidden;*/
  /*  position: absolute;*/
  /*  top: 44px;*/
  /*  bottom: 49px;*/
  /*}*/
	.content{
		height: calc(100% - 59px);
		overflow: hidden;
	}
  /*.homecontrol{*/
  /*  position: relative;*/
  /*}*/
</style>
