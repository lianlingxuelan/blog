<template>
  <div id="home">
    <Header>Header</Header>
    <router-view />
  </div>
</template>

<script>
  import Header from './base/Header'
    export default {
        name: "Home",
        components:{
          Header
        }
    }
</script>

<style scoped>
#home{
  height: 100%;
}
</style>
