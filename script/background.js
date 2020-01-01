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
	//localStorage.setItem("videourl",url);
    window.open(url, '_blank');
}
//接收urldata
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse){
	nowData=JSON.stringify(message);
	localStorage.setItem("nowData",nowData);
    var reData={"jiexiUrL":jiexiUrL,"btnstatus":localStorage.btn};
    sendResponse(reData);
});


