// in un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all'utente il suo nome e comunicagli se può partecipare o no alla festa.

// creo array con i nomi

var list = ["Paolo", "Giacobbe", "Attila", "Pelè"];

// prompt richiesta di nome
var user_name = prompt("Inserisci nome invitato");

var found = false;

for(var i = 0; i<list.length; i++){
  var nome = list[i]
  if(nome === user_name){
    found = true
    console.log("Welcome to the party")
  }
}

if(found){
  console.log("Sei invitato")
}else{
  console.log("non sei invitato")
}
//  output 