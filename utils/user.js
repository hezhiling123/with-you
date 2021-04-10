/**
 * 用户相关服务
 */
import util from './util.js';
import { AuthLoginByWeixin, LOGIN_BY_WEIXIN } from '../pages/config/api.js';


/**
 * Promise封装wx.checkSession
 */
function checkSession() {
  return new Promise(function(resolve, reject) {
    wx.checkSession({
      success: function() {
        resolve(true);
      },
      fail: function() {
        reject(false);
      }
    })
  });
}

/**
 * Promise封装wx.login
 */
function login() {
  return new Promise(function(resolve, reject) {
    wx.login({
      success: function(res) {
        if (res.code) {
          resolve(res);
        } else {
          reject(res);
        }
      },
      fail: function(err) {
        reject(err);
      }
    });
  });
}

/**
 * 调用微信登录
 */
function loginByWeixin(userInfo) {
  console.log("登录测试");

  return new Promise(async function(resolve, reject) {
    try {
      const res = await login();
      console.log(res);
      console.log("code:" + res.code);
      console.log("userInfo: " + userInfo);
      console.log("url: " + LOGIN_BY_WEIXIN);
      //登录远程服务器
      util.request(LOGIN_BY_WEIXIN, {
        code: res.code,
        userInfo: userInfo
      }, 'POST').then(res_1 => {
        console.log(code);
        console.log(userInfo);
        if (res_1.errno === 0) {
          //存储用户信息
          wx.setStorageSync('userInfo', res_1.data.userInfo);
          wx.setStorageSync('token', res_1.data.token);
          resolve(res_1);
        } else {
          reject(res_1);
        }
      }).catch((err) => {
        reject(err);
      });
    } catch (err_1) {
      reject(err_1);
    }
  });
}

/**
 * 判断用户是否登录
 */
function checkLogin() {
  return new Promise(function(resolve, reject) {
    if (wx.getStorageSync('userInfo') && wx.getStorageSync('token')) {
      checkSession().then(() => {
        resolve(true);
      }).catch(() => {
        reject(false);
      });
    } else {
      reject(false);
    }
  });
}

export default {
  loginByWeixin,
  checkLogin,
};