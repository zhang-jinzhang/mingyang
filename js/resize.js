$(function(){
	function setFontSize() {
            var winWidth = $(window).width();
            var size = winWidth / 10;
            document.documentElement.style.fontSize = size + 'px';
        }

    setFontSize();
})

