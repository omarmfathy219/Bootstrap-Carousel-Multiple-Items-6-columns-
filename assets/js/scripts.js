jQuery(document).ready(function () {

	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	/*
	    Wow
	*/
	new WOW().init();

	$('#carousel-example').on('slide.bs.carousel', function (e) {
		var $e = $(e.relatedTarget);
		var idx = $e.index();
		var itemsPerSlide = 6;
		var totalItems = $('.carousel-item').length;
		if (idx >= totalItems - (itemsPerSlide - 1)) {
			var it = itemsPerSlide - (totalItems - idx);
			for (var i = 0; i < it; i++) {
				// append slides to end
				if (e.direction == "left") {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				} else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});

});