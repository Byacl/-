Page({
  data:{
    login:false,
    notlogin:true,
    src:"",
    name:""
  },
  
  onShow:function(){
    
    var that = this;
    if(!!(this.data.src) == true){
      this.setData({
        login:false,
        notlogin:true
      })
    }
    wx.getStorage({               //0.a.检查"用户信息"数据库空与否来判断显示内容
      key: 'userInfo',
      success:function (res) {
        const userInfo = res.data;
        if(!!(userInfo) == true){
          that.setData({
            login:!!(userInfo),
            notlogin:!(userInfo)
          })
        }
      }
    })
    wx.getStorage({
      key: 'userName',            //1.c.修改后昵称的数据库为空:显示微信昵称(头像同理)
      fail(res){
        if(!!(res) == true){      //注:userName为存放修改后昵称的数据库
          var _this = that;       //   loginUserName为存放微信昵称的数据库  
          wx.getStorage({         //   (头像同理)
            key: 'loginUserName',
            success(res){
              _this.setData({
                name:res.data
              })
            }
          })
        }
      },
      success(res){            //1.d.修改后昵称的数据库不为空:显示修改后昵称(头像同理)
        if(!!(res) == true){
          that.setData({
            name:res.data
          })
        }
      }
    })
    wx.getStorage({
      key: 'userImage',
      fail(res){
        if(!!(res) == true){
          var _this = that;
          wx.getStorage({
            key: 'loginUserImage',
            success(res){
              _this.setData({
                src:res.data
              })
            }
          })
        }
      },
      success(res){
        if(!!(res) == true){
          that.setData({
            src:res.data
          })
        }
      }
    })
  }
})