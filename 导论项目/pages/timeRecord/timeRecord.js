Page({
  data:{
    clickDays:0,
    close:true,
    open:false,
    timeSwitch:false,
    recordYear : new Date().getFullYear(),
    recordMonth : new Date().getMonth()+1,
    recordDate : new Date().getDate(),
    recordHour : 0,
    recordMinute : 0,
    recordSecond : 0,
    timeRecordList:[]
  },

  open:function(){
    this.setData({
      close:false,
      open:true
    })
    
    var recordYear = this.data.recordYear;//注：因为只有展开后才可以显示打卡记录
    var recordMonth = this.data.recordMonth;// 故这里用的函数是展开列表的函数，充当onShow函数的功能
    var recordDate = this.data.recordDate;  // 所以重新记录一遍打卡时刻
    var recordHour = this.data.recordHour;
    var recordMinute = this.data.recordMinute;
    var recordSecond = this.data.recordSecond;
    var recordEvent = recordYear+"-"+recordMonth+"-"+recordDate+" "+recordHour+":"+recordMinute+":"+recordSecond;                      //3.d.记录打卡时刻

    if(this.data.timeSwitch == true){       //3.e.这里用到了前文提到的“打卡钥匙”，后续提及
      var event = 'timeRecordList[' + this.data.timeRecordList.length + '].addEvent';
      this.setData({                        //3.f.添加打卡时刻到被循环的打卡列表中
        [event]: {                          //注：因为初始为空列表，所以长度为0
          id:this.data.timeRecordList.length,//  每添加一个列表，长度+1，恰好符合id的规律
          timeRecord:recordEvent,            //  故直接将实时长度作为id来区分循环内容
        }
      });
    }
    
  },

  close:function(){
    this.setData({
      close:true,
      open:false,
      timeSwitch:false
    })
    wx.setStorage({
      data: false,
      key: 'timeSwitch',
    })
    wx.setStorage({
      data: this.data.timeRecordList,
      key: 'timeRecordList',
    })
  },

  onShow:function(){
    this.setData({
      close:true,
      open:false,
    })
  
    var that = this;

    wx.getStorage({
      key: 'timeRecordList',
      success(res){
        that.setData({
          timeRecordList:res.data
        })
      }
    })

    wx.getStorage({           //1.a.获取打卡天数
      key: 'clickTimes',
      success(res){
        that.setData({
          clickDays:res.data
        })
      }
    })

    wx.getStorage({
      key: 'timeSwitch',
      success(res){
        if(res.data == true){
          that.setData({
            timeSwitch:true
          })
        }else{
          that.setData({
            timeSwitch:false
          })
        }
      }
    })
    
    var recordYear = this.data.recordYear;
    var recordMonth = this.data.recordMonth;
    var recordDate = this.data.recordDate;
    var today = String([recordYear,recordMonth,recordDate]);
    //3.b.记录今天，以获取数据库数据

    wx.getStorage({
      key:today,
      success(res){
        that.setData({   //3.c.记录打卡时刻的“时分秒”
          recordHour : String(res.data[3]),
          recordMinute : String(res.data[4]),
          recordSecond : String(res.data[5]),
        })
      }
    })
  }
})