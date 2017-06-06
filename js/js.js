$(function(){
	$(".pl-wt-content-box ul li:nth-child(2n)").css("margin-right","0");
	$(".pl-wt-content .pl-wt-content-box").eq(0).css("display","block").siblings().css("display","none");
	$(".pl-wt a").eq(0).css({"color":"#fff","background":"#dbb972"}).siblings("a").css({"background":"none","color":"#dbb972"});
	$(".pl-wt a").click(function(){
		index=$(".pl-wt a").index(this);
		$(this).css({"color":"#fff","background":"#dbb972"}).siblings("a").css({"background":"none","color":"#dbb972"});
		$(".pl-wt-content .pl-wt-content-box").eq(index).css("display","block").siblings().css("display","none");
	
	})
	$(".xgzl-fl a").click(function(){
		index=$(".xgzl-fl a").index(this);
		$(this).addClass("xgzl-fl-active").siblings("a").removeClass("xgzl-fl-active");
		$(".xgzl-fr section").eq(index).css("display","block").siblings().css("display","none");
	})
	
})
