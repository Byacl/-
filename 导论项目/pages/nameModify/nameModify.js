Page({
  data:{
    placeholderName:""
  },
  onShow:function(){
    var that = this;
    wx.getStorage({
      key: 'userName',
      fail(res){
        if(!!(res) == true){
          var _this = that;
          wx.getStorage({
            key: 'loginUserName',
            success(res){
              _this.setData({
                placeholderName:res.data
              })
            }
          })
        }
      },
      success(res){
        if(!!(res) == true){
          that.setData({
            placeholderName:res.data
          })
        }
      }
    })
  },
  nameModifying:function(e){
    wx.setStorage({                //1.c.获取输入内容并存入数据库
      key: 'userName',
      data: e.detail.value,
    })
    wx.switchTab({                 //1.d.成功后返回
      url: '/pages/personal/personal',
    })
    wx.showToast({                 //1.e.弹窗提示修改成功
      title: '修改成功！',
      icon:'success',
      duration:1250
    })
  },
  clearValue:function(){           //2.b.修改input内容为空
    this.setData({
      nameModifying:''
    })
  }
})