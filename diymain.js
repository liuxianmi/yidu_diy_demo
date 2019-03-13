module.exports = {
  //跳转
  jump: function (url, i) {
    console.log(url);
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
  ReName: function (e) {
    wx.setNavigationBarTitle({
      title: e ? e : ''
    })
  },
  setting: function (page) {
    wx.setNavigationBarColor({
      frontColor: page.text_color,
      backgroundColor: page.nv_color,
      animation: {
        duration: 0,
        timingFunc: "easeIn"
      }
    });
  },
}