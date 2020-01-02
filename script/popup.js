//定义解析的url
var jiexiUrL="https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=";
//二维码
var qrUtil= 'http://qr.liantu.com/api.php?text=';

 $(document).ready(function(){
    /*
    nowData=localStorage.nowData?JSON.parse(localStorage.nowData):null;
    console.log("------------------popup.js------------------");
    console.log(nowData);
	
    if(nowData){
      $("#title").append(nowData.nowTitle);
      $("#qrcode").attr('src',qrUtil+jiexiUrL+nowData.nowUrl);  //url转为二维码
    }else{
      $("#title").append("当前页面二维码");
      $("#qrcode").attr('src',qrUtil + window.location.href);
    }*/
	
    /*直接获取当前页面url并转换为二维码*/
    chrome.tabs.getSelected(null, function (tab) {
	var tabUrl = tab.url;
	$("#title").append("当前页面二维码");
	$("#qrcode").attr('src',qrUtil + tabUrl);
    });
});

