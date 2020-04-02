<template>
  <div id="home">
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles = "['流行','新款','精选']"
                 class="tab-control"
                 @tabClick="tabClick"
                 ref="tabControl1"
                 v-show="isFixedTabControl"/>
    <scroll class="content" ref="scroll"
            :probe-type="3"
            @scroll="contentScroll"
            :pull-up-load="true"
           @pullingUp="loadMore">
      <home-swiper :banners="banners" @SwiperImageLoad="SwiperImageLoad"/>
      <recommend-view :recommends="recommends"/>
      <feature-view/>
      <tab-control :titles = "['流行','新款','精选']"
                   class="tab-control"
                   @tabClick="tabClick"
                   ref="tabControl2"/>
      <goods-list :goods="goods[currentType].list"/>
    </scroll>

    <back-top @click.native="backClick" v-show="isBackTopShow"/>


  </div>
</template>

<script>

  import HomeSwiper from './childComps/HomeSwiper'
  import RecommendView from './childComps/RecommendView'
  import FeatureView from './childComps/FeatureView'
  import GoodsList from'components/content/goods/GoodsList'
  import Scroll from 'components/common/scroll/Scroll'
  import BackTop from 'components/content/backtop/BackTop'

  import NavBar from 'components/common/navbar/NavBar'
  import TabControl from 'components/content/tabControl/TabControl'


  import {getHomeMultidata,getHomeGoods} from "network/home";
  import {itemListenerMixin} from 'common/mixin'

  export default {
    name: "Home",
    components:{
      HomeSwiper,
      RecommendView,
      FeatureView,
      GoodsList,
      Scroll,
      BackTop,
      NavBar,
      TabControl
    },
    mixins:[itemListenerMixin],//混入
    //将网页请求的数据保存到data中
    data(){
      return{
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]},
        },
        currentType:"pop",
        isBackTopShow:false,//回到顶部按钮显示变量
        offsetTop:0,
        isFixedTabControl:false,
        saveY:0,

      }
    },
    created() {
      //1.请求Home里轮播图banner以及recommend等多个数据
      this.getHomeMultidata();

      //2.请求商品展示页数据goods
       this.getHomeGoods('pop');
       this.getHomeGoods('new');
       this.getHomeGoods('sell');

    },
    deactivated(){
      //离开home界面时，保存一个位置状态信息saveY
      this.saveY = this.$refs.scroll.scroll.y;
      //2.取消全局监听事件
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    },
    activated(){
      //进入home界面时，保存一个位置状态信息
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh();
    },

    methods:{

      //网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(res => {
          this.banners = res.data.data.banner.list;//轮播图数据
          this.recommends = res.data.data.recommend.list;
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res => {
          this.goods[type].list.push(...res.data.data.list)//将获取的数据添加到对于的数组中保存
          this.goods[type].page += 1;
          this.$refs.scroll.finishPullUp();//完成上拉加载更多刷新
        })
      },
      //事件相关方法
      //1.goods 点击切换流行 新款 精选等页面 详情cd
      tabClick(index) {
        switch(index){
          case 0:
            this.currentType = "pop"
            break
          case 1:
            this.currentType= "new"
            break
          case 2:
            this.currentType = 'sell'
            break
        }
        /*
        * 两个tabControl的点击都能切换相应的类型
        * */
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      //2.backtop 箭头返回顶部事件
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      //3.滚动事件监听
      contentScroll(position){
        // 关于backtop按钮的显示与隐藏
        this.isBackTopShow = (-position.y) > 1000;//上拉1000 是显示箭头按钮
        //关于tabcontrol吸顶效果
        this.isFixedTabControl = (-position.y) > this.offsetTop
      },
      //4.上拉加载更多事件
      loadMore(){
        this.getHomeGoods(this.currentType)
      },
      //5.图片加载完成获取offsetTop
      SwiperImageLoad(){
        this.offsetTop = this.$refs.tabControl2.$el.offsetTop
      }

    }
  }
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
.nav-bar{
  background:var(--color-tint);
  color: #fff;
  font-size: 14px;
}
.content{/*scroll内容区高度*/
  overflow: hidden;
  position: absolute;
  top: 40px;
  bottom: 49px;
  left: 0;
  right: 0;
}
  .tab-control{
    background:#fff;
    position: relative;
    top: 0;
    z-index: 9;
  }
</style>
