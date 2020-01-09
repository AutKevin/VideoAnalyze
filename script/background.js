//定义解析资源库的url
vip_url = {
    '598110-线路1': 'http://jx.598110.com/?url=',
    '618g-线路2': 'https://jx.618g.com/?url=',
    'mengzhongren-线路3': 'https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=',
    'aeidu-线路4': 'http://jx.aeidu.cn/index.php?url=',
    'cesms-线路5': 'http://jx.cesms.cn/?url=',
    'cesms2-线路6': 'http://jx.cesms.cn/vip2/?url=',
    'du2-线路7': 'http://jx.du2.cc/?url='
   /* 'aikan-免费无广告':'http://aikan-tv.com/?url=',
    'nepian-线路3': 'http://api.nepian.com/ckparse/?url=',
    'jiexi-线路7': 'http://www.jiexi-jiexi.com/?url=',
    'nepian-那片':'http://api.nepian.com/ckparse/?url=',
    '88gc-花园影视':'http://j.88gc.net/jx/?url=',
    'jq-金桥解析':'http://jqaaa.com/jx.php?url=',
    'mt2t-云播放':'http://y.mt2t.com/lines?url=',
    'jfys-减肥影视VIP':'http://api.91exp.com/svip/?url=',
    'shitou-石头免费':'http://jiexi.071811.cc/jx2.php?url=',
    'amzj-阿莫之家':'http://api.xcq91.top/?url=',
    'bad-百度穷二代视频解析':'http://jx.ejiafarm.com/dy.php?url='*/
};

//根据url库的key生成右键菜单，id为-前面部分，title为-后面部分
for(x in vip_url) {
   var idTitle = x.split('-');
   chrome.contextMenus.create({
	id: idTitle[0],
	type: 'normal',
	title: idTitle[1],
	contexts: ['page']
   });
}

//监听右键菜单事件
chrome.contextMenus.onClicked.addListener(function (menuItem) {
	//获取页面url
	var pageUrl = menuItem.pageUrl;
	//根据菜单id寻找资源库的url
	for (x in vip_url) {
		if (x.indexOf(menuItem.menuItemId) != -1) {
			vipURL = vip_url[x];
		}
	}
	openplayer(vipURL + encodeURIComponent(pageUrl));
});

//打开浏览器播放
function openplayer(burl, a) {
    if (!a) {
        chrome.tabs.create({
            url: burl
        }, function (c) {});
        return
    }
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (c) {
        chrome.tabs.update(c[0].id, {
            url: burl + "&title=" + encodeURI(c[0].title)
        })
    })
}

/* 单个资源库
//定义解析资源库的url
var jiexiUrL="https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=";

//创建右键菜单 https://developer.chrome.com/extensions/contextMenus#method-create
chrome.contextMenus.create({
	'type':'normal',
    'title':'使用Aeolian影视云观看',
    'id':'jiexi',
    'documentUrlPatterns':["*://www.iqiyi.com/*","*://v.youku.com/*","*://www.le.com/*","*://*.mgtv.com/*","*://*.v.qq.com/*","*://*.tudou.com/*","*://*.wasu.cn/*","*://*.ku6.com/*","*://*.56.com/*","*://*.tv.sohu.com/*","*://*.miaopai.com/*","*://*.1905.com/*","*://*.pptv.com/*","*://*.baofeng.com/*","*://*.bilibili.com/*","*://*.fun.tv/*","*://*.acfun.cn/*","*://*.kuaishou.cn/*"],
    'onclick':urlJiexi
});

//更改右键菜单
//chrome.contextMenus.update('jiexi',{'title':'Aeolian影视云 ['+message.nowTitle+']'});
//Aeolian影视云，邮件菜单的onclick事件，包含很多信息https://developer.chrome.com/extensions/contextMenus#event-onClicked
function urlJiexi(info,tab){
	var url = jiexiUrL+info.pageUrl;
    window.open(url, '_blank');
}
*/

//接收urldata
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	nowData=JSON.stringify(message);
	console.info("--------后台页接收到内容页数据-------");
	console.info(nowData);
	
	localStorage.setItem("nowData",nowData);
    var reData={"jiexiUrL":jiexiUrL};
    sendResponse(reData);
});
