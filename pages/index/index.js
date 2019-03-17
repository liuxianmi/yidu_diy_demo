//diy页面
Page({
  data: {
    diyconfig: getApp().diyconfig,
    PullDown: 0,
    page_id: 0,//后续扩展用，暂无需配置
    scrollTop:0
  },
  onLoad: function() {
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
   * 点击链接跳转事件
   */
  onPageUrl: function(e) {
    getApp().diymain.onPageUrl(e);
  },
  /**
   * //初始化页面配置数据
     */
  onInitPage:function(e){
    getApp().diymain.page=e.detail.data;
    getApp().diymain.setInitPage();
  },
  /**
   * 监听客服组件
   */
  setContactButton:function(e){
    this.setData(e.detail)
  },
  /**
   * 监听页面滑动
   */
  onPageScroll(e) {
    this.setData(e)
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