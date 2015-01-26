/**
 * Main JavaScript
 * BusinessConsultant-Site
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */
var Caracal = Caracal || {};

function on_site_load() {

	if ($('div.testimonial').length > 0) {

		Caracal.testimonial_pages = new PageControl('div.testimonials_container', 'div.testimonial')
		Caracal.testimonial_pages.attachNextControl($('a.arrow_next'))
		Caracal.testimonial_pages.attachPreviousControl($('a.arrow_previous'))
		.setInterval(5000)
		.setWrapAround(true)
		.setPauseOnHover(true);
	}
}

$(on_site_load);
