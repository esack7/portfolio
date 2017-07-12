'use strict';

//constructor function to instantiate every project in my portfolio
function Project (name, tools, url, gitHub, colabs, about){
  this.name = name;
  this.tools = tools;//tools used in making project
  this.url = url;
  this.gitHub = gitHub;
  this.colabs = colabs;//collaborations
  this.about = about;
}
