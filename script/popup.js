//定义解析的url
var jiexiUrL="https://mzrdy.applinzi.com/mzr/vipparse/index.php?url=";

 $(document).ready(function(){
 	nowData=localStorage.nowData?JSON.parse(localStorage.nowData):null;
    //console.log(nowData);
    if(nowData){
	  console.info("nowData:"+nowData);
      $("#title").append(nowData.nowTitle);
      $("#qrcode").attr('src','http://qr.liantu.com/api.php?text='+jiexiUrL+nowData.nowUrl);  //url转为二维码
    }else{
      $("#title").append("你还未观看过视频");
      $("#qrcode").attr('src','../images/icons128.png');
    }
  	//按钮设置
  	var btnstatus=(localStorage.btn == undefined)?"open":localStorage.btn;
  	if(btnstatus=="close"){
  		$(".jiexibt input").attr("checked","checked");
  	}
  	$(".jiexibt input").on("click",function(){
  		var btn=$('input:checked').val();
  		if (btn){
  			localStorage.btn="close";
  		}else{
  			localStorage.btn="open";
  		}
  	})
});

