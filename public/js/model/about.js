'use strict';
var app = app || {};
(function(module) {
  let parents = ['steve', 'becky'];
  let genesis = ['genesis', 'mike', 'lincoln', 'judah', 'brooklyn', 'simeon'];
  let isaac = ['isaac', 'tara', 'john timothy', 'asher', 'isaiah', 'jocelyn'];
  let rebekah = ['rebekah', 'aaron', 'evelyn', 'porter', 'franklin', 'clark'];
  let rachel = ['rachel', 'christopher', 'paris', 'liliana', 'cj'];
  let matthew = ['matthew', 'candace', 'jacob'];
  let micah = ['micah', 'sara-jane', 'jeshua', 'emmeth', 'joel', 'hadasa'];

  const familyArray = [parents.length, genesis.length, isaac.length, rebekah.length, rachel.length, matthew.length, micah.length];

  let countFamily = familyArray.reduce(( acc, cur ) => acc + cur)

  function initAboutPage() {
    $('#family_facts').append(countFamily);
  }
  module.initAboutPage = initAboutPage;
})(app);
