// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'http://localhost:8184/';
var USER_API_ROOT = 'http://localhost:8184/';
// 局域网测试使用
// var WxApiRoot = 'http://192.168.0.101:8080/wx/';
// 云平台上线时使用
// var WxApiRoot = 'https://litemall.menethil.com.cn/wx/';
// var WxApiRoot = 'https://www.menethil.com.cn/wx/';

export const TEST = USER_API_ROOT + 'test/test';
export const LOGIN_BY_WEIXIN = USER_API_ROOT + "login/loginByWeiXin";
