<template>
  <div id="cart">
    <!----导航栏---->
    <cart-nav-bar/>
    <!---商品列表展示---->
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <!----底部汇总---->
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import CartNavBar from './childComps/CartNavBar'
  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      CartBottomBar,
      Scroll,
    },
    activated() {
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
#cart{
  height: 100vh;
}
  .content{
    height: calc(100% - 40px - 49px - 40px);
    overflow: hidden;
  }
</style>
