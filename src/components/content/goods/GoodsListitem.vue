<template>
  <div class="goods-item" @click="itemClick">
    <img :src="goodsitem.show.img" alt="">
    <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="prices">￥</span>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">
        <i class="iconfont icon-shoucang1"></i>
        {{goodsitem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListitem",
    props: {
      goodsitem: {
        type: Object,
        default(){
          return {}
        }
      }
    },
    methods: {
      itemClick(){
        // console.log('itemClick')
        this.$router.push('/detail/' + this.goodsitem.iid)
      }
    }
  }
</script>

<style scoped>

  .goods-item{
    padding-bottom: 40px;
    position: relative;
    width: 48%;

  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info{
    position: absolute;
    bottom: 3px;
    left: 0;
    right: 0;
    overflow: hidden;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  .goods-info p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
    margin-top: 10px;
  }
  .goods-info .prices{
    font-size: 10px;
    color: tomato;
    padding: 5px;
  }
  .goods-info .price{
    color: tomato;
    font-size: 16px;
  }
  .goods-info .collect{
    color: pink;
    margin-left: 8px;
  }
  .goods-info .collect i{
    font-size: 13px;
  }
</style>