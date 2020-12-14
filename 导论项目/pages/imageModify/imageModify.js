Page({
  data:{
    image:""
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
                image:res.data
              })
            }
          })
        }
      },
      success(res){
        if(!!(res) == true){
          that.setData({
            image:res.data
          })
        }
      }
    })
  },
  
  imageModify:function(){
    var that = this;
    wx.chooseImage({             //2.a.选取图片(默认图库或拍照)
      count: 1,                  //2.b.可选择图片数为1
      success(res){
        wx.setStorage({          //2.c.获取图片临时地址并存入数据库
          key:'userImage',
          data:res.tempFilePaths[0],
        })
        wx.switchTab({           //2.d.成功后返回
          url: '/pages/personal/personal',
        })
        wx.showToast({           //2.e.弹窗提示修改成功
          title: '修改成功！',
          icon:'success',
          duration:1250
        })
      }
    })
    
  }
})