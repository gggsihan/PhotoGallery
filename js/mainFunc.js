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

	//设定popupBg高度
	var winHeight=$(window).height();
	
	$(".popupBg").css("height",winHeight);
	$(window).resize(function(){
		winHeight=$(window).height();
		$(".popupBg").css("height",winHeight);
	})

	//随页面滚动popup移动
	$(window).scroll(function(){
		var scrolltop=$(this).scrollTop();
		$(".popupBg").css("top",scrolltop);
		var oldimg=$(window).height()/2;
		$(".pop-content").css("top",oldimg+scrolltop);
		
	})
	
	

	//隐藏popup
	$(".popup").hide();

	var count;
	//点击图片时弹出popup
	$(".cd-full-width .grid-item").click(function(e){
		var imgUrl=$(this).find("a").attr("href");
		$(".pop-figure img").attr("src",imgUrl);
		$(".popup").show();
		e.preventDefault();
		count=$(this).index()+1;
		$(".pop-counter").text(count+"/16");
		$("body").addClass("noScroll");
		$("html").addClass("noScroll");

		//让popup始终在屏幕正中间
		
	});

	//点击关闭
	$(".pop-content button").click(function(e){
		$(".popup").hide();
		e.preventDefault();
		$("body").removeClass("noScroll");
		$("html").removeClass("noScroll");
	});

	//点击下一张
	$(".pop-arrow-right").click(function(e){
		if(count<16){
			var nextImgUrl=$(".cd-full-width .grid-item").eq(count).find("a").attr("href");
			$(".pop-figure img").attr("src",nextImgUrl);
			count++;
			$(".pop-counter").text(count+"/16");
		}
		
	});

	//点击上一张
	$(".pop-arrow-left").click(function(e){
		if(count>1){
			var previousImgUrl=$(".cd-full-width .grid-item").eq(count-2).find("a").attr("href");
			$(".pop-figure img").attr("src",previousImgUrl);
			count--;
			$(".pop-counter").text(count+"/16");
		}
		
	});

})