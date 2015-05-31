angular.module('BranchedTutorial')
    .directive('tutorial', function() {
        'use strict';

        return {
            restrict: 'E',
            templateUrl: 'templates/tutorial.html',
            scope: {
                tutorial: '='
            },
            controller: function($scope) {
                // ...
            }
        }
    });