Page({
  data:{
    timeWait:4,                     //2.a.倒计时总时间
    directEnter:null,
  },

  enter:function(){                //3.a.跳过，提前进入主页
    wx.switchTab({
      url: '/pages/home/home',
    })
  },
  
  onShow:function(){           
    var that = this;  
    setTimeout(function(){         //2.b.每隔1000ms(1s)修改倒计时时间(之后同理)
      that.setData({
        timeWait:3
      })
    },1000)
    setTimeout(function(){
      that.setData({
        timeWait:2
      })
    },2000)
    setTimeout(function(){
      that.setData({
        timeWait:1
      })
    },3000)
    this.data.directEnter = setTimeout(function () {         //2.c.4s后进入主页
      wx.switchTab({
        url: '/pages/home/home',
      })
     }, 4000)
  },

  onUnload(){
    clearTimeout(this.data.directEnter)     //3.b.跳过后清除原来进入主页的数据
  }
})