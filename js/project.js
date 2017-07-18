'use strict';

//constructor function to instantiate every project in my portfolio
function Project (projectDataObj){
  this.name = projectDataObj.name;
  this.id = projectDataObj.name.toLowerCase().replace(/\s/g,'');
  this.image = projectDataObj.image;
  this.url = projectDataObj.url;
  this.gitHubUrl = projectDataObj.gitHubUrl;
  this.colabs = projectDataObj.colabs;
  this.description = projectDataObj.description;
  this.tools = projectDataObj.tools;
  this.date = projectDataObj.date;
}

Project.all = [];

Project.prototype.toHtml = function() {
  var template = $('#projects-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

projectData.forEach(function(projectObject) {
  Project.all.push(new Project(projectObject));
});

Project.all.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
