TRIS APP
==============

## Introduzione

Un semplice progetto basato su Ionic 1 e Angular 1 per giocare a TRIS.

### Funzionalità implementate

L'utente può navigare tramite menu laterale tra la pagina dove sono descritte le regole del gioco e il form di scelta delle opzioni di gioco.

Nel form, l'utente potrà scegliere:
- Modalità single player contro un'intelligenza artificiale o contro un altro giocatore
- Nome dei gicatori (solo uno nel caso di singolo giocatore)
- Livello di difficoltà (solo uno nel caso di singolo giocatore)
- Dimensione della griglia

Al momento, non tutte le opzioni di gioco sono state sviluppate completamente.

Dalla pagina delle regole, è possibile aprire i dettagli di alcune delle varianti tipiche di TRIS.

### Funzionalità da sviluppare

Lo sviluppo di questo prototipo si è concentrato sulla navigazione e strutturazione della applicazione. 
Gli aspetti "algoritmici" sono stati lasciati in secondo piano.
Pertanto non è stata sviluppata una AI "avanzata" che, attraverso un algoritmo di Min-MAX, determini la strategia del secondo giocatore. Nel caso l'utente selezioni "HAL 9000", cioè l'intelligenza artificiale "avanzata", l'utente viene indirizzato verso una pagina di cortesia.

Anche l'algoritmo per determinare la vincita nel caso di una griglia 4x4 non è stato inserito, pertanto la scelta della griglia grande è stata disabilitata, benchè la generazione della griglia sulla pagina di gioco consenta le creazione di una griglia di arbitraria dimensione.


## Analisi tecnica



