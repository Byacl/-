Page({
  data:{},
  getUserInfo(e){                   //1.b.绑定函数获取用户信息
    const {userInfo} = e.detail;
    wx.setStorage({
      key:'userInfo',
      data:userInfo
    })
    if(!!(userInfo) == true){       //1.d.获取信息成功后返回
      wx.navigateBack({
        delta: 0,
      })
    }
    wx.setStorage({                 //1.c.建立昵称和头像数据库(后续有修改昵称和头像功能)
      key: 'loginUserName',
      data: userInfo.nickName,
    })
    wx.setStorage({
      key: 'loginUserImage',
      data: userInfo.avatarUrl,
    })
  }
})