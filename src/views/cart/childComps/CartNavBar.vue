<template>
  <nav-bar class="nav-bar">
    <div slot="center">购物车({{cartLength}})</div>
  </nav-bar>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartNavBar",
    components:{
      NavBar,
    },
    computed:{
      //辅助函数，将store中的getter映射到组件的计算属性computed中
      ...mapGetters(['cartLength'])
    }
  }
</script>

<style scoped>
  .nav-bar{
    background:var(--color-tint);
    color: #fff;
    font-size: 14px;
  }
</style>