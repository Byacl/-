Page({
  data:{
    settingImage:"",
    settingName:""
  },

  gotoImageModify:function(){
    wx.navigateTo({
      url: '/pages/imageModify/imageModify',
    })
  },

  gotoNameModify:function(){
    wx.navigateTo({
      url: '/pages/nameModify/nameModify',
    })
  },

  onShow:function(){
    var that = this;
    wx.getStorage({
      key: 'userImage',
      fail(res){
        if(!!(res) == true){
          var _this = that;
          wx.getStorage({
            key: 'loginUserImage',
            success(res){
              _this.setData({
                settingImage:res.data
              })
            }
          })
        }
      },
      success(res){
        if(!!(res) == true){
          that.setData({
            settingImage:res.data
          })
        }
      }
    })
    wx.getStorage({
      key: 'userName',
      fail(res){
        if(!!(res) == true){
          var _this = that;
          wx.getStorage({
            key: 'loginUserName',
            success(res){
              _this.setData({
                settingName:res.data
              })
            }
          })
        }
      },
      success(res){
        if(!!(res) == true){
          that.setData({
            settingName:res.data
          })
        }
      }
    })
  },

  removeUserInfo:function(){
    var that = this;
    wx.removeStorage({             //1.a.清除存放用户信息的数据库
      key: 'userInfo',
      success:function (res) {
        const userInfo = res.data
        if(!!(userInfo) == false){
          wx.navigateBack({        //1.b.清除后返回
            delta: 0,
          }) 
        }
      }
    })
  }
})