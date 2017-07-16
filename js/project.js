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
  this.date = projectDataObj.date;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $($newProject).removeClass().addClass(this.name.toLowerCase().replace(/\s/g,''));
  $newProject.find('.title a h3').html(this.name);
  $newProject.find('.title a').attr('href', this.url);
  $newProject.find('#projectImage').attr('src', this.image);
  $newProject.find('#gitHubLink').html(this.gitHubUrl);
  $newProject.find('.project-body a').attr('href', this.gitHubUrl);
  $newProject.find('#collabs').html('Collaborators: ' + this.colabs);
  $newProject.find('#description').html('Description: ' + this.description);
  $newProject.find('#tools').html('Tools Used: ' + this.tools);
  $newProject.find('time').html(this.date);
  return $newProject;
};

projectData.forEach(function(projectObject) {
  projects.push(new Project(projectObject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
