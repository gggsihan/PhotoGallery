$(function(){
	var $lis=$(".nav-item");
	$lis.click(function(){
		$(this).addClass("selected active")
		.siblings().removeClass("selected active");
	});
	$lis.hover(function(){
		$(this).addClass("selected");
	},function(){
		if(!($(this).hasClass("active"))){
			$(this).removeClass("selected");
		}
	});
})