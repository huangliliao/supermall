<template>
  <div class="tab-ber-item" @click="itemClick()">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBerItem",
    props:{
      path:String
    },
    computed:{
     isActive(){
       return this.$route.path.indexOf(this.path) !== -1 //等等于-1 表示能够找到
     }
    },

    methods:{
      itemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-ber-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-ber-item img{
    width:24px;
    height: 24px;
  }
  .active{
    color:red;
  }
</style>