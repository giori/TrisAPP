angular.module('starter.controllers')

.controller('RegoleCtrl', function($scope, $stateParams, $state, VariantiService) {

    $scope.varianti = [];

    var findAllEmployees = function() {
        VariantiService.findAll().then(function (varianti) {
            $scope.varianti = varianti;
        });
    }

    findAllEmployees();
  
});