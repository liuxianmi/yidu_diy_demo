var plugin = requirePlugin("myPlugin");
var diyconfig=require("diyconfig.js");
module.exports = {
  //diy专用跳转
  onPageUrl:function(e){
    var data = plugin.menu_url(e.detail.data);
    diyconfig.showComponentTitle && data.showword && plugin.ydshow(data.showword); //点击组件弹框显示组件名称，不用时隐藏
    if(data && data['type']=='app'){//小程序跳转
      wx.navigateToMiniProgram({
        appId: data['appid'],
        path: data['path'],
        extraData: {
          foo: 'bar'
        },
        envVersion: 'release'
      })
    }else{//页面跳转
      data['url'] && this.jump(data['url']);
    }
  },
  //封装跳转
  jump: function (url, i) {
    (!i || i == '') ? i = 1 : i = i;
    if (i == 1) {
      wx.navigateTo({
        url: url,
        fail: function (i) {
          if (i.errMsg.indexOf("tabbar") >= 0) {
            if (url.indexOf('?') > -1) {
              var url2 = url.split("?");
              url = url2[0];
            }
            wx.switchTab({//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
              url: url
            })
          }
        }
      })

    } else if (i == 2) {
      wx.redirectTo({
        url: url
      })
    } else if (i == 3) {
      wx.reLaunch({//关闭所有页面，打开到应用内的某个页面。
        url: url
      })
    } else if (i == 4) {
      wx.switchTab({//跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
        url: url
      })
    } else if (i == 5) {
      wx.navigateBack()
    }
  },
  //重写页面标题
  ReName: function (e) {
    wx.setNavigationBarTitle({
      title: e ? e : ''
    })
  },
  //页面基础设置赋值
  setInitPage: function () {
    this.ReName(this.page.name);
    wx.setNavigationBarColor({
      frontColor: this.page.text_color,
      backgroundColor: this.page.nv_color,
      animation: {
        duration: 0,
        timingFunc: "easeIn"
      }
    });
    if (wx.setBackgroundColor) {
      wx.setBackgroundColor({
        backgroundColor: this.page.bg_color
      })
    };
  },
  page:{ //DIY页面配置默认信息,后台可设置
    'name':'壹度DIY',//顶部标题
    'nv_color':'#ffffff',//头部背景
    'bg_color':'#eeeeee',//窗口背景颜色
    'text_color':'#000000',//头部文字，仅支持 #ffffff 和 #000000
  }
}