$(document).ready(function(){

   $('#navbarDropdown').on('click', () => {
      $('#dropdown').toggle();
   });

   $('#navbarDropdown1').on('click', () => {
   	 $('#dropdown1').toggle();
       $('#dropdown2').fadeOut();
   });

   $('#navbarDropdown2').on('click', () => {
   	 $('#dropdown2').toggle();
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