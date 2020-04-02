
//接收到actions中传来的，定义方法处理
export default {
  addCounter(state,payload){
    payload.count ++
  },
  addToCart(state,payload){
    payload.checked = true;//用来判断按钮选中的状态
    state.cartList.push(payload)
  }
}