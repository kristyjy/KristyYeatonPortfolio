$(document).ready(function(){

	// Mobile menu toggle //
	$('.menu-button').click(function(){
		$(this).toggleClass('open');

		$('.main-menu').toggleClass('open');
		$('.main-menu').slideToggle();
	});

});
