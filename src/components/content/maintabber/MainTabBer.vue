<template>
  <tab-ber class="tab-ber">
    <tab-ber-item path="/home">
      <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-ber-item>
    <tab-ber-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-ber-item>
    <tab-ber-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-ber-item>
    <tab-ber-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-ber-item>

  </tab-ber>
</template>

<script>

  import TabBer from 'components/common/tabber/TabBer'
  import TabBerItem from 'components/common/tabber/TabBerItem'
  export default {
    name: "MainTabBer",
    components:{
      TabBer,
      TabBerItem
    }
  }
</script>

<style scoped>
.tab-ber{
  background: #fff;
}
</style>