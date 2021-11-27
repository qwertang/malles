<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span class="info-other-span3">
        <img :src="goods.services[1].icon" alt="">
        {{goods.services[goods.services.length-1].name}}
      </span>
    </div>
    <div class="info-service">
      <span>
        <img :src="goods.services[1].icon" alt="">
        {{goods.services[goods.services.length-4].name}}
      </span>
      <span>
        <img :src="goods.services[1].icon" alt="">
        {{goods.services[goods.services.length-3].name}}
      </span>
      <span>
        <img :src="goods.services[1].icon" alt="">
        {{goods.services[goods.services.length-2].name}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default(){
        return {}
      }
    }
  },

}
</script>

<style scoped>
  .info-title{
    font-size: 16px;
    font-weight: 600;
    margin-top: 15px;
  }

  .info-price{
    margin-top: 13px;
  }
  .info-price .n-price{
    font-size: 22px;
    color: tomato;
    padding: 8px;
  }
  .info-price .o-price{
    color: #cccccc;
    text-decoration: line-through;
  }

  /*.discount{*/
  /*  padding: 3px;*/
  /*  background-color: pink;*/
  /*  border-radius: 10px;*/
  /*  font-weight: 600;*/
  /*  line-height: 27px;*/
  /*  margin-left: 15px;*/
  /*}*/
  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: pink;
    border-radius: 8px;
    margin-left: 15px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -2px;
  }

  .info-other{
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px #cccccc solid;
  }
  .info-other span{
    flex: 1;
    text-align: center;
    margin-top: 15px;
    color: #999999;
  }
  .info-other span img{
    position: relative;
    bottom: -10%;
    width: 10%;
  }

  .info-service{
    display: flex;
    padding: 20px 0 20px;
    border-bottom: 5px solid #cccccc;
  }
  .info-service span{
    flex: 1;
    font-size: 14px;
    text-align: center;
  }
  .info-service span img{
    width: 12%;
  }
</style>