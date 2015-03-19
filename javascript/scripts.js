$(document).ready(function(){

	// Mobile menu toggle //
	$('.menu-button').click(function(){
		$(this).toggleClass('open');

		$('.main-menu').toggleClass('open');
		if($('.main-menu').hasClass('open')){
			$('.main-menu').slideDown();
		}
		else {
			$('.main-menu').slideUp();
		}
	});

});

$(window).scroll(function(){

	// Parallax Scrolling //
	$('.parallax-container').each(function(){
		if ($(this).offset().top < $(window).scrollTop()) {
			var difference = $(window).scrollTop() - $(this).offset().top;
			var half = (difference / 2) + 'px';
			$(this).find('img').css('top', half);
		} else {
			$(this).find('img').css('top', '0');
		}
	});

});