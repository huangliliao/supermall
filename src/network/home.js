import {request} from 'network/request'
//1.获取轮播图banner和recommend的数据
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}


//2.请求商品展示的数据goods
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}