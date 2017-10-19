angular.module('starter.controllers')
.controller('MatchCtrl', function($scope, $stateParams, $state, $location, $ionicPopup, $ionicLoading) {
    
    var params = $location.search();

    $scope.statoPartita = new Match(params.giocatore1, params.giocatore2, params.griglia, params.numeroGiocatori );
  
    $scope.verify = function(x, y, p){
      
        // check col
        for(var i = 0; i < $scope.statoPartita.dim; i++){
            if($scope.statoPartita.matrix[x][i] != p)        
            break;
            
            if(i == $scope.statoPartita.dim-1){
                $scope.statoPartita.end = true;
                return $scope.announceResult(false, $scope.statoPartita.turno ? $scope.statoPartita.nome1 : $scope.statoPartita.nome2 );
            }
        }
      
        //check row
        for(var i = 0; i < $scope.statoPartita.dim; i++){
            if($scope.statoPartita.matrix[i][y] != p)
            break;
    
            if(i == $scope.statoPartita.dim-1){
                $scope.statoPartita.end = true;
                return $scope.announceResult(false, $scope.statoPartita.turno ? $scope.statoPartita.nome1 : $scope.statoPartita.nome2 );
            }
        }
    
        if(x == y){
            //we're on a diagonal
            for(var i = 0; i < $scope.statoPartita.dim; i++){
                if($scope.statoPartita.matrix[i][i] != p)
                    break;
                if(i == $scope.statoPartita.dim-1){
                    $scope.statoPartita.end = true;
                    return $scope.announceResult(false, $scope.statoPartita.turno ? $scope.statoPartita.nome1 : $scope.statoPartita.nome2 );
                }
            }
        }
  
       //check anti diag (thanks rampion)
        if(parseInt(x) + parseInt(y) == $scope.statoPartita.dim - 1){
            for(var i = 0;i<$scope.statoPartita.dim;i++){
                if($scope.statoPartita.matrix[i][($scope.statoPartita.dim-1)-i] != p)
                    break;
                if(i == $scope.statoPartita.dim-1){
                    $scope.statoPartita.end = true;
                    return $scope.announceResult(false, $scope.statoPartita.turno ? $scope.statoPartita.nome1 : $scope.statoPartita.nome2 );
                }
            }
        }
  
        if($scope.statoPartita.moveCount == ($scope.statoPartita.dim*$scope.statoPartita.dim)){
            $scope.statoPartita.end = true;
            return $scope.announceResult(true,'');
        }
  
    };
   
    $scope.getNumber = function(num) {
      return new Array(num);   
    }
   
    $scope.setCell = function(e){
        var elem = angular.element(e.srcElement);
     
        if(elem.attr("disabled")=="disabled") return;
        
        elem.attr("disabled",true);
        $scope.statoPartita.moveCount++;

        if($scope.statoPartita.turno){
            
            elem.addClass("p1 ion-close");
            
            $scope.statoPartita.matrix[ elem.attr('id')[0] ][ elem.attr('id')[1] ] = 1;
            $scope.verify( elem.attr('id')[0], elem.attr('id')[1], 1 );
            $scope.statoPartita.turno = !$scope.statoPartita.turno;
        
            if(!$scope.statoPartita.twoPlayers && !$scope.statoPartita.end){
                
                var eleId = $scope.findStupidMove();
                var result = document.getElementById(eleId);          
                
                $ionicLoading.show();
                setTimeout(function(){
                    $ionicLoading.hide();
                    $scope.setCell({'srcElement': result});
                }, 500);       
            }
    
        }else{
            elem.addClass("p2 ion-record");
    
            $scope.statoPartita.matrix[ elem.attr('id')[0] ][ elem.attr('id')[1] ] = 0;
            $scope.verify( elem.attr('id')[0], elem.attr('id')[1], 0 );

            $scope.statoPartita.turno = !$scope.statoPartita.turno;
        }
     
    };

    // MOSSA CASUALE AI - sceglie randomicamente tra le celle rimanenti
    $scope.findStupidMove = function(){
        var possibleMove = [];
        for(var i = 0; i< $scope.statoPartita.dim; i++){
            for(var j = 0; j < $scope.statoPartita.dim; j++){
                if( $scope.statoPartita.matrix[i][j] != 1 && $scope.statoPartita.matrix[i][j] != 0) possibleMove.push(i+''+j);
            }
        }
        
        console.log(possibleMove);
        var item = possibleMove[Math.floor(Math.random()*possibleMove.length)];

        return item;
    };

    $scope.backToHome = function(){
        var confirmPopup = $ionicPopup
             .confirm({
                 title : 'Attenzione!',
                 template : 'Sei sicuro di voler abbandonare la partita?'
             });

        confirmPopup.then(function(res) {
            if (res) {
                $location.path('/app/gioca')
            } else {
                // UTENTE NON CONFERMA
            }
        });
    }

    $scope.announceResult = function(draw, nome){
        if(draw){
            var confirmPopup = $ionicPopup
            .confirm({
                title : 'Pari e patta!',
                template : 'Vuoi tornare alla homepage?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    $location.path('/app/gioca')
                } else {
                    // UTENTE NON CONFERMA
                }
            });
        }else{
            var confirmPopup = $ionicPopup
            .confirm({
                title : nome + ' è il vincitore!',
                template : 'Vuoi tornare alla homepage?'
            });

            confirmPopup.then(function(res) {
                if (res) {
                    $location.path('/app/gioca')
                } else {
                    // UTENTE NON CONFERMA
                }
            });
        }
    }
  
});
  