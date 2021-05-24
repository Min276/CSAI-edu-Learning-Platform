$(document).ready(function(){

   $('#navbarDropdown').on('click', () => {
      $('#dropdown').slideToggle();
   });

   $('#navbarDropdown1').on('click', () => {
   	 $('#dropdown1').slideToggle('slow');
       $('#dropdown2').fadeOut();
   });

   $('#navbarDropdown2').on('click', () => {
   	 $('#dropdown2').slideToggle('slow');
       $('#dropdown1').fadeOut();
   });
   

   // $('#navbarDropdown2').on('click', () => {
   // 	  $('#dropdown1').fadeOut('fast');
   // });
    
   // $('#dropdown').on('click', () => {
   // 	 $('#dropdown1').hide();
   // 	 $('#dropdown2').hide();
   // });
});