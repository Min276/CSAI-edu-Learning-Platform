$(document).ready(function(){


   /* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 3;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 3);
		}
		hidePreloader();
	});  
   
   $('#navbarDropdown').click (function() {
      $('#dropdown').slideToggle('slow');
   });

   $('#navbarDropdown1').on('click', () => {
   	 $('#dropdown1').slideToggle('slow');
       $('#dropdown2').fadeOut(500);
   });

   $('#navbarDropdown2').on('click', () => {
   	 $('#dropdown2').slideToggle('slow');
       $('#dropdown1').fadeOut(500);
   });

   $(window).on('scroll load' , function() {
	if ($('.navbar').offset().top > 60) {
		$(".fixed-top").addClass("navbar-custom-active");
	}else {
		$(".fixed-top").removeClass("navbar-custom-active");
	}
})

});