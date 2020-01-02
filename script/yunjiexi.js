//注入js
$(document).ready(function(){
	switch(window.location.hostname){
		case "www.iqiyi.com":
			//抓取爱奇艺当前播放页的url<link rel="canonical" href="//www.iqiyi.com/v_1.html"/>
			var nowUrl="https:"+$("link[rel=canonical]").attr("href");
			//抓取当前播放页播放视频的名称
			var nowTitle=$("meta[name=irTitle]").attr("content");
		break;
		case "v.youku.com":
			var nowUrl=window.location.href;
			var nowTitle=$("#subtitle").text();
		break;
		case "www.le.com":
			var nowUrl=$("link[rel=canonical]").attr("href");
			var nowTitle=$("meta[name=irTitle]").attr("content");
		break;
		case "www.mgtv.com":
			var nowUrl=$("link[rel=canonical]").attr("href");
			var nowTitle=$("meta[name=irTitle]").attr("content");
		break;
		default:
			var nowUrl=window.location.href;
			var nowTitle=$("title").html();

	}
	
	var nowData={"nowUrl":nowUrl,"nowTitle":nowTitle};
	if (nowUrl != undefined){
		//页面通信
		chrome.runtime.sendMessage(nowData, function(response){
			//{nowUrl: "https://www.iqiyi.com/v_19rvh2ahsw.html", nowTitle: "被光抓走的人"}
			//{jiexiUrL: "https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=", btnstatus: "close"}
			console.info("--------内容页向后台页发送数据nowData-------");
			console.log(nowData);
			console.info("--------内容页收到后台页response数据-------");
			console.log(response);
		});
	}
});
