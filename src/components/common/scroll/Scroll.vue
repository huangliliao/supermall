<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0,
      },
      pullUpLoad:{
        type:Boolean,
        default: false,
      }
    },
    data(){
      return{
        scroll:null
      }
    },
   mounted(){
     this.scroll = new BScroll(this.$refs.wrapper,{
          click:true,//开启在scroll中的点击
          probeType:this.probeType,//实时监测滚动
          pullUpLoad:this.pullUpLoad,//上拉加载更多
      })
     //1.监听滚动事件
     this.scroll.on("scroll",(position) => {
       this.$emit('scroll',position)
     });
     //2. 监听上拉时加载更多事件
     this.scroll.on('pullingUp',() => {
       this.$emit('pullingUp')
     })
   },
    methods:{
      //backtop回到顶部事件方法
      scrollTo(x,y,time=300){
        this.scroll && this.scroll.scrollTo(x,y,time)
      },
      //加载更多事件
      finishPullUp(){
        this.scroll && this.scroll.finishPullUp();
      },
      // 处理滚动问题
      refresh(){
        this.scroll && this.scroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>