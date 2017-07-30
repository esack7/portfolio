'use strict';
var app = app || {};
(function(module) {
  //constructor function to instantiate every project in my portfolio
  function Project(projectDataObj) {
    Object.keys(projectDataObj).forEach(key => this[key] = projectDataObj[key]);
  }

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

  //The refactored loadAll arrow function maps all new Project objects to Project.all array.
  Project.loadAll = rows => {
    Project.all = rows.map(ele => new Project(ele));
  }

  //fetchAll pulls data from projectsData.json, if there is no localStorage and
  //then stores it in localStorage and then renders. If there is localStorage, then
  //it renders without pulling from projectData.json.
  Project.fetchAll = function() {
    if (localStorage.rawData) {
      Project.loadAll(JSON.parse(localStorage.rawData));
      Project.initIndexPage();
    } else {
      $.get('/github/user/repos')
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
  module.Project = Project;
})(app);
