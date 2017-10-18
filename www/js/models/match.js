/* Model per la partita. 
Contiene le informazioni necessarie per gestire lo stato di una partita:
- dimensioni della griglia 
- turno di gioco
- numero giocatori
- fine partita (variabile booleana, true quando la partita è conclusa)
- nomi dei giocatori
- stato della griglia 
- numero di mosse effettuate
*/


function Match( p1, p2, grid, np ) {
    
    this.dim = (grid == 'standard' ? 3 : 4);
    this.turno = true;
    this.twoPlayers = (np == '2' ? true : false);
    this.end = false;
    
    var createMatrix = function(dim){
        var m = [];
        for(var i = 0; i < dim; i++){
          m.push( new Array(dim) );
        }
        return m; 
    };

    this.matrix = createMatrix(this.dim);
    
    this.nome1 = p1;
    this.nome2 = p2;
    this.moveCount = 0;

};