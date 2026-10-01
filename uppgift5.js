//lösning till uppgift 5 av Hamid awaty
"use strict";

let dishes = ["pizza","pasta","sushi","tacos","sallad"]

console.log(dishes);

console.log(dishes[0]); //skriver ut det första elementet 

console.log(dishes[dishes.length - 1]); //skriver ut det sista elementet 

dishes.push("lasagna"); //lägger till ett element 

dishes.shift(); //tar bort det första elementet 

console.log(dishes);