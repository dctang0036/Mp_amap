// pages/poly/poly.js
var amapFile = require("../../libs/amap-wx.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: "fbce7d61d1f13efdbc971a073ed4d9d8" });
    wx.getSystemInfo({
      success: function (data) {
        var height = data.windowHeight;
        var width = data.windowWidth;
        var size = width + "*" + height;
        myAmapFun.getStaticmap({
          location: '111.37108,30.656648',
          zoom: 10,
          size: size,
          scale: 2,
          // markers: "mid,0xFF0000,A:111.370029,30.6606",
          paths: "10,0x0000ff,0.1,0x0000ff,0.7:111.37108,30.656648;111.316814,30.721891;111.317672,30.704889;111.307372,30.680089;111.349258,30.639039",
          success: function (data) {
            that.setData({
              src: data.url
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })

      }
    })
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