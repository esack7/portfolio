'use strict';
var app = app || {};
(function(module) {
  const projectController = {};
  projectController.init = function() {
    $('#projects').css('display', 'inline-block');
    $('#front').css('display', 'none');
    $('#about_me').css('display', 'none');
  }
  module.projectController = projectController;
})(app);
