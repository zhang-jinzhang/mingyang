$(function(){
	//点击切换价格
	$('.price span.pri').each(function(){
		$(this).click(function(){
			$(this).addClass('selected').siblings().removeClass('selected');
		})
	})
	$('.price span.oth').each(function(){
		$(this).click(function(){
			$(this).toggleClass('selected')
		})
	})
	//增加、减少购买票数
	var num=$('.num-wrap span').text()
	console.log(num);
	$('.num-wrap button.cut').click(function(){
		if(num<=1){
			return;
		}
		num--;
		$('.num-wrap span').text(num)
	})
	$('.num-wrap button.add').click(function(){
		num++;
		$('.num-wrap span').text(num);
	})
	//down 点击显示更多
	
	$('.down').click(function(){
		$('.other-more').show();
		$(this).hide();
		$('.up').show();
	})
	$('.up').click(function(){
		$('.other-more').hide();
		$(this).hide();
		$('.down').show();
	})
})
