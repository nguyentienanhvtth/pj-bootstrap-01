jQuery(document).ready(function(){
  var owl = $('.auto-play-slider.owl-carousel');
	owl.owlCarousel({
	    items:1,
	    loop:true,
	    margin:10,
	    autoplay:false,
	    autoplayTimeout:5500,
	    animateOut: 'fadeOut'
	});
	$("#menu-bar").click(function () {
		// body...
		$("#clone").find("nav.menu").slideToggle('fast');
	});
});

jQuery(document).ready(function(){
  $(window).on('load', function () {
		$('.ma5slider').ma5slider();
 });

});
$(document).ready(function(){

	//Check to see if the window is top if not then display button
		$(window).scroll(function(){
			if ($(this).scrollTop() > 400) {
					$('.button-scroll').fadeIn();
			} else {
					$('.button-scroll').fadeOut();
			}
	});

	//Click event to scroll to top
	$('.button-scroll').click(function(){
			$('html, body').animate({scrollTop : 0},800);
			return false;
	});
						 

});
jQuery(document).ready(function(){
  
	new WOW().init();
    
});
