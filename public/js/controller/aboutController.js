'use strict';
var app = app || {};
(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    $('#projects').css('display', 'none');
    $('#head_shot').css('display', 'block');
    $('#front').css('display', 'none');
    $('#about_me').css('display', 'block');
    $('#social').css('display', 'none');
  }
  module.aboutController = aboutController;
})(app);
