/* Lösning till uppgift 2 
av Hamid Awaty */
"use strict";

let price =100; //pris på varan
let number = 3; //antal varor

let total = price * number; // beräknar totalpris utan moms
let priceWithTax= total *1.25; //beräknar totalpris med moms

// skriver ut pris, antal, totalpris och totalpris med moms
console.log(`Price: ${price}`);
console.log(`Number: ${number}`);
console.log(`Total: ${total}`);
console.log(`Total with tax: ${priceWithTax}`);