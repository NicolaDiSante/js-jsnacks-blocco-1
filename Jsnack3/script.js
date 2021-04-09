/* var arr = [];
for(var i = 0; i<10; i++){
  arr.push(prompt("Enter a number"))
  console.log(arr)
}
 */

/* var user_number = parseInt(prompt("Inserisci un numero"));
console.log(user_number) */

//creo una variabile per la somma 
var somma = 0;

//creo un ciclo con 10 iterazioni dove chiedo il prompt e sommo i dati
for(var i = 0; i < 10; i++){
  var nuovoNumero = parseInt(prompt("Inserisci un numero"));
  console.log(nuovoNumero)
  somma += nuovoNumero; //sommo a me stesso
}

// output
console.log(somma)
