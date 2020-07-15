// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

// chiedo la parola all'utente
var parola = prompt('Ciao! Inserisci una parola');

// stampo i risultati
console.log(parola);
console.log(ifPalindroma(parola));

// funzione per capire se la parola è palindroma o meno
function ifPalindroma(parola) {
    var reverse = "";

    // divido la parola in lettere con il ciclo for e parto dalla fine per invertire il senso
    for (var i=parola.length - 1; i>=0; i--) {
        reverse += parola[i];
    }
    // messaggio nella console, la parola invertita è uguale a quella inserita dall'utente?
    if (reverse == parola) {
        return 'Ottimo! :) ' + parola + ' è una parola palindroma';
    }  else {
        return 'Peccato! :( ' + parola + ' non è una parola palindroma';
    }
}
