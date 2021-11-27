<template>
    <nav-bar>
      <div slot="left" @click.prevent="backClick">
        <i class="iconfont icon-fanhui"></i>
      </div>
      <div slot="center" class="detailitem">
        <div v-for="(item,index) in titles"
             :class="{active: index === currentIndex}"
             @click="itemClick(index)"
             class="detailitem-bar">{{item}}</div>
      </div>
    </nav-bar>
</template>

<script>

import NavBar from "../../../components/common/navbar/NavBar";
  export default {
    name: "DetailNavBar",
    components: {
      NavBar
    },
    methods: {
      itemClick(index) {
        this.currentIndex = index
      },
      backClick() {
        this.$router.go(-1)
      },
    },

    data() {
      return {
        titles: ['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    computed: {
      activated(){
        console.log('activate')
      },
      deactivated() {
        console.log('deactivated')
      }
    }
  }
</script>

<style scoped>
  .detailitem{
    display: flex;
  }
  .detailitem-bar{
    flex: 1;
  }

  .active{
    color: palevioletred;
  }
  .icon-fanhui{
    font-size: 25px;
    line-height: 47px;
  }

</style>