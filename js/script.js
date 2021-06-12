$(document).ready(function() {

	$.scrollify({
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		offset : 0,
		scrollbars: false,
		setHeights: false,
		overflowScroll: true,
		updateHash: true,
		touchScroll: false
	});
	
	

	$(function() {
		$.scrollify( {
			section : ".section",
		});
	});
	
		
	$(".toTop").click(function() {
		
		$('.blackScreen').fadeIn(1000);
		
		function scrollToTop() {			
			$.scrollify.move("#1");
		}
		setTimeout(scrollToTop, 1000);
		
		function fadeOutScreen() {
			$('.blackScreen').fadeOut(1000);
		}
		setTimeout(fadeOutScreen, 2000);
		
	});
})




