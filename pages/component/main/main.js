// pages/component/main/main.js
Page({

  onShareAppMessage() {
    return {
      title: '主页',
      path: '/pages/component/main/main'
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    bannerImgList: ['/images/head/head-image.png', '/images/head/head-image.png'],
    indicatorDots: true,
    vertical: false,
    autoPlay: true,
    interval: 6000,
    duration: 1500,
    recommendGoodsCategoryList: [{
        "recommendImgUrl": "/images/head/head-image.png",
        "recommendGoodsList": [{
          "goodsId": "111111",
          "goodsName": "kkk",
          "goodsImgUrl": "/images/head/head-image.png"
        }]
      },
      {
        "recommendImgUrl": '/images/head/head-image.png',
        "recommendGoodsList": [{
            "goodsId": "111111",
            "goodsName": "kkk",
            "goodsImgUrl": "/images/head/head-image.png"
          },
          {
            "goodsId": "33333",
            "goodsName": "aaa",
            "goodsImgUrl": "/images/head/head-image.png"
          }
        ]
      }
    ]
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