$(function(){
	var $navlis=$(".nav-item");
	$navlis.click(function(){
		$(this).addClass("selected active")
		.siblings().removeClass("selected active");
		$(".cd-hero-slider >li").eq($(this).index()).addClass("active")
		.siblings().removeClass("active");
	});
	$navlis.hover(function(){
		$(this).addClass("selected");
	},function(){
		if(!($(this).hasClass("active"))){
			$(this).removeClass("selected");
		}
	});

	//设定current year
	$(".tm-copyright-year").text(new Date().getFullYear());
})