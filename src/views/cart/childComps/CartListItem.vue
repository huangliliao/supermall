<template>
  <div class="cart-item">
    <div class="item-selector">
      <check-button
              :is-checked="product.checked"
                @click.native="checkedClick"/>
    </div>
    <div class="item-img">
      <img :src="product.image" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{product.title}}</div>
      <div class="item-desc">{{product.desc}}</div>
      <div class="item-bottom">
        <div class="item-price left">￥{{product.price}}</div>
        <div class="item-count right">x{{product.count}}</div>
      </div>
    </div>
  </div>
</template>

<script>
  import CheckButton from 'components/common/checkbutton/CheckButton'
  export default {
    name: "CartListItem",
    components:{
      CheckButton
    },
    props:{
      product:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      checkedClick(){//切换选中或不选中
        this.product.checked = !this.product.checked
      }
    }
  }
</script>

<style scoped>
.cart-item{
  width: 100%;
  padding: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
  font-size: 0;
}
.item-selector{
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

  .item-img{
    padding: 5px;
  }
  .item-img img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius:5px;
  }
  .item-info{
    font-size:17px;
    color:#333;
    padding: 5px 10px ;
    position: relative;
    overflow: hidden;
  }
  .item-title,.item-desc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .item-info .item-desc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
  }
.item-bottom{
  margin-top: 10px;
  position:absolute;
  right: 10px;
  bottom: 10px;
  left: 10px;
}


.item-bottom .item-price{
    color: orangered;
  }
</style>