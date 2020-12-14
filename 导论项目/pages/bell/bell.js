Page({
  data:{
    time:"",
    clock:false,
    input:true
  },

  submit:function(e){
    var recordCountHour = parseInt(e.detail.value.hour); //1.a.记录目标时间
    var recordCountMinute = parseInt(e.detail.value.minute);
    var recordCountSecond = parseInt(e.detail.value.second);
    var trueHour = parseInt((new Date()).getHours());    //1.b.记录设置时间
    var trueMinute = parseInt((new Date()).getMinutes());
    var trueSecond = parseInt((new Date()).getSeconds());
    var end = (recordCountHour*3600-trueHour*3600+recordCountMinute*60-trueMinute*60+recordCountSecond-trueSecond)*1000;                //1.c.计算相差时间，作为倒计时
    var that = this;
    setTimeout(function(){
      wx.vibrateLong({});
      that.setData({                //1.d.设定显示内容
        clock:true,
        input:false
      })
    },end)
    wx.showToast({            //1.e.设置成功后显示
      title: '设置成功！',
      icon:'success',
      duration:1250
    })
  },

  cancel:function(){
    this.setData({
      clock:false,
      input:true
    })
  }
})