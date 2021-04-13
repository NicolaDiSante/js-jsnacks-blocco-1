// chiedi all'utente un numero da 1 a 10

var num_utente = parseInt(prompt("Scegli un numero"));

// crea variabile per la somma dei numeri inferiori a quello dell'utente

var somma = 0; 

//creo un ciclo dove calcolo i cubi ei numeri precedenti e li sommo

for(var i = 1; i <= num_utente; i++){
  console.log(i);
  console.log(Math.pow(i,3));

  somma += Math.pow(i,3);
  //somma = somma + Math.pow(i,3)
}

console.log("La somma dei cubi è " + somma)

// output

