<template>
  <div id="profile">
    <nav-bar class="nav-bar"><div slot="center">我的商城</div></nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  export default {
    name: "Profile",
    components:{
      NavBar,
    }
  }
</script>

<style scoped>
.nav-bar{
  background-color:var(--color-tint);
  color: #fff;
  font-size:14px;
}
</style>
