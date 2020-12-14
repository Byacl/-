Page({
  data:{
    fruitOneArray:[['苹果','葡萄','梨','桔','柚','桃','瓜','梅','枣','蕉','柿','石榴','桂圆','无花果'],['苹果','星苹果','红富士苹果','蛇果']],  //1.c.父列表和子列表1的内容
    fruitOne:"点击选择",                             //1.d.初始显示内容，后续根据选择更改
    fruitResult:"",
    nameFill:true,
    weightFill:true,
    fruitResultShow:false
  },

  fruitOneChange:function(e){        //1.j.根据选择器的选择修改显示内容
    switch(e.detail.value[0]){       //1.k.判断数组的第一个数据(父列表)为多少
      case 0:                        
        switch(e.detail.value[1]){   //1.l.判断数组的第二个数据(子列表)为多少
          case 0:
            this.setData({fruitOne:"苹果"});
            break;
          case 1:
            this.setData({fruitOne:"星苹果"});
            break;
          case 2:
            this.setData({fruitOne:"红富士苹果"});
            break;
          case 3:
            this.setData({fruitOne:"蛇果"});
            break;
        };
        break;
      case 1:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"葡萄"});
            break;
          case 1:
            this.setData({fruitOne:"紫葡萄"});
            break;
          case 2:
            this.setData({fruitOne:"红玫瑰葡萄"});
            break;
          case 3:
            this.setData({fruitOne:"马奶子葡萄"});
            break;
          case 4:
            this.setData({fruitOne:"葡萄干"});
            break;
        };
        break;
      case 2:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"梨"});
            break;
          case 1:
            this.setData({fruitOne:"香梨"});
            break;
          case 2:
            this.setData({fruitOne:"鸭梨"});
            break;
          case 3:
            this.setData({fruitOne:"雪梨"});
            break;
          case 4:
            this.setData({fruitOne:"鹅黄梨"});
            break;
          case 5:
            this.setData({fruitOne:"库尔勒梨"});
            break;
        };
        break;
      case 3:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"橘子"});
            break;
          case 1:
            this.setData({fruitOne:"橙子"});
            break;
          case 2:
            this.setData({fruitOne:"柑桔"});
            break;
          case 3:
            this.setData({fruitOne:"红桔"});
            break;
          case 4:
            this.setData({fruitOne:"金桔"});
            break;
          case 5:
            this.setData({fruitOne:"蜜桔"});
            break;
          case 6:
            this.setData({fruitOne:"小叶桔"});
            break;
          case 7:
            this.setData({fruitOne:"芦柑"});
            break;
        };
        break;
      case 4:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"柚子"});
            break;
          case 1:
            this.setData({fruitOne:"胡柚"});
            break;
          case 2:
            this.setData({fruitOne:"葡萄柚"});
            break;
        };
        break;
      case 5:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"桃子"});
            break;
          case 1:
            this.setData({fruitOne:"蜜桃"});
            break;
          case 2:
            this.setData({fruitOne:"黄桃"});
            break;
          case 3:
            this.setData({fruitOne:"白粉桃"});
            break;
        }
        break;
      case 6:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"小西瓜"});
            break;
          case 1:
            this.setData({fruitOne:"西瓜"});
            break;
          case 2:
            this.setData({fruitOne:"甜瓜"});
            break;
          case 3:
            this.setData({fruitOne:"木瓜"});
            break;
          case 4:
            this.setData({fruitOne:"哈密瓜"});
            break;
          case 5:
            this.setData({fruitOne:"白兰瓜"});
            break;
        };
        break;
      case 7:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"草莓"});
            break;
          case 1:
            this.setData({fruitOne:"蓝莓"});
            break;
          case 2:
            this.setData({fruitOne:"杨莓"});
            break;
          case 3:
            this.setData({fruitOne:"西莓"});
            break;
        };
        break;
      case 8:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"鲜枣"});
            break;
            case 1:
            this.setData({fruitOne:"蜜枣"});
            break;
            case 2:
            this.setData({fruitOne:"黑枣"});
            break;
            case 3:
            this.setData({fruitOne:"冬枣"});
            break;
            case 4:
            this.setData({fruitOne:"金丝小枣"});
            break;
            case 5:
            this.setData({fruitOne:"枣干"});
            break;
            case 6:
            this.setData({fruitOne:"大枣干"});
            break;
        };
        break;
      case 9:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"香蕉"});
            break;
          case 1:
            this.setData({fruitOne:"芭蕉"});
            break;
        };
        break;
      case 10:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"柿子"});
            break;
          case 1:
            this.setData({fruitOne:"柿饼"});
            break;
        };
        break;
      case 11:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"石榴"});
            break;
          case 1:
            this.setData({fruitOne:"番石榴"});
            break;
        };
        break;
      case 12:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"桂圆"});
            break;
          case 1:
            this.setData({fruitOne:"桂圆干"});
            break;
          case 2:
            this.setData({fruitOne:"桂圆肉干"});
            break;
        };
        break;
      case 13:
        switch(e.detail.value[1]){
          case 0:
            this.setData({fruitOne:"无花果"});
            break;
          case 1:
            this.setData({fruitOne:"无花果干"});
            break;
        };
        break;
    };                                //1.l.其余case同理
    this.setData({nameFill:false})    //1.m.返还数据水果类型已经选择，作为后续解锁button的条件
  },

  fruitOneColumnChange:function(e){
    var data = {                 //1.e.定义数据(简化后续修改数据的代码)
      fruitOneArray:this.data.fruitOneArray
    }
    switch (e.detail.column){    //1.f.判断当前修改的的是父列表(case 0)还是子列表(case1)
      case 0:
        switch (e.detail.value){ //1.g.判断修改的是父列表中的第几个列表，显示相应子列表
          case 0:
            data.fruitOneArray[1] = ['苹果','星苹果','红富士苹果','蛇果'];
            break;
          case 1:
            data.fruitOneArray[1] = ['葡萄','紫葡萄','红玫瑰葡萄','马奶子葡萄','葡萄干'];
            break;
          case 2:
            data.fruitOneArray[1] = ['梨','香梨','鸭梨','雪梨','鹅黄梨','库尔勒梨'];
            break;
          case 3:
            data.fruitOneArray[1] = ['橘子','橙子','柑桔','红桔','金桔','蜜桔','小叶桔','芦柑'];
            break;
          case 4:
            data.fruitOneArray[1] = ['柚子','胡柚','葡萄柚'];
            break;
          case 5:
            data.fruitOneArray[1] = ['桃子','蜜桃','黄桃','白粉桃'];
            break;
          case 6:
            data.fruitOneArray[1] = ['小西瓜','西瓜','甜瓜','木瓜','哈密瓜','白兰瓜'];
            break;
          case 7:
            data.fruitOneArray[1] = ['草莓','蓝莓','杨梅','西梅'];
            break;
          case 8:
            data.fruitOneArray[1] = ['鲜枣','黑枣','蜜枣','冬枣','金丝小枣','枣干','大枣干'];
            break;
          case 9:
            data.fruitOneArray[1] = ['香蕉','芭蕉'];
            break;
          case 10:
            data.fruitOneArray[1] = ['柿子','柿饼'];
            break;
          case 11:
            data.fruitOneArray[1] = ['石榴','番石榴'];
            break;
          case 12:
            data.fruitOneArray[1] = ['桂圆','桂圆干','桂圆肉干'];
            break;
          case 13:
            data.fruitOneArray[1] = ['无花果','无花果干'];
            break;
        };
    };                            //1.h.其余case同理
    this.setData(data)            //1.i.返还设定数据
  },

  fruitInput:function(e){
    if(!!(e.detail.value) == true){this.setData({weightFill:false})}
    if(!!(e.detail.value) == false){this.setData({weightFill:true})}
  },                //1.b.返还数据水果质量已经填充，作为后续解锁button的条件

  fruitSubmit:function(e){
    var fruitNameOne = e.detail.value.fruitName[0];  //picker父列表
    var fruitNameTwo = e.detail.value.fruitName[1];  //picker父列表
    var fruitWeight = e.detail.value.fruitWeight;    //input值
    var that = this;
    switch (fruitNameOne){                         //4.d.判断父列表
      case 0:
        wx.getStorage({                            //4.e.获取数据库数组
          key: '苹果',
          success(res){
            var fruitList = res.data;
            switch(fruitNameTwo){                   //4.f.判断子列表
              case 0:
                var fruitCalorie = fruitList[0];    //4.g.获取数据库数组中具体的第几个值
                var fruitResult = fruitCalorie * fruitWeight;//4.h.计算结果
                that.setData({fruitResult:fruitResult});     //4.i.返还计算数据
                break;
              case 1:
                var fruitCalorie = fruitList[1];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 2:
                var fruitCalorie = fruitList[2];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 3:
                var fruitCalorie = fruitList[3];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
            }
          }
        });
        break;
      case 1:
        wx.getStorage({
          key: '葡萄',
          success(res){
            var fruitList = res.data;
            switch(fruitNameTwo){
              case 0:
                var fruitCalorie = fruitList[0];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 1:
                var fruitCalorie = fruitList[1];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 2:
                var fruitCalorie = fruitList[2];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 3:
                var fruitCalorie = fruitList[3];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
              case 4:
                var fruitCalorie = fruitList[4];
                var fruitResult = fruitCalorie * fruitWeight;
                that.setData({fruitResult:fruitResult});
                break;
            }
          }
        });
        break;
      case 2:
      wx.getStorage({
        key: '梨',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 4:
              var fruitCalorie = fruitList[4];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 5:
              var fruitCalorie = fruitList[5];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 3:
      wx.getStorage({
        key: '桔',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 4:
              var fruitCalorie = fruitList[4];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 5:
              var fruitCalorie = fruitList[5];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 6:
              var fruitCalorie = fruitList[6];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 7:
              var fruitCalorie = fruitList[7];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 4:
      wx.getStorage({
        key: '柚',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 5:
      wx.getStorage({
        key: '桃',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 6:
      wx.getStorage({
        key: '瓜',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 4:
              var fruitCalorie = fruitList[4];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 5:
              var fruitCalorie = fruitList[5];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 7:
      wx.getStorage({
        key: '梅',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 8:
      wx.getStorage({
        key: '枣',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 3:
              var fruitCalorie = fruitList[3];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 4:
              var fruitCalorie = fruitList[4];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 5:
              var fruitCalorie = fruitList[5];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 6:
              var fruitCalorie = fruitList[6];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 9:
      wx.getStorage({
        key: '蕉',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 10:
      wx.getStorage({
        key: '柿',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 11:
      wx.getStorage({
        key: '石榴',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 12:
      wx.getStorage({
        key: '桂圆',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 2:
              var fruitCalorie = fruitList[2];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
      case 13:
      wx.getStorage({
        key: '无花果',
        success(res){
          var fruitList = res.data;
          switch(fruitNameTwo){
            case 0:
              var fruitCalorie = fruitList[0];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
            case 1:
              var fruitCalorie = fruitList[1];
              var fruitResult = fruitCalorie * fruitWeight;
              that.setData({fruitResult:fruitResult});
              break;
          }
        }
      });
      break;
    };                                            //4.j.其余case同理
    this.setData({fruitResultShow:true}) //3.c.控制结果显示
    console.log(this.data.fruitResult);
  },

  onLoad:function(){      //4.a.将各种水果每千克热量值上传至数据库
    wx.setStorage({
      data:[470,300,450,550],
      key:'苹果',
    })
    wx.setStorage({
      data:[430,430,370,400,3410],
      key:'葡萄',
    })
    wx.setStorage({
      data:[480,460,440,730,370,280],
      key:'梨',
    })
    wx.setStorage({
      data:[430,470,510,400,550,420,380,430],
      key:'桔',
    })
    wx.setStorage({
      data:[410,350,350],
      key:'柚',
    })
    wx.setStorage({
      data:[480,410,540,250],
      key:'桃',
    })
    wx.setStorage({
      data:[290,330,260,270,340,210],
      key:'瓜',
    })
    wx.setStorage({
      data:[300,570,280,390],
      key:'梅',
    })
    wx.setStorage({
      data:[1220,3210,2280,1050,3940,2630,2980],
      key:'枣',
    })
    wx.setStorage({
      data:[910,1090],
      key:'蕉',
    })
    wx.setStorage({
      data:[710,2500],
      key:'柿',
    })
    wx.setStorage({
      data:[630,410],
      key:'石榴',
    })
    wx.setStorage({
      data:[710,2730,3130],
      key:'桂圆',
    })
    wx.setStorage({
      data:[590,3610],
      key:'无花果',
    })
    wx.setStorage({
      data:700,
      key:'荔枝',
    })
    wx.setStorage({
      data:390,
      key:'枇杷',
    })
    wx.setStorage({
      data:950,
      key:'山楂',
    })
    wx.setStorage({
      data:410,
      key:'菠萝',
    })
    wx.setStorage({
      data:350,
      key:'柠檬',
    })
    wx.setStorage({
      data:320,
      key:'芒果',
    })
    wx.setStorage({
      data:510,
      key:'火龙果',
    })
    wx.setStorage({
      data:290,
      key:'杨桃',
    })
    wx.setStorage({
      data:460,
      key:'樱桃',
    })
    wx.setStorage({
      data:560,
      key:'猕猴桃',
    })
    wx.setStorage({
      data:360,
      key:'杏子',
    })
    wx.setStorage({
      data:360,
      key:'李子',
    })
    wx.setStorage({
      data:1470,
      key:'榴莲',
    })
  },                        //4.b.其余数据同理

  onShow:function(){
    this.setData({
      fruitOneArray:[['苹果','葡萄','梨','桔','柚','桃','瓜','梅','枣','蕉','柿','石榴','桂圆','无花果'],['苹果','星苹果','红富士苹果','蛇果']],
    fruitOne:"点击选择",
    fruitResult:"",
    nameFill:true,
    weightFill:true,
    fruitResultShow:false
    })
  }
})