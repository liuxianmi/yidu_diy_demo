// h5链接
var plugin = requirePlugin("myPlugin");
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    if (!e.url){
      plugin.toast('外链不能为空');
      setTimeout(function(){
        getApp().diymain.jump('',5);
      },1e3)
    }else{
      wx.setNavigationBarTitle({
        title: e.name ? decodeURIComponent(e.name) : '网页'
      })
      e.web_url = unescape(e.url);
      e.show=true;
      this.setData(e)
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (e) {
    var that = this.data;
    return {
      title: that.name,
      path: '/pages/index/web?name=' + that.name + '&url=' + that.url,//改成自己的页面路径
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
})