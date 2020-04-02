<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <div class="info-rule">
      <p class="desc">{{paramInfo.rule.desc}}</p>
      <p class="dis">{{paramInfo.rule.disclaimer}}</p>
    </div>
    <table v-for="(table, index) in paramInfo.rule.tables"
           class="info-size" :key="index">
      <tr v-for="(tr, indey) in table" :key="indey">
        <td v-for="(td, indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.info.set" :key="index">
        <td class="info-param-key">{{info.key}}</td>
        <td class="info-value">{{info.value}}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.info.image">
      <img :src="paramInfo.info.image[0]" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailParamInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
  }
</script>

<style scoped>
  .param-info {
    padding: 20px 15px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-rule{
    padding-bottom: 20px;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-rule .desc{
    font-size: 12px;
    margin-bottom: 5px;
  }
  .info-rule .dis{
    font-size:8px ;
  }
  .info-size{
    margin-top: 5px;
  }
  .param-info table {
    width: 100%;
    border-collapse: collapse;
  }
  .param-info table tr {
    height: 42px;
  }

  .param-info table tr td {
    border-bottom: 1px solid rgba(100,100,100,.1);
    font-size:14px;
  }

  .info-param-key {
    /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
    width: 95px;
  }
  .info-param {
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .info-value{
    color:var(--color-tint);
  }
  .info-img img{
    width: 100%;
  }
</style>