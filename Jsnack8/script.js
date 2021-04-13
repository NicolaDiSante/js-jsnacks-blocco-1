// prompt utente numero a 4 cifre

// calcola la somma dei numeri che compongono il numero

var numero = prompt("Inserisci un numero")
console.log(numero);

var somma = 0;

for (var i = 0; i < numero.length; i++) {
  var numeroParseInt = parseInt(numero[i]);
  if (!isNaN(numeroParseInt)) {
  somma += numeroParseInt;
  }
}

console.log(somma);
