'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos',
      method: 'GET',
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`
      }
    })
    .then(
      data => {
        console.log(data);
        return repos.all = data
      ,
      err => {console.error(err);}
      }
    ).then(callback);
  };

  // REVIEW: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  // repos.with = attr => repos.all.filter(repo => repo[attr]);
  repos.with = function(attr) {
    repos.all.filter(function(repo) {
      repo[attr];
    })
  }

  module.repos = repos;
})(app);
