'use strict';

/**
 * @ngdoc function
 * @name motorzoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the motorzoApp
 */
angular.module('motorzoApp')
  .controller('HeaderController', function ($location) {
    this.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
  });
