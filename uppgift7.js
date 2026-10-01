//lösning till uppgift 7 av Hamid awaty
"use strict";

let numbers = [6, 8, 1, 2, 9, 7, 5, 4]

function returnSumm(array) { //funktionen summar alla talen i arrayen
  let summa = 0;
  
  for (let numbers of array) {
    summa += numbers;
  }

  return summa;
}
console.log("The sum is " + returnSumm(numbers));
