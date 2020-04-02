<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
    </div>
    <div class="info-other">
      <span class="date">{{commentInfo.created | showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-image">
      <img v-for="(item,index) in commentInfo.images" :src="item" alt="" :key="index">
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils";

  export default {
    name: "DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        //将时间戳转化为date对象
        const date = new Date(value * 1000)
        // 将date进行格式化
        return formatDate(date,'yyyy-MM-dd hh:mm:ss')
      }
    }
  }
</script>

<style scoped>
.comment-info{
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
  .info-header{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
  }
  .info-header .header-title{
    float: left;
    font-size: 15px;
  }
  .info-header .header-more{
    float: right;
    font-size: 13px;
    margin-right: 10px;
  }
  .info-user{
    padding: 10px 0px 5px ;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    border-radius:50%;
  }
  .info-user span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail{
    padding: 0 5px 15px;
  }
  .info-detail p{
    font-size: 14px;
    color:#777;
    line-height: 1.5;
  }
  .info-other{
    font-size:12px;
    color:#999;
    margin-top: 10px;
  }
  .info-other .date{
    font-size:8px;
  }
  .info-image{
    margin-top: 10px;
  }
  .info-image img{
    width: 70px;
    height:70px;
    margin-right: 5px;
  }
</style>