angular.module('app.services', [])

    .factory('VariantiService', function($q) {

        var varianti = [
            {"id": 1, title: "Griglie di dimensioni maggiori", testo: "Nella variante nota talvolta come misère, un giocatore vince se il suo avversario dispone tre simboli in linea. In un'altra variante, detta erroneamente quadris, i due o più partecipanti praticano il gioco su una griglia non più della dimensione standard, ma su una griglia costituita da 4×4 caselle (16:8 orizzontalmente e 8 verticalmente). Ovviamente il gioco è sempre lo stesso, con la variante unica della dimensione della griglia. Si ricorda che le dimensioni della griglia, differentemente da altri giochi su carta, sono estendibili infinitamente."},
            {"id": 2, title: "Gioco isomorfo", testo: "In un gioco isomorfo i giocatori scelgono, a turno, un numero da 1 a 9. Ogni numero può essere scelto un'unica volta. Vince il primo giocatore che riesce a produrre 15 come somma di tre dei numeri che ha scelto."       }    
        ];

        return {
            findAll: function() {
                var deferred = $q.defer();
                deferred.resolve(varianti);
                return deferred.promise;
            },

            findById: function(varianteId) {
                var deferred = $q.defer();
                var variante = varianti[varianteId - 1];
                deferred.resolve(variante);
                return deferred.promise;
            },

        }

    });