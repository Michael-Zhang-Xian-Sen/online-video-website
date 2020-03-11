<template>
  <div id="app">
		<PageHeader></PageHeader>
    <router-view></router-view>
    <PageFooter></PageFooter>
  </div>
</template>

<script>
import PageHeader from "@/components/header/PageHeader.vue";
import PageFooter from "@/components/footer/PageFooter.vue";

export default {
  name: 'App',
  components:{
    PageHeader,
    PageFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #F4F5F7;
  width: 100%;;
}
</style>
