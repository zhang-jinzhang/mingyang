$(function(){
//判断滚动条已到达底部
	 $(window).scroll(function() {
	    if ($(document).scrollTop() >= $(document).height() - $(window).height()) {
	      $('.warning').show();
	    }
	  });
})