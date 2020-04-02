<template>
 <div>
   <swiper class="Swiper">
     <swiper-item v-for="(item,index) in topImages " :key="index">
       <img :src="item" alt="">
     </swiper-item>
   </swiper>
 </div>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "DetailSwiper",
    components:{
      Swiper,
      SwiperItem,
    },
    props:{
      topImages:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .Swiper{
    height: 300px;
    overflow: hidden;
  }
</style>