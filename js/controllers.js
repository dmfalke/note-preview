angular.module('inkanote.controllers', [])
  .controller('NoteCtrl', ['$scope', function($scope) {
    "use strict";

    $scope.fonts = ['condiment', 'yesteryear', 'finger-paint', 'alef'];

    $scope.note = {
      font: $scope.fonts[0],
      message: "Dear John Smith,\n" +

               "I hope this note finds you and your family well.\n\n\n" +


               "Sincerely,\n" +
               "Joe Doe"
    };
  }]);
>>>>>>> master
