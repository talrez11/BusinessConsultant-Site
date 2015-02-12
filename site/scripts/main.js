/**
 * Main JavaScript
 * BusinessConsultant-Site
 *
 * Copyright (c) 2014. by Way2CU, http://way2cu.com
 * Authors:Tal Reznic
 */
var Caracal = Caracal || {};


function on_site_load() {


	// clubs section
	$("div.img_as_list span").eq(0).addClass("active");
		Caracal.testimonial_pages = new PageControl('div.testimonials_container', 'div.testimonial')
		Caracal.testimonial_pages.attachNextControl($('a.arrow_next'))
		Caracal.testimonial_pages.attachPreviousControl($('a.arrow_previous'))
		Caracal.testimonial_pages.attachControls($('div.img_as_list span'))
		.setInterval(5000)
		.setWrapAround(true)
		.setPauseOnHover(true);
}

$(on_site_load);
