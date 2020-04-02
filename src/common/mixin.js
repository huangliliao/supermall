import {debounce} from "./utils";
//混入mixin封装，关于图片加载完毕上拉卡顿
export const itemListenerMixin = {
  data(){
    return{
      itemImgListener:null,//全局监听要取消的函数
      newRefresh:null,
    }
  },
  mounted(){
    //解决滚动时卡顿的bug  监听图片加载完成
    this.newRefresh = debounce(this.$refs.scroll.refresh,50);
    //对全局监听的事件进行保存
    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on('itemImageLoad',this.itemImgListener)
  }
}