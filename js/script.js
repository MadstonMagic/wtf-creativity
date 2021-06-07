$(document).ready(function() {

	$.scrollify({
		easing: "easeOutExpo",
		scrollSpeed: 1000,
		offset : 0,
		scrollbars: false,
		setHeights: false,
		overflowScroll: true,
		updateHash: false,
		touchScroll: false
	});
	
	

	$(function() {
		$.scrollify( {
			section : ".section",
		});
	});
	
		
	$(".toTop").click(function() {
		
		$('.blackScreen').fadeIn(1500);
		
		function scrollToTop() {			
			$.scrollify.move("#home");
		}
		setTimeout(scrollToTop, 1000);
		
		$('.blackScreen').fadeOut(1500);
	});
})




