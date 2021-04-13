var arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var somma = 0;


for(var i = 0; i < arr_num.length; i++){
  somma += arr_num[i];
  console.log(somma)
}

var avg = somma / arr_num.length;
console.log(avg)


