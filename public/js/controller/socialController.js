'use strict';
var app = app || {};
(function(module) {
  const socialController = {};
  socialController.init = function() {
    $('#projects').css('display', 'none');
    $('#front').css('display', 'block');
    $('#about_me').css('display', 'none');
  }
  module.socialController = socialController;
})(app);
