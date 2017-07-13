'use strict';

var projects = [];

//constructor function to instantiate every project in my portfolio
function Project (projectDataObj){
  this.name = projectDataObj.name;
  this.image = projectDataObj.image;
  this.url = projectDataObj.url;
  this.gitHubUrl = projectDataObj.gitHubUrl;
  this.colabs = projectDataObj.colabs;
  this.description = projectDataObj.description;
  this.tools = projectDataObj.tools;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('section > h3').html(this.name);
  $newProject.find('#projectImage').attr('src', this.image);
  $newProject.find('header > a').attr('href', this.url);
  $newProject.find('header > a').html(this.gitHubUrl);
};

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});
