$(function(){
	//轮播图
	var bannerList=$(".banner-list");
	var bannerLis=bannerList.find("li");
	var btnList=$(".btn-list");
	var oneWidth=bannerLis.eq(0).width();
	var iNow=0;
	var timer=null;
	btnList.find("li").click(function(){
		$(this).addClass("current").siblings().removeClass("current");
		bannerList.animate({"left":-oneWidth*iNow})
	});
	timer=setInterval(function(){
		iNow++;
		if(iNow>bannerLis.length-1){
		iNow=0;
		}
		btnList.find("li").eq(iNow).trigger("click");
	},3000)
	//判断哪个商家距离用户最近
	var arr=[];
	$('.distance').each(function(){
		var distance=$(this).text();
		var num=parseFloat(distance.substring(0,distance.indexOf('k')));
		arr.push(num);
	})
	var maxNum=Math.min.apply(null, arr);
	Min(arr);
	function Min(arr){
		for(var i=0,len=arr.length;i<len;i++){
		    if(arr[i]==maxNum){
		        index=i;
		        break;
		    }
		}
		return index;
	}
	$('.distance').eq(index).parent().css('color','#cc0000').end().parents('li')
.find('span.recommend').show();	
	$('.distance').eq(index).parents('li').insertBefore($('.short-distance li:first-of-type'))
	})