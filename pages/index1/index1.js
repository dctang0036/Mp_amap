//index.js
// 引入地图
var amapFile = require("../../libs/amap-wx.js");
var markersData = [];

Page({
  data: {
    markers: [],
    longitude: '',
    latitude: '',
    textData: {}
  },
  /**
   * 点击标记点时触发
   */
  makertap: function (e) {
    var id = e.markerId;
    var that = this;
    console.log('击标记点时触发',e)
    that.showMarkerInfo(that.data.markers, id);
    // that.changeMarkerColor(markersData, id);
  },
  
  onLoad: function () {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key: 'fbce7d61d1f13efdbc971a073ed4d9d8'});

    // 获取定位信息 
    // wx.getLocation({
    //   type: 'gcj02',
    //   success: function(res) {
    //     console.log(res);
    // })

    // 获取定位信息 
    wx.getLocation({
      type: 'gcj02',
      success: function(res) {
        console.log(res);
        that.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          markers:[{
            id: 0,   //marker一定要有id，不然事件点击无效
            longitude: res.longitude, 
            latitude: res.latitude,
            iconPath: "../../img/marker.png"
          }]
        });

        // 地址解析
        myAmapFun.getRegeo({
          location: res.longitude + ',' + res.latitude,
          success: (resReo) => {
            console.log(resReo, resReo[0].regeocodeData.formatted_address)
            that.setData({
              textData: {
                name: resReo[0].name,
                desc: resReo[0].desc
              }
            })
          },
          fail: function (info) {
            wx.showModal({ title: info.errMsg })
          }
        })
      },
      fail:function(info) {
        wx.showModal({
          title: info.errMsg
        })
      }
    })

    // myAmapFun.getRegeo({
    //   iconPath: "../../img/marker.png",
    //   // type: 'gcj02',
    //   // latitude: 30.656648,
    //   // longitude: 111.37108,
    //   // location:'111.37108,30.656648',
    //   // location: res.longitude + ',' + res.latitude,
    //   success: (res) => {
    //     console.log(res, res[0].regeocodeData.formatted_address)
    //     var maker = [{
    //       id: res[0].id,
    //       longitude: res[0].longitude,
    //       latitude: res[0].latitude,
    //       iconPath: res[0].iconPath,
    //       // width: '3',
    //       // height: '50%'
    //     }];
    //     that.setData({
    //       markers: maker,
    //       // address: res[0].regeocodeData.formatted_address
    //       longitude: res[0].longitude,
    //       latitude: res[0].latitude,
    //       textData: {
    //         name: res[0].name,
    //         desc: res[0].desc
    //       }
    //     })
    //   },
    //   fail: function (info) {
    //     wx.showModal({ title: info.errMsg })
    //   }
    // })
  },

  
  showMarkerInfo: function (data, i) {
    var that = this;
    that.setData({
      textData: {
        name: data[i].longitude + ", " + data[i].latitude,
        // desc: data[i].latitude
      }
    });
  },
  // changeMarkerColor: function (data, i) {
  //   var that = this;
  //   var markers = [];
  //   for (var j = 0; j < data.length; j++) {
  //     if (j == i) {
  //       data[j].iconPath = "../../img/marker.png"; //如：..­/..­/img/marker_checked.png
  //     } else {
  //       data[j].iconPath = "../../img/marker.png"; //如：..­/..­/img/marker.png
  //     }
  //     markers.push(data[j]);
  //   }
  //   that.setData({
  //     markers: markers
  //   });
  // }

})
