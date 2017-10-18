angular.module('starter.controllers')

.controller('PlayCtrl', function($scope, $stateParams, $state, $location) {

    $scope.partita = new Opzioni();
  
    $scope.gioca = function(form) {
      if(form.$valid) {

        if( $scope.partita.livello == "stupid" ){

          if($scope.partita.numeroGiocatori == '1' ){
            $scope.partita.giocatore2 = $scope.partita.livello == 'stupid' ? 'Scimmia' : 'HAL9000'; 
          }

          $location.path('/app/standard').search($scope.partita);
        }else{
          $location.path('/app/underconstruction');
        }
         
      }
    }; 

});