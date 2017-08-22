$(function(){
    // date time picker
    if($(".iDate.date").length>0){
        $(".iDate.date").datetimepicker({
            locale:"zh-cn",
            format:"YYYY-MM",
            dayViewHeaderFormat:"YYYY年 MMMM"
        });
    }
    
    //点击切换日统计、月统计页面
    $('.header a').each(function(){
    	$(this).click(function(){
    		$(this).addClass("active").siblings().removeClass("active")
    	})
    })
    
    
    //dayTime
    function show(){
	   var mydate = new Date();
	   var str = "" + mydate.getFullYear() + "-0";
	   str += (mydate.getMonth()+1)
	   return str;
	  }
    $(".day-time").html(show());
   	$('#dayTime').on('blur', function() {  
    $('.day-time').html($(this).val());  
	}); 
})