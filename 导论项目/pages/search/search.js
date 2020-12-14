Page({
  data:{

  },

  searchToSp:function(e){     //1.a.bindconfirm确定输入内容，进入相应页面
    var searchContent = e.detail.value;
    if(searchContent == '打卡记录'){
      wx.navigateTo({
        url: '/pages/timeRecord/timeRecord',
      })
    }
    if(searchContent == '团队故事'){
      wx.navigateTo({
        url: '/pages/story/story',
      })
    }
    if(searchContent == '关于产品'){
      wx.navigateTo({
        url: '/pages/about/about',
      })
    }
  }
})