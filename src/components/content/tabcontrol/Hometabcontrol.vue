<template>
  <div class="hometabcontrol">
    <div v-for="(item,index) in titles"
         class="tab-item-control" :class="{active:index === currentIndex}"
          @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hometabcontrol",
  props: {
    titles: {
      type:[],
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex:0, //记录它的第一个选项
    }
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index) //将这个传出去
    }
  }
}
</script>

<style scoped>
  .hometabcontrol{
    display: flex;
    text-align: center;
    font-size: 20px;
    font-weight: 600;
    background-color: whitesmoke;
    z-index: 9;
  }
  .tab-item-control{
    flex: 1;

    height: 40px;
    line-height: 40px;
    /*border: 1px solid pink;*/
  }
  .tab-item-control span{
    padding: 5px;
  }
  .active{
    color: palevioletred;

  }
  .active span{
    border-bottom: 3px solid pink;
  }

</style>