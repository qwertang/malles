<template>
  <div id="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="Shop"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"></detail-goods-info>
      <detail-param-info :itemParams="itemParams"></detail-param-info>
      <detail-rate :rate="rate"></detail-rate>
      <goods-list></goods-list>
    </scroll>


  </div>
</template>

<script>

import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailRate from "./childComps/DetailRate";

import GoodsList from "../../components/content/goods/GoodsList";

import Scroll from "../../components/common/scroll/Scroll";

// import BackTop from "../../components/content/backTop/BackTop";

import {getDetail,Goods,Shop,GoodsParam,getCommend} from "../../network/detail";

export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailRate,
      GoodsList
    },
    data(){
      return{
        iid:null,
        topImages: [],
        goods: {},
        Shop:{},
        detailInfo:{},
        itemParams:{},
        rate:{},
        recommends: []
      }
    },
    created() {
      //1.保存传入的iid
      this.iid = this.$route.params.iid

      //2.根据iid请求详情的数据
      getDetail(this.iid).then(res => {
        // console.log(res)
        const data = res.data.result;
        //1.获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages

        //2.获取商品的信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)

        //3.创建店铺信息的对象
        this.Shop = new Shop(data.shopInfo)

        //4.获取商品的图片
        this.detailInfo = data.detailInfo;

        //5.获取商品的参数
        this.itemParams = new GoodsParam(data.itemParams.info, data.itemParams.rule);

        //6.获取商品的评论
        if(data.rate.cRate !== 0) {
          this.rate = data.rate.list[0]
        }
      })

      //3.请求推荐的数据
      getCommend().then(res => {
        console.log(res)
        this.recommends = res.data.list
      })
    }
  }
</script>

<style scoped>
  #detail{
    position: relative;
    z-index: 20;
    background-color: white;
    height: 100vh;
  }
  .content{
    height: calc(100% - 44px);
    overflow: hidden;
  }
</style>