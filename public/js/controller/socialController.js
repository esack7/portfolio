'use strict';
var app = app || {};
(function(module) {
  const socialController = {};
  socialController.init = function() {
    $('#projects').css('display', 'none');
    $('#head_shot').css('display', 'block');
    $('#front').css('display', 'none');
    $('#about_me').css('display', 'none');
    $('#social').css('display', 'block');
  }
  module.socialController = socialController;
})(app);
