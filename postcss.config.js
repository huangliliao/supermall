module.exports = {
  plugins:{
    autoprefixer:{},
    "postcss-px-to-viewport":{
      viewportWidth:375,//视窗高度
      viewportHeight:667,
      unitPrecision:5,//指定px转化为vw的小位数
      viewportUnit:'vw',//指定转化单位
      selectorBlankList:['ignore','tab-ber','tab-bar-item'],//指定不需要转化的
      minPixelValue:1,
      mediaQuery: true,

    },
  }
}