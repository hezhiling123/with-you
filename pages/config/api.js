// 以下是业务服务器API地址
// 本机开发时使用
var WxApiRoot = 'http://localhost:8080/wx/';
// 局域网测试使用
// var WxApiRoot = 'http://192.168.0.101:8080/wx/';
// 云平台上线时使用
// var WxApiRoot = 'https://litemall.menethil.com.cn/wx/';
// var WxApiRoot = 'https://www.menethil.com.cn/wx/';

export const IndexUrl = WxApiRoot + 'home/index';
export const CatalogList = WxApiRoot + 'catalog/index';
export const CatalogCurrent = WxApiRoot + 'catalog/current';
export const CatalogAll = WxApiRoot + 'catalog/all';
export const AuthLoginByWeixin = WxApiRoot + 'auth/login_by_weixin';
export const GoodsCount = WxApiRoot + 'goods/count';
export const GoodsList = WxApiRoot + 'goods/list';
export const GoodsCategory = WxApiRoot + 'goods/category';
export const GoodsDetail = WxApiRoot + 'goods/detail';
export const GoodsRelated = WxApiRoot + 'goods/related';
export const BrandList = WxApiRoot + 'brand/list';
export const BrandDetail = WxApiRoot + 'brand/detail';
export const CartList = WxApiRoot + 'cart/index';
export const CartAdd = WxApiRoot + 'cart/add';
export const CartFastAdd = WxApiRoot + 'cart/fastadd';
export const CartUpdate = WxApiRoot + 'cart/update';
export const CartDelete = WxApiRoot + 'cart/delete';
export const CartChecked = WxApiRoot + 'cart/checked';
export const CartGoodsCount = WxApiRoot + 'cart/goodscount';
export const CartCheckout = WxApiRoot + 'cart/checkout';
export const CommentPost = WxApiRoot + 'comment/post';
export const TopicList = WxApiRoot + 'topic/list';
export const TopicDetail = WxApiRoot + 'topic/detail';
export const TopicRelated = WxApiRoot + 'topic/related';
export const SearchIndex = WxApiRoot + 'search/index';
export const SearchResult = WxApiRoot + 'search/result';
export const SearchHelper = WxApiRoot + 'search/helper';
export const SearchClearHistory = WxApiRoot + 'search/clearhistory';
export const AddressList = WxApiRoot + 'address/list';
export const AddressDetail = WxApiRoot + 'address/detail';
export const AddressSave = WxApiRoot + 'address/save';
export const AddressDelete = WxApiRoot + 'address/delete';
export const OrderSubmit = WxApiRoot + 'order/submit';
export const OrderPrepay = WxApiRoot + 'order/prepay';
export const OrderList = WxApiRoot + 'order/list';
export const OrderDetail = WxApiRoot + 'order/detail';
export const OrderCancel = WxApiRoot + 'order/cancel';
export const OrderRefund = WxApiRoot + 'order/refund';
export const OrderDelete = WxApiRoot + 'order/delete';
export const OrderConfirm = WxApiRoot + 'order/confirm';
export const OrderGoods = WxApiRoot + 'order/goods';
export const OrderComment = WxApiRoot + 'order/comment';
export const FootprintList = WxApiRoot + 'footprint/list';
export const FootprintDelete = WxApiRoot + 'footprint/delete';
export const GroupOnList = WxApiRoot + 'groupon/list';
export const GroupOnMy = WxApiRoot + 'groupon/my';
export const GroupOnDetail = WxApiRoot + 'groupon/detail';
export const GroupOnJoin = WxApiRoot + 'groupon/join';
export const StorageUpload = WxApiRoot + 'storage/upload'; //图片上传