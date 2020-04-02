<template>
  <div class="tab-control">
    <!--动态绑定class属性 索引相同时设置css颜色属性-->
    <div class="tab-control-item"
         v-for="(item,index) in titles"
         :class="{active:currentIndex == index}"
    @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex:0   //保存索引 改变点击选项颜色以及点击转换事件
      }
    },
    methods:{
      itemClick(index){
        this.currentIndex = index; // 点击选项 切换选项分类
        this.$emit("tabClick",index) //点击切换商品选项页面详情
      }
    }
  }
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
}
  .tab-control-item{
    flex: 1;
  }
  .active{
    color:var(--color-high-text);

  }
  .tab-control-item span{
    padding: 5px;
  }
  .active span{
    border-bottom:3px solid var(--color-tint);
  }
</style>