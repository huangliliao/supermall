
//在action中进行异步操作或者有关判断属性的 在提交到mutations中定义方法，可实时跟踪

import {promised} from "q";

export default {
  //拿到传过来的添加到购物车的商品
  addCart(context,payload){
    //先判断是否有这类商品，
   /* let oldProduct = null;
    for(let item of context.state.cartList){
      if(item.iid === payload.iid){
        item = oldProduct;
      };
    };*/
   let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
    //如果有这个商品，那么数量加一，没有则数量为1并且添加到购物车
    if(oldProduct){
     context.commit('addCounter',oldProduct)
    }else {
      payload.count = 1;
      context.commit('addToCart',payload)
    }
  }
};
//对应前加入购物车使用 promise 以及 mapActions映射关系
/*
export default {
  addCart(context,payload){
    return new promise((resolve,reject) => {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
      //如果有这个商品，那么数量加一，没有则数量为1并且添加到购物车
      if(oldProduct){
        context.commit('addCounter',oldProduct)
      }else {
        payload.count = 1;
        context.commit('addToCart',payload)
      }
    })
  }
}*/
