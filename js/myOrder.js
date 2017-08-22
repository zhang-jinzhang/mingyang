$(function(){
	$('.shop-info i').each(function(){
		var txt=$(this).text();
		if(txt=='交易完成'){
			$(this).parents('.wrap-service').find('.operate button.cancel').hide()
		}
   })
})



