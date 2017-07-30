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
})(app);
