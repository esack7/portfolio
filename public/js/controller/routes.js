'use strict';
var app = app || {};

page('/about', app.aboutController.init);
page('/project', app.projectController.init);
page('/social', app.socialController.init);

page();
