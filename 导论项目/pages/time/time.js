Page({
  data: 
  {
    get:"",
    // 用于timeclick(打卡)的数据
    date:0,
    show:true,
    notshow:false,
    // 用于记录打卡天数的数据
    clickTimes:0,
    // 用于dayClick(日历)的数据
    dayStyle: [                   //1.c.增加当日日期的背景色
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#66ccff' }, 
      { month: 'current', day: new Date().getDate(), color: 'white', background: '#66ccff' }
    ],
  },
  
  // 点击日历改变背景色
  dayClick: function (event) {    //1.d.增加点击某个日期后的背景色
    let clickDay = event.detail.day;
    let changeDay = `dayStyle[1].day`;
    let changeBg = `dayStyle[1].background`;
    this.setData({
      [changeDay]: clickDay,
      [changeBg]: "#0099ff"
    })
    
  },
  onLoad:function(){},

  // 每次访问页面时根据判断是否打卡，选择显示打卡/未打卡板块，并记录打卡天数
  onShow:function(){
    var that = this
    wx.getStorage({//3.b.每次访问再获取打卡次数，防止重新编译后次数重置
      key: 'clickTimes',
      success(res){
        that.setData({
          clickTimes:res.data
        })
      }
    })
    wx.getStorage({       //2.e.onShow函数中每次访问根据判断设定显示内容
      key: 'recordToday',
      success(res){
        var trueToday = (new Date()).getDate();
        var recordToday = res.data
        if(trueToday == recordToday){
          that.setData({
            show:false,
            notshow:true,
          })
        }else{
          that.setData({
            show:true,
            notshow:false
          })
        }
      }
    })
  },

  // 点击打卡函数
  timeClick:function(){
    wx.vibrateShort({})
    this.setData({   
      date:(new Date()).getDate(),  //2.d.打卡后获取此时日期并上传数据库
      notshow:true,  //2.b.点击后修改显示内容
      show:false,
    })
    wx.setStorage({          //3.a.长按打卡后记录打卡次数
      key: 'clickTimes',
      data: (parseInt(this.data.clickTimes) + 1),
    })
    var that = this;
    wx.getStorage({
      key: 'clickTimes',
      success(res){
        that.setData({
          clickTimes:res.data
        })
      }
    })
    wx.setStorage({
      key:'recordToday',
      data:this.data.date
    })

    wx.showToast({             //2.c.成功后显示
      title: '打卡成功！',
      icon: 'success',
      duration: 1250,
    })

    wx.setStorage({           //3.f.设定自定的“打卡钥匙”(后续提及)
      data: true,
      key: 'timeSwitch',
    })

    var recordYear = new Date().getFullYear();
    var recordMonth = new Date().getMonth()+1;
    var recordDate = new Date().getDate();
    var recordHour = new Date().getHours();
    var recordMinute = new Date().getMinutes();
    var recordSecond = new Date().getSeconds();
    var today = String([recordYear,recordMonth,recordDate]);//3.c.记录打卡日期
    var timeRecord =[recordYear,recordMonth,recordDate,recordHour,recordMinute,recordSecond];
                        //3.d.记录打卡具体时刻
    wx.setStorage({
      data: timeRecord, //3.e.记录打卡日期对应的打卡时刻并上传数据库
      key: today,
    })
  },
})