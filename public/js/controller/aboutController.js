'use strict';
var app = app || {};
(function(module) {
  const aboutController = {};
  aboutController.init = function() {
    $('#projects').css('display', 'none');
    $('#front').css('display', 'block');
    $('#about_me').css('display', 'block');
  }
  module.aboutController = aboutController;
})(app);
