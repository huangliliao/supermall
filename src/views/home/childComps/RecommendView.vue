<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props:{
      recommends:{
        type:Array,
        default() {
          return []
        }
      }
    },
  }

</script>

<style scoped>
  .recommend{
    display: flex;
    text-align: center;
    font-size: 12px;
    border-bottom: 8px solid #eee;
    padding:10px 0 20px;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend-item img{
    width: 70px;
    height: 70px;
  }
</style>