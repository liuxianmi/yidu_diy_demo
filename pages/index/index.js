//diy页面
var plugin = requirePlugin("myPlugin");
Page({
  data: {
    diyconfig: getApp().diyconfig,
    PullDown: 0,
  },
  onLoad: function() {},
  /**
   * 点击链接跳转事件
   */
  page_url: function(e) {
    var data = plugin.menu_url(e.detail.data);
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
      data['url'] && getApp().diymain.jump(data['url']);
    }

  },
  /**
   *diy大部分组件会收集到用于模板消息推送的表单id,该事件会冒泡到当前函数getFormId
   * @param e
     */
  getFormId:function(e){
    var formid= e.detail.data;
    console.log(formid)//可将此表单id储存，用于消息推送
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh: function() {
    this.setData({
      PullDown: this.data.PullDown + 1
    })
    wx.stopPullDownRefresh();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
  }
})