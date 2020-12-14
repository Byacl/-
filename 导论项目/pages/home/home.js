Page({
  data:{},
  gotoBell:function(){  //3.b.点击轮播图进入相应页面
    wx.switchTab({
      url: '/pages/bell/bell',
    })
  },
  gotoTime:function(){
    wx.switchTab({
      url: '/pages/time/time',
    })
  },
  gotoWeight:function(){
    wx.switchTab({
      url: '/pages/weight/weight',
    })
  },
  use:function(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  }
})