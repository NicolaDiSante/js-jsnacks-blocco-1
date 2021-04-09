var arr = [];

for(var i = 0; i < 6; i++){
  var numero = parseInt(prompt("Inserisci un numero"));
  if(numero % 2 != 0){
    arr.push(numero)
    
  }
}

console.log(arr)