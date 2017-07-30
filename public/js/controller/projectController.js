'use strict';
var app = app || {};
(function(module) {
  const projectController = {};
  projectController.init = function() {
    $('#projects').css('display', 'inline-block');
    $('#head_shot').css('display', 'none');
    $('#front').css('display', 'none');
    $('#about_me').css('display', 'none');
  }
  module.projectController = projectController;
})(app);
