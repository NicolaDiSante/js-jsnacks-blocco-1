var firstWord = prompt("Inserisci la prima parola")
var secondWord = prompt("Inserisci la seconda parola")


if(firstWord.length < secondWord.length){
  console.log(firstWord + " " + secondWord)
}else if(firstWord.length > secondWord.length){
  console.log(secondWord + " " + firstWord)
}else{
  alert("Le parole sono uguali")
}


