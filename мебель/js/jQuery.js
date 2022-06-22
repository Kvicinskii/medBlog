/* кнопка скрола */

jQuery(document).ready(function($){

    var button = $('.scroll-to-top');
  
    $(window).scroll(function(){
      if ($(window).scrollTop() > 300) {
        button.addClass('show');
      } else {
        button.removeClass('show');
      }
    });
  
    button.on('click',function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  });
  /* -------------------- */