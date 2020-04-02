<template>
  <div class="cart-bottom">
    <div class="check-content">
      <check-button
              :is-checked="isSelectAll"
              class="check"
              @click.native="checkClick"/>
      <span>全选</span>
    </div>
    <div class="cart-price">
      合计:￥{{totalPrice}}
    </div>
    <div class="calculate">
      去结算:{{checkedLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/checkbutton/CheckButton'
  import {mapGetters} from 'vuex'
  export default {
    name: "CartBottomBar",
    components:{
      CheckButton,
    },
    computed:{
      ...mapGetters(['cartList']),
      //计算钱的总和
      totalPrice(){
        return this.cartList.filter(item => {
        return item.checked}).reduce((preValue,item) => {
          return preValue + item.price * item.count
        },0).toFixed(2)
      },
      //结算 商品的个数
      checkedLength(){
        return this.cartList.filter(item => item.checked).length
      },
      //判断是否全部选中
      isSelectAll(){
        if(this.cartList.length === 0) return false;
        return !this.cartList.find(item => !item.checked);
      }
    },
    //全选按钮
    methods:{
      checkClick(){
        console.log('123');
        if(this.isSelectAll){
          //全部都选中时，点击时使之全部不选中
          this.cartList.forEach(item => item.checked = false)
        }else{
          //全部没选中或者部分选中时，点击使之全部选中
          this.cartList.forEach(item => item.checked = true)
        }
      }
    }
  }
</script>

<style scoped>
  .cart-bottom{
    height: 40px;
    position: relative;
    line-height: 40px;
    display: flex;
    background-color: #eee;
    font-size: 14px;
  }
  .check-content{
    display: flex;
    align-items: center;
    width: 66px;
    margin-left: 5px;
  }
  .check{
    width: 20px;
    height: 20px;
    line-height: 20px;
    margin-right: 5px;
  }
  .cart-price{
    flex: 1;
    margin-left: 20px;
  }
  .calculate{
    width:90px;
    background:red;
    color:#fff;
    text-align: center;
  }
</style>