import {request} from "./request";
//请求详情数据
export function getDetail(iid){
  return request({
    url:"/detail",
    params:{
      iid
    }
  })
}



//详情页商品基本信息获取
export class Goods{
  constructor(itemInfo,columns,service){
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.service = service;
    this.realPrice = itemInfo.lowPrice;

  }
}

//详情页推荐数据获取
export function getRecommend(){
  return request({
    url:'/recommend',
  })
}