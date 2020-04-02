<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    <main-tab-ber/>
  </div>
</template>

<script>

import MainTabBer from 'components/content/maintabber/MainTabBer'
export default {
  name: 'App',
  components: {
    MainTabBer
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
