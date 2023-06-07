jQuery(document).ready(function($) {
	var oc = $('.owl-carousel');
	oc.each(function() {
		var el = $(this);
		el.owlCarousel($.extend({
			nav:false,
			navText:['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>']
		}, el.data('option')));
	});
});