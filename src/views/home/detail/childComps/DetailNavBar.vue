<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left">
        <img src="~assets/img/common/back.svg" alt="" @click="ImgClick">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles"
             class="item-title"
        :class="{active:index == currentIndex}"
        @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>

  import NavBar from 'components/common/navbar/NavBar'
  export default {
    name: "DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    methods:{
      //点击标题改变颜色
      itemClick(index){
        this.currentIndex = index;
        this.$emit('navBarClick',index)
      },
      //返回上一级目录
      ImgClick(){
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped>
.nav-bar img{
  position: relative;
  left: 8px;
  top: 7px;
}
.title{
  display: flex;
  }
  .item-title{
    flex: 1;
  }
  .active{
    color: var(--color-tint);
  }
</style>