angular.module('inkanote.controllers', [])
  .controller('NoteCtrl', ['$scope', function($scope) {
    "use strict";

    $scope.fonts = ['condiment', 'yesteryear', 'finger-paint', 'alef'];
    $scope.colors = ['black', 'blue'];
    $scope.maxRows = 15;
    $scope.maxCols = 50;

    $scope.note = {
      font: $scope.fonts[2],
      color: $scope.colors[0],
      message: "Dear John Smith,\n" +

               "I hope this note finds you and your family well.\n\n\n" +


               "Sincerely,\n" +
               "Joe Doe"
    };
  }]);
