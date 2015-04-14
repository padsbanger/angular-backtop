var backtop = angular.module('backtop', []);

backtop.directive('backTop', function() {
  return {
    restrict: 'A',
    replace: false,
    link: function(scope, element) {
      console.log(scope);
    }
  };

});
