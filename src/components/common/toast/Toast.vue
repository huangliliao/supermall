<template>
  <div class="toast" v-show="isShow">
   {{message}}
  </div>
</template>

<script>
  export default {
    name: "Toast",
    props:{
      message:{
        type:String,
        default(){
          return ''
        }
      },
      isShow:{
        type:Boolean,
        default(){
          return false
        }
      }

    },
    methods:{
    }
  }
</script>

<style scoped>
.toast{
  background-color: rgba(0,0,0,0.75);
  position:fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  padding: 8px 10px ;
  z-index: 999;
}
</style>