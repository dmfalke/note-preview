angular.module('inkanote.filters', []).
  filter('cameldash', function() {
    return function(input) {
      return input.split("-").map(function(a) {
        return a[0].toUpperCase() + a.slice(1)
      }).join(" ");
    }
  });
