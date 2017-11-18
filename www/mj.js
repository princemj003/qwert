$(document).ready(function() {
	//display menu nav-icon
	$('.js-menu').click(function(e) {
		e.preventDefault();
		$(this).toggleClass('is-open');
	});

	$('.js-menu').on('click', function(e) {
		e.preventDefault();
		$('.slide-bar').toggleClass('is-open');
	});
	
	
	//display nav-list__items
	$('.js-nav-list-column').on('click', function(e) {
		e.preventDefault();
		$(this).find('.nav-list-column__item--subnav').toggleClass('is-display');
	});
});