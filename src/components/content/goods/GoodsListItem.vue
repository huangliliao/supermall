<template>
 <div class="goods-list-item" @click="itemClick">
   <img :src="showImage" @load="itemImageLoad" alt="">
   <div class="goods-info">
     <p>{{goodsItems.title}}</p>
     <span class="price">{{goodsItems.price}}</span>
     <span class="collect">{{goodsItems.cfav}}</span>
   </div>
 </div>
</template>

<script>

  export default {
    name: "GoodsListItem",
    props:{
      goodsItems:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodsItems.image || this.goodsItems.show.img
      }
    },
    methods:{
      /*监听商品展示页图片加载完成，事件总线传递数据，解决滚动卡顿BUG*/
      itemImageLoad(){
        this.$bus.$emit('itemImageLoad');
      },
      //跳转到商品详情页
      itemClick(){
        this.$router.push('/detail/' + this.goodsItems.iid)
      },
    }
  }
</script>

<style scoped>
.goods-list-item,a{
  width: 48%;
  position: relative;
  padding-bottom: 40px;
}

.goods-info{
  position: absolute;
  left: 0;
  bottom: 5px;
  right: 0;
  overflow: hidden;
  font-size: 12px;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/common/collect.svg") 0 0/14px 14px;
}
.goods-list-item>img{
  width: 100%;
  border-radius:5px;
}
</style>