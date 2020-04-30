// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 跳到地址解析页面
   */
  naviToRegeo: function (e) {
    wx.navigateTo({
      url: '../index1/index1'
    })
  },

  /**
   * 跳到多边形区域
   */
  naviToPoly: function (e) {
    wx.navigateTo({
      url: '../map1/map1'
    })
  },

  /**
   * 静态图
   */
  naviToStatic: function(e) {
    wx.navigateTo({
      url: '../poly/poly',
    })
  },

  /**
   * 地图围栏
   */
  naviToCov: function(e) {
    wx.navigateTo({
      url: '../cover/cover',
    })
  },

  /**
   * 输入搜索页面
   */
  naviToInp: function(e) {
    wx.navigateTo({
      url: '../input/input',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})