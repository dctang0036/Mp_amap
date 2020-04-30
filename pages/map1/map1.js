// pages/map2/map2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 111.336727,
    latitude: 30.676872,
    polygons: [],
    markers: [{
      longitude: 111.368656,
      latitude: 30.658563
    },
    {
      longitude: 111.389598,
      latitude: 30.693111
    },
    {
      longitude: 111.316814,
      latitude: 30.707576
    },
    {
      longitude: 111.306857, 
      latitude: 30.68012
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //创建多边形围栏/服务范围
    if (this.data.markers.length < 3) {
      return wx.showToast({
        title: '请先在地图上标记点,且不少于三个点',
        icon: 'none'
      })
    }
    let polygons = this.data.polygons;
    let markers = this.data.markers;
    let newArray = [];
    let params = {
      fillColor: "#1791fc66",
      strokeColor: "#FFF",
      strokeWidth: 2,
      zIndex: 1
    }
    for (let j = 0; j < markers.length; j++) {
      let obj = {
        latitude: markers[j].latitude,
        longitude: markers[j].longitude
      };
      newArray.push(obj);
    }
    var polygon = {};
    polygon.points = newArray;
    // polygons 数据类型为Array
    newArray = Object.assign(polygon, params);
    this.setData({
      'polygons[0]': newArray
    })

    console.log(newArray);
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