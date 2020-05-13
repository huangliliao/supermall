<template>
  <div id="detail">
    <detail-nav-bar class="nav-bar" @navBarClick="navBarClick" ref="navBar"/>
    <scroll class="content" ref="scroll"
            @scroll="contentScroll"
            :probe-type="3">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop-info :shop="shopInfo"/>
      <detail-image-info :detail-info="detailInfo" @imageLoad="detailImageLoad"/>
      <detail-param-info ref="params" :param-info="itemParams"/>
      <detail-comment-info ref="comment" :comment-info="commentInfo"/>
      <goods-list ref="recommend" :goods="recommend"/>
    </scroll>
    <detail-bottom-bar @addCart="addToCart"/>
    <toast :message="message" :is-show="show"/>
  </div>
</template>

<script>
  import DetailNavBar from './childComps/DetailNavBar'
  import DetailSwiper from './childComps/DetailSwiper'
  import DetailBaseInfo from './childComps/DetailBaseInfo'
  import DetailShopInfo from './childComps/DetailShopInfo'
  import DetailImageInfo from './childComps/DetailImageInfo'
  import DetailParamInfo from './childComps/DetailParamInfo'
  import DetailCommentInfo from './childComps/DetailCommentInfo'
  import GoodsList from 'components/content/goods/GoodsList'
  import DetailBottomBar from './childComps/DetailBottomBar'
  import Toast from 'components/common/toast/Toast'


  import Scroll from 'components/common/scroll/Scroll'

  import {getDetail,Goods,getRecommend} from "network/detail";
  import {itemListenerMixin} from 'common/mixin';
  import {debounce} from "common/utils";
  import {mapActions} from 'vuex'

  export default {
    name: "Detail",
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailImageInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar,
      Toast,
      Scroll,
    },
    mixins:[itemListenerMixin],//混入
    data(){
      return{
        iid:null,
        topImages:[],
        goods:{},
        shopInfo:{},
        detailInfo:{},
        itemParams:{},
        commentInfo:{},
        recommend:[],
        themeTopYs:[],
        getThemeTopYs:null,
        currentIndex:0,//记录当前themeTopYs的遍历的i值
        //记录弹窗的显示状态以及文字
        message:'',
        show:false,
      }
    },
    created() {
      //1.请求数据获取iid
      this.iid = this.$route.params.iid;
      //2.请求详情页所有数据，保存在data中
      getDetail(this.iid).then(res => {
        const data = res.data.result;
        //轮播图数据
        this.topImages = data.itemInfo.topImages; 
        //商品基本数据信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
        //商家店铺信息获取
        this.shopInfo = data.shopInfo;
        //商品图片信息数据获取
        this.detailInfo = data.detailInfo;
        //商品参数信息数据获取
        this.itemParams = data.itemParams;
        //评论信息数据获取
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        };
      });
      //3.详情页推荐数据获取
      getRecommend().then(res => {
        this.recommend = res.data.data.list
      });
      //4.给getThemeTopYs赋值，并且进行防抖操作
      this.getThemeTopYs = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
        this.themeTopYs.push(Number.MAX_VALUE);
      })
    },
    destroyed() {
      //取消全局监听事件
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    methods:{
      ...mapActions(['addCart']),
      detailImageLoad(){
        //1.图片加载完毕后，解决详情页滚动卡顿
        this.newRefresh();
        //2.图片加载完毕后，获取每个区域的offsetTop
        this.getThemeTopYs();
      },
      navBarClick(index){
        //点击顶部导航时 实时切换到相应位置
        this.$refs.scroll.scrollTo(0,-this.themeTopYs[index],200)
      },
      contentScroll(position){
        //滚动到相应区域后对应导航栏
        //1.获取滚动的position.y
        const positionY = -position.y;
        //2.positionY与主题中的值进行比较
        const length= this.themeTopYs.length;
        for(let i = 0;i < length-1 ; i++){
          if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] &&
              positionY <= this.themeTopYs[i+1] )){
            this.currentIndex = i;
            //i = navbar中的currentIndex时，主题会随着区域改变
            this.$refs.navBar.currentIndex = this.currentIndex;
          }

        }
      },
      addToCart(){
        //1.获取购物车需要展示的信息
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        //2.将商品添加到购物车里面 vuex管理
        /*this.$store.dispatch('addCart',product);*/
        //或者使用actions可以返回promise 并且映射关系mapActions 来添加
        this.addCart(product).then(res => {
          //弹窗状态更改
          this.show = true;
          this.message = res;
          setTimeout(() => {
            this.show = false;
            this.message = '';
          },1500)
        })
      }
    },
  }
</script>

<style scoped>
  /*隐藏下面的tabbar 以及加入scroll滚动。 */
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
  .content{
    height: calc(100% - 40px - 49px);
    overflow: hidden;
  }
  .nav-bar{
    position: relative;
    z-index: 9;
    background-color:#fff;
  }
</style>