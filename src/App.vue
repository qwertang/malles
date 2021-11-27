<template>
  <div id="app">
		<keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
		<Main></Main>
  </div>
</template>

<script>

import Main from "./components/content/tabbaritem/Main"

export default {
  name: 'App',
  components: {
		Main
  },
 
}
</script>

<style>
	@import url("assets/css/base.css");

  @import "assets/css/icons.css";
</style>
