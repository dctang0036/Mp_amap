/**
   * 判断点是否在范围内, 
   */
function isPointInAreaOfGivengivenPoints(pointLongitude, pointLatitude, givenPoints) {
  var finalSum = 0, finalCount;
  var dLon1, dLon2, dLat1, dLat2, dLon;
  if (givenPoints.length < 3)
    return false;
  finalCount = givenPoints.length;
  for (var i = 0; i < finalCount; i++) {
    if (i == (finalCount - 1)) {
      dLon1 = givenPoints[i].longitude;
      dLat1 = givenPoints[i].latitude;
      dLon2 = givenPoints[0].longitude;
      dLat2 = givenPoints[0].latitude;
    } else {
      dLon1 = givenPoints[i].longitude;
      dLat1 = givenPoints[i].latitude;
      dLon2 = givenPoints[i + 1].longitude;
      dLat2 = givenPoints[i + 1].latitude;
    }
    // 判断A点是否在边的两端点之水平平行线内
    // 若在内，则可能存在交点，
    // 则判断交点是否在左射线上
    if (((pointLatitude >= dLat1) && (pointLatitude < dLat2)) || ((pointLatitude >= dLat2) && (pointLatitude < dLat1))) {
      if (Math.abs(dLat1 - dLat2) > 0) {
        // 得到A点向左射线与边的交点的横坐标
        dLon = dLon1 - ((dLon1 - dLon2) * (dLat1 - pointLatitude)) / (dLat1 - dLat2);
        if (dLon < pointLongitude)
          finalSum++;
      }
    }
  }
  if (finalSum % 2 != 0)
    return true;
  else
    return false;
}

// 转化成小程序模板语言
module.exports = {
  isPointInAreaOfGivengivenPoints: isPointInAreaOfGivengivenPoints
}