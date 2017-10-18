angular.module('starter.controllers')

.controller('VariantiListCtrl', function($scope, $stateParams, $state, $location, VariantiService) {

    $scope.variante = [];

    VariantiService.findById($stateParams.varianteId).then(function(variante) {
        $scope.variante = variante;
    });
});