//lösning till uppgift 7 av Hamid awaty
"use strict";

let numbers = [6, 8, 1, 2, 9, 7, 5, 4] //en array med tal

function returnSumm(array) { //funktionen summar alla talen i arrayen
  let summa = 0;
  
  for (let numbers of array) { //for loop som går igenom arrayen och lägger till varje tal i summan
    summa += numbers;
  }

  return summa; //returnerar summan
}
console.log("The sum is " + returnSumm(numbers)); //anropar funktionen och skriver ut summan
