import api from '../../../config/api.js';
import util from '../../../../utils/util.js';
import user from '../../../../utils/user.js';
var app = getApp();
Page({
  onLoad: function () {
    // 页面初始化 options为页面跳转所带来的参数
    // 页面渲染完成

  },
  onReady: function () {

  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏

  },
  onUnload: function () {
    // 页面关闭

  },
  wxLogin: function (e) {

    console.log("start login");
    console.log(e);
    if (e.detail.userInfo == undefined) {
      app.globalData.hasLogin = false;
      util.showErrorToast('微信登录失败');
      return;
    }
    user.checkLogin().catch(() => {
      user.loginByWeixin(e.detail.userInfo).then(() => {
        console.log("hasLogin:" + app.globalData.hasLogin);
        app.globalData.hasLogin = true;
        wx.navigateBack({
          delta: 1
        })
      }).catch(() => {
        app.globalData.hasLogin = false;
        util.showErrorToast('微信登录失败');
      });
    });
  },
  accountLogin: function () {
    wx.navigateTo({
      url: "/pages/auth/accountLogin/accountLogin"
    });
  }
})