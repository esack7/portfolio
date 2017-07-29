'use strict';
var app = app || {};
(function() {
  $(function() {
    $('.icon-menu').on('click',function(e){
      e.preventDefault();
      $('nav ul').slideToggle();
    });
    $('nav ul').css('@media only screen and (max-width: 640px) {nav ul{display: block;}}');
  });


  $('.main-nav ul li:first').click(function() {
    $('#projects').css('display', 'inline-block');
    $('#front').css('display', 'none');
    $('#about_me').css('display', 'none');
  });

  $('.main-nav ul li:eq(1)').click(function() {
    $('#projects').css('display', 'none');
    $('#front').css('display', 'block');
    $('#about_me').css('display', 'block');
  });

  $('.main-nav ul li:last').click(function() {
    $('#projects').css('display', 'none');
    $('#front').css('display', 'block');
    $('#about_me').css('display', 'none');
  });
})(app);
