jQuery(document).ready(function($) {
	var oc = $('.owl-carousel');
	oc.each(function() {
		var el = $(this);
		el.owlCarousel($.extend({
			nav:true,
			rtl:true,
			navText:['<i class="icon-rightarrow centerfixed" aria-hidden="true"></i>','<i class="icon-leftarrow centerfixed" aria-hidden="true"></i>']
		}, el.data('option')));
	});
});