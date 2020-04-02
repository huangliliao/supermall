<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link">
        <img :src="item.image"  alt="" @load="SwiperImageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper,SwiperItem} from 'components/common/swiper/index'
  export default {
    name: "HomeSwiper",
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        isLoad:false,
      }
    },
    methods:{
      /*图片加载完成 获取offsetTop的方法*/
      SwiperImageLoad(){
        if(!this.isLoad){
          this.$emit('SwiperImageLoad');
          this.isLoad = true
        }
      }
    },
    components:{
      Swiper,
      SwiperItem
    }
  }
</script>

<style scoped>

</style>