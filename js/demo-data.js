var demoData = [{
		name: "list-news",
		gif: "img/gif/list-news.gif",
		path: "demo/base/list-news.html",
		tip: "【新闻列表】 演示下拉刷新添加新数据到列表顶部"
	},
	{
		name: "list-products",
		gif: "img/gif/list-products.gif",
		path: "demo/base/list-products.html",
		tip: "【商品列表】 演示下拉刷新重置列表数据"
	},
	{
		name: "list-mescroll-one",
		gif: "img/gif/list-mescroll-one.gif",
		path: "demo/base/list-mescroll-one.html",
		tip: "【单mescroll】 每次切换菜单都重置列表,不缓存数据"
	},
	{
		name: "list-mescroll-body",
		gif: "img/gif/list-mescroll-body.gif",
		path: "demo/base/list-mescroll-body.html",
		tip: "【body为滚动区域】 无需设置高度,写法简单,适用于无标题界面,避免滚动条穿顶"
	},
	{
		name: "list-mescroll-more",
		gif: "img/gif/list-mescroll-more.gif",
		path: "demo/base/list-mescroll-more.html",
		tip: "【多mescroll】 每个菜单列表仅初始化一次,切换菜单缓存数据"
	},
	{
		name: "list-full-lock",
		gif: "img/gif/list-full-lock.gif",
		path: "demo/base/list-full-lock.html",
		tip: "【满屏加载与锁定滑动】 自动满屏加载,可临时锁定上拉刷新和下拉加载"
	},
	{
		name: "list-products-vue",
		gif: "img/gif/list-products-vue.gif",
		path: "demo/base/list-products-vue.html",
		tip: "mescroll在vue中的使用. 对, 就是这么精简 ~"
	},
	{
		name: "list-mescroll-lazy",
		gif: "img/gif/list-mescroll-lazy.gif",
		path: "demo/base/list-mescroll-lazy.html",
		tip: "【mescroll图片懒加载】 支持配置各种占位图与显示动画,上手超简单"
	},
	{
		name: "mescroll-options",
		gif: "img/gif/mescroll-options.gif",
		path: "demo/base/mescroll-options.html",
		tip: "【mescroll所有配置项】 源码展示mescroll所有配置项, 快速使用与调试mescroll"
	},
	{
		name: "list-msg",
		gif: "img/gif/list-msg.gif",
		path: "demo/base/list-msg.html",
		tip: "【聊天记录】 下拉加载数据,类似微信QQ的聊天记录"
	},
	{
		name: "sticky",
		gif: "img/gif/mescroll-sticky.gif",
		path: "demo/sticky/mescroll-sticky.html",
		tip: "吸顶悬浮效果 -- sticky与滚动监听"
	},
	{
		name: "search",
		gif: "img/gif/mescroll-search.gif",
		path: "demo/search/mescroll-search.html",
		tip: "关键词搜索 -- mescroll.resetUpScroll()的灵活运用"
	},
	{
		name: "swiper-tap",
		gif: "img/gif/mescroll-swiper-tap.gif",
		path: "demo/swiper/mescroll-swiper-tap.html",
		tip: "轮播切换效果 -- mescroll-swiper-tap"
	},
	{
		name: "swiper-nav",
		gif: "img/gif/mescroll-swiper-tap.gif",
		path: "demo/swiper/mescroll-swiper-nav.html",
		tip: "轮播导航效果 -- mescroll-swiper-nav"
	},
	{
		name: "dot-jump",
		gif: "img/gif/mescroll-dotJump.gif",
		path: "demo/dotJump/dotJump.html",
		tip: "弹跳小球 -- 结束下拉刷新时扩散渐隐的效果,进一步拓宽下拉刷新的可定制性"
	},
	{
		name: "zhihu",
		gif: "img/gif/zhihu.gif",
		path: "demo/zhihu/zhihu.html",
		tip: "【知乎 v3.53.0】 APP的下拉刷新和上拉加载"
	},
	{
		name: "xinlang",
		gif: "img/gif/xinlang.gif",
		path: "demo/xinlang/xinlang.html",
		tip: "【新浪微博 v7.6.1】 APP的下拉刷新和上拉加载"
	},
	{
		name: "beibei",
		gif: "img/gif/beibei.gif",
		path: "demo/beibei/beibei.html",
		tip: "【贝贝 v6.0.0】 APP的下拉刷新和上拉加载"
	},
	{
		name: "yabuli",
		gif: "img/gif/yabuli.gif",
		path: "demo/yabuli/yabuli.html",
		tip: "【雅布力 v2.4.0】 APP的下拉刷新和上拉加载"
	},
	{
		name: "taobao",
		gif: "img/gif/taobao.gif",
		path: "demo/taobao/taobao.html",
		tip: "【淘宝 v6.8.0】 APP的下拉刷新和上拉加载"
	},
	{
		name: "jingdong",
		gif: "img/gif/jingdong.gif",
		path: "demo/jingdong/jingdong.html",
		tip: "【京东 v6.1.0】 APP的下拉刷新和上拉加载"
	},
	{
		name: "meituan",
		gif: "img/gif/meituan.gif",
		path: "demo/meituan/meituan.html",
		tip: "【美团 v8.2.3】 APP的下拉刷新和上拉加载"
	},
	{
		name: "meitunmama",
		gif: "img/gif/meitunmama.gif",
		path: "demo/meitunmama/meitunmama.html",
		tip: "【美囤妈妈 v2.0.5】 APP的下拉刷新和上拉加载"
	}
]

/*根据name获取数据*/
function getDemoObj(name){
	var len=demoData.length;
	for (var i = 0; i < len; i++) {
		var demoObj=demoData[i];
		if (name==demoObj.name) {
			return demoObj;
		}
	}
	return null;
}