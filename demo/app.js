var app = angular.module('app', ['backtop']);

app.controller('mainCtrl', ['$scope', function($scope) {
  $scope.test = 'Hello'
}]);