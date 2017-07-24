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
//PRAISE THE SUN!!!
Project.all = [];

//toHtml is the functionality to utilize handlebars.js
Project.prototype.toHtml = function() {
  var template = $('#projects-template').html();
  var templateRender = Handlebars.compile(template);
  return templateRender(this);
};

//initIndexPage renders objects from Project.all array to the DOM
Project.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
}

//loadAll takes rawData retrieved from localStorage and push's 'new Project' to
//Project.all array.
Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
}

//fetchAll pulls data from projectsData.json, if there is no localStorage and
//then stores it in localStorage and then renders. If there is localStorage, then
//it renders without pulling from projectData.json.
Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    Project.initIndexPage();
  } else {
    $.getJSON('data/projectsData.json')
      .then(
        function(data) {
          localStorage.setItem('rawData', JSON.stringify(data));
          Project.loadAll(data);
          Project.initIndexPage();
        },
        function(error) {
          console.log('error', error);
        }
      )
  }
}
