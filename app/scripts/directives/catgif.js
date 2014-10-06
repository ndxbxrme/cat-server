'use strict';

/**
 * @ngdoc directive
 * @name iloverandomcatgifsApp.directive:catGif
 * @description
 * # catGif
 */
angular.module('iloverandomcatgifsApp')
  .directive('catGif', function () {
    return {
      template: '<div class="cat-gif"></div>',
      restrict: 'E',
      replace: true,
      link: function postLink(scope, element) {
        element.bind('click', function(){
          element.css('background-image', 'url(http://thecatapi.com/api/images/get?format=src&type=gif&rnd=' + (Math.random()).toString().replace(/\./g,'') + ')');
        });
      }
    };
  });
