//	轮播图
var picWidth=$("header").width();
var i=0
var yuanDianLeft=(picWidth/2)-110;
$("#section01 .yuanDian").css({'left':yuanDianLeft});
function dsq() {
	i++;
	if (i==5) {
		$("#section01 .yuanDian li").eq(0).css({'backgroundColor': 'white'});
		$("#section01 .yuanDian li").eq(0).siblings().css({'backgroundColor': 'dimgrey'});
	}
	if (i==6) {
		$("#section01 div").css({'left':0});
		i=1;
	}
	var new_left=i*-picWidth;
	$("#section01 div").animate({left:new_left},500);
	$("#section01 .yuanDian li").eq(i).css({'backgroundColor': 'white'});
	$("#section01 .yuanDian li").eq(i).siblings().css({'backgroundColor': 'dimgrey'});
}
var Timer=setInterval(dsq,7000);
$("#section01 .yuanDian li").click(function  () {
	clearInterval(Timer);
	i=$(this).index();
	var new_left=i*-picWidth;
	$("#section01 div").animate({left:new_left},500);
	$("#section01 .yuanDian li").eq(i).css({'backgroundColor': 'white'});
	$("#section01 .yuanDian li").eq(i).siblings().css({'backgroundColor': 'dimgrey'});
	Timer=setInterval(dsq,7000);
});
//	产品体验
var bigDivLeft=(picWidth/2)-162.5;
$("#section02 .big").css({'left':bigDivLeft});
var show1Left=(picWidth/2)-1155/2;
$(".show1").css({'left':show1Left});
$(".show2").css({'left':show1Left});
//	鼠标悬停更换图片
$("#pic5").mouseenter(function  () {
//  	document.getElementById("pic5").src="../imgs/img5_hover.jpg";
	$("#pic5").attr({src:"../imgs/img5_hover.jpg"});
})
 $("#pic5").mouseleave(function  () {
//   	document.getElementById("pic5").src="../imgs/img5.jpg";
	$("#pic5").attr({src:"../imgs/img5.jpg"})
 })
 $("#pic6").mouseenter(function  () {
//  	document.getElementById("pic6").src="../imgs/img6_hover.jpg";
	$("#pic6").attr({src:"../imgs/img6_hover.jpg"});
})
 $("#pic6").mouseleave(function  () {
//   	document.getElementById("pic6").src="../imgs/img6.jpg";
	$("#pic6").attr({src:"../imgs/img6.jpg"});
 })
 $("#pic7").mouseenter(function  () {
//  	document.getElementById("pic7").src="../imgs/img7_hover.jpg";
	$("#pic7").attr({src:"../imgs/img7_hover.jpg"});
})
 $("#pic7").mouseleave(function  () {
//   	document.getElementById("pic7").src="../imgs/img7.jpg";
	$("#pic7").attr({src:"../imgs/img7.jpg"});
 })
 $("#pic8").mouseenter(function  () {
//  	document.getElementById("pic8").src="../imgs/img8_hover.jpg";
	$("#pic8").attr({src:"../imgs/img8_hover.jpg"});
})
 $("#pic8").mouseleave(function  () {
//   	document.getElementById("pic8").src="../imgs/img8.jpg";
	$("#pic8").attr({src:"../imgs/img8.jpg"});
 })
// 加盟合作区    
$("#section03 .big").css({'left':bigDivLeft});
$("#section03 .show").css({'left':show1Left});
$("#section03 .show .li1 .pic1").mouseenter(function  () {
	$("#section03 .show li .pic1").css("border","3px solid #89B226");
	$("#section03 .show li .pic1").css("backgroundImage","url(../imgs/icon1_hover.png)");
});
$("#section03 .show .li1 .pic1").mouseleave(function  () {
	$("#section03 .show li .pic1").css("border","");
	$("#section03 .show li .pic1").css("background-image","url(../imgs/icon1.png)")
});
$("#section03 .show .li2 .pic2").mouseenter(function  () {
	$("#section03 .show li .pic2").css("border","3px solid #89B226");
	$("#section03 .show li .pic2").css("background-image","url(../imgs/icon2_hover.png)")
});
$("#section03 .show .li2 .pic2").mouseleave(function  () {
	$("#section03 .show li .pic2").css("border","");
	$("#section03 .show li .pic2").css("background-image","url(../imgs/icon2.png)")
});
$("#section03 .show .li3 .pic3").mouseenter(function  () {
	$("#section03 .show li .pic3").css("border","3px solid #89B226");
	$("#section03 .show li .pic3").css("background-image","url(../imgs/icon3_hover.png)")
});
$("#section03 .show .li3 .pic3").mouseleave(function  () {
	$("#section03 .show li .pic3").css("border","");
	$("#section03 .show li .pic3").css("background-image","url(../imgs/icon3.png)")
});
$("#section03 .show .li4 .pic4").mouseenter(function  () {
	$("#section03 .show li .pic4").css("border","3px solid #89B226");
	$("#section03 .show li .pic4").css("background-image","url(../imgs/icon4_hover.png)")
});
$("#section03 .show .li4 .pic4").mouseleave(function  () {
	$("#section03 .show li .pic4").css("border","");
	$("#section03 .show li .pic4").css("background-image","url(../imgs/icon4.png)")
});
//	加盟合作区
$("#section04 .big").css({'left':bigDivLeft});
$("#section04 .show").css({'left':show1Left});
//查询区域
$("#section05 ul").css({'left':show1Left});
//	页脚部分
var containLeft=(picWidth/2)-600;
$("footer .foot1 .contain").css({'left':containLeft});
$("footer .foot2 .contain").css({'left':containLeft});

//介绍页面
var ulLeft=(picWidth/2)-380;
$("#section10 ul").css({'left':ulLeft});
$(".introduce .text").css({'left':containLeft});
$(".introduce .pic").css({'left':containLeft});
//	切换介绍模块
$("#section10 ul li .pic1").css({"backgroundColor":"white"});
$("#section10 ul li").eq(0).click(function  () {
	$("#section10 ul li .pic1").css({"background-image":"url(../imgs/nav_icon18_hover.png)","backgroundColor":"white"});
	$("#section10 ul li .pic2").css({"background-image":"url(../imgs/nav_icon19.png)","backgroundColor":""});
	$("#section10 ul li .pic3").css({"background-image":"url(../imgs/nav_icon20.png)","backgroundColor":""});
	$("#section10 ul li .pic4").css({"background-image":"url(../imgs/nav_icon21.png)","backgroundColor":""});
	$("#section11").css("display","block");
	$("#section12").css("display","none");
	$("#section13").css("display","none");
	$("#section14").css("display","none");
	
});
$("#section10 ul li").eq(1).click(function  () {
	$("#section10 ul li .pic1").css({"background-image":"url(../imgs/nav_icon18.png)","backgroundColor":""});
	$("#section10 ul li .pic2").css({"background-image":"url(../imgs/nav_icon19_hover.png)","backgroundColor":"white"});
	$("#section10 ul li .pic3").css({"background-image":"url(../imgs/nav_icon20.png)","backgroundColor":""});
	$("#section10 ul li .pic4").css({"background-image":"url(../imgs/nav_icon21.png)","backgroundColor":""});
	$("#section11").css("display","none");
	$("#section12").css("display","block");
	$("#section13").css("display","none");
	$("#section14").css("display","none");
});
$("#section10 ul li").eq(2).click(function  () {
	$("#section10 ul li .pic1").css({"background-image":"url(../imgs/nav_icon18.png)","backgroundColor":""});
	$("#section10 ul li .pic2").css({"background-image":"url(../imgs/nav_icon19.png)","backgroundColor":""});
	$("#section10 ul li .pic3").css({"background-image":"url(../imgs/nav_icon20_hover.png)","backgroundColor":"white"});
	$("#section10 ul li .pic4").css({"background-image":"url(../imgs/nav_icon21.png)","backgroundColor":""});
	$("#section11").css("display","none");
	$("#section12").css("display","none");
	$("#section13").css("display","block");
	$("#section14").css("display","none");
});
$("#section10 ul li").eq(3).click(function  () {
	$("#section10 ul li .pic1").css({"background-image":"url(../imgs/nav_icon18.png)","backgroundColor":""});
	$("#section10 ul li .pic2").css({"background-image":"url(../imgs/nav_icon19.png)","backgroundColor":""});
	$("#section10 ul li .pic3").css({"background-image":"url(../imgs/nav_icon20.png)","backgroundColor":""});
	$("#section10 ul li .pic4").css({"background-image":"url(../imgs/nav_icon21_hover.png)","backgroundColor":"white"});
	$("#section11").css("display","none");
	$("#section12").css("display","none");
	$("#section13").css("display","none");
	$("#section14").css("display","block");
});

//	产品体验区
$("#section20 ul").css('left',(picWidth/2)-540);
$("#section20 ul li").eq(1).mouseenter(function  () {
	$("#section20 ul li a .pic2").css({"backgroundImage":"url(../imgs/nav_icon2_hover.png)"});
})
$("#section20 ul li").eq(1).mouseleave(function  () {
	$("#section20 ul li a .pic2").css({"backgroundImage":"url(../imgs/nav_icon2.png)"});
})
$("#section20 ul li").eq(2).mouseenter(function  () {
	$("#section20 ul li a .pic3").css({"backgroundImage":"url(../imgs/nav_icon3_hover.png)"});
})
$("#section20 ul li").eq(2).mouseleave(function  () {
	$("#section20 ul li a .pic3").css({"backgroundImage":"url(../imgs/nav_icon3.png)"});
})
$("#section20 ul li").eq(3).mouseenter(function  () {
	$("#section20 ul li a .pic4").css({"backgroundImage":"url(../imgs/nav_icon4_hover.png)"});
})
$("#section20 ul li").eq(3).mouseleave(function  () {
	$("#section20 ul li a .pic4").css({"backgroundImage":"url(../imgs/nav_icon4.png)"});
})
$("#section20 ul li").eq(4).mouseenter(function  () {
	$("#section20 ul li a .pic5").css({"backgroundImage":"url(../imgs/nav_icon5_hover.png)"});
})
$("#section20 ul li").eq(4).mouseleave(function  () {
	$("#section20 ul li a .pic5").css({"backgroundImage":"url(../imgs/nav_icon5.png)"});
})
$("#section20 ul li").eq(5).mouseenter(function  () {
	$("#section20 ul li a .pic6").css({"backgroundImage":"url(../imgs/nav_icon6_hover.png)"});
})
$("#section20 ul li").eq(5).mouseleave(function  () {
	$("#section20 ul li a .pic6").css({"backgroundImage":"url(../imgs/nav_icon6.png)"});
})
$("#section21 ul").css('left',(picWidth/2)-298);
$("#section22 ul").css('left',(picWidth/2)-600);
$("#section22 ul li").eq(0).mouseenter(function  () {
	$("#section22 ul li a .hover1").animate({top:"0"},200);
});
$("#section22 ul li").eq(0).mouseleave(function  () {
	$("#section22 ul li a .hover1").animate({top:"280"},200);
})
$("#section22 ul li").eq(1).mouseenter(function  () {
	$("#section22 ul li a .hover2").animate({top:"0"},200);
});
$("#section22 ul li").eq(1).mouseleave(function  () {
	$("#section22 ul li a .hover2").animate({top:"280"},200);
})
$("#section22 ul li").eq(2).mouseenter(function  () {
	$("#section22 ul li a .hover3").animate({top:"0"},200);
});
$("#section22 ul li").eq(2).mouseleave(function  () {
	$("#section22 ul li a .hover3").animate({top:"280"},200);
})
$("#section22 ul li").eq(3).mouseenter(function  () {
	$("#section22 ul li a .hover4").animate({top:"0"},200);
});
$("#section22 ul li").eq(3).mouseleave(function  () {
	$("#section22 ul li a .hover4").animate({top:"280"},200);
})
$("#section22 ul li").eq(4).mouseenter(function  () {
	$("#section22 ul li a .hover5").animate({top:"0"},200);
});
$("#section22 ul li").eq(4).mouseleave(function  () {
	$("#section22 ul li a .hover5").animate({top:"280"},200);
})
$("#section22 ul li").eq(5).mouseenter(function  () {
	$("#section22 ul li a .hover6").animate({top:"0"},200);
});
$("#section22 ul li").eq(5).mouseleave(function  () {
	$("#section22 ul li a .hover6").animate({top:"280"},200);
})
//	敬请期待
$("#bigDiv header ul li").eq(3).click(function  () {
	alert("敬请期待！")
});
$("#bigDiv header ul li").eq(4).click(function  () {
	alert("敬请期待！")
});
$("#bigDiv header ul li").eq(5).click(function  () {
	alert("敬请期待！")
});



