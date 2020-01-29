$(function() {

	var header = $("#header"), 
		introH = $("#intro").innerHeight();
		scrollOffset = 0;

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		console.log(scrollOffset);

	});

});