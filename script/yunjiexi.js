//注入js
$(document).ready(function(){
	switch(window.location.hostname){
		case "www.iqiyi.com":
			//抓取爱奇艺当前播放页的url<link rel="canonical" href="//www.iqiyi.com/v_1.html"/>
			var nowUrl="https:"+$("link[rel=canonical]").attr("href");
			//抓取当前播放页播放视频的名称
			var nowTitle=$("meta[name=irTitle]").attr("content");
			var btnpt='.videoArea:eq(0)';
		break;
		case "v.youku.com":
			var nowUrl=window.location.href;
			var nowTitle=$("#subtitle").text();
			var btnpt='.playArea';
		break;
		case "www.le.com":
			var nowUrl=$("link[rel=canonical]").attr("href");
			var nowTitle=$("meta[name=irTitle]").attr("content");
			var btnpt='#fla_box';
		break;
		case "www.mgtv.com":
			var nowUrl=$("link[rel=canonical]").attr("href");
			var nowTitle=$("meta[name=irTitle]").attr("content");
			var btnpt='#fla_box';
		break;
		default:
			var nowUrl="http://www.baidu.com";
			var nowTitle="未匹配到额~";
			var btnpt='#yunjiexi';

	}
	
	var nowData={"nowUrl":nowUrl,"nowTitle":nowTitle};
	if (nowUrl != undefined){
		//页面通信
		chrome.runtime.sendMessage(nowData, function(response){
			//{nowUrl: "https://www.iqiyi.com/v_19rvh2ahsw.html", nowTitle: "被光抓走的人"}
			console.log(nowData);
			//{jiexiUrL: "https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=", btnstatus: "close"}
			console.log(response);
			if(response.btnstatus=="open"){
				$vippaly = $('<div class="yunjiexi" style="z-index:999999;position: absolute;top:20px;left: 10px;padding: 10px 20px;font-size: 18px;background: rgba(255, 255, 255, 0.78);border-radius:6px;"><a href="'+response.jiexiUrL+nowUrl+'" style="padding-left: 24px;background:url(http://toupian.dulihu.com/mzryun3.png) no-repeat">云解析</a><span style="position: absolute;right: 0;top: 0;background: #fff;padding: 0 2px;cursor: Default;">&times;</span></div>'); 
				$(btnpt).append($vippaly);
			}
		});
	}
	/*
	//动态更改右键菜单
	window.oncontextmenu = function(){
	    chrome.runtime.sendMessage(nowData,function(response){
			console.log(nowData);
		});
	}*/
	$(document).on("click",".yunjiexi span",function(){
		$(".yunjiexi").css("display","none");
	})
});
