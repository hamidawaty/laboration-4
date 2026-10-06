//Lösning till uppgift 3 av Hamid Awaty
"use strict";

const age = 48; //sparar ålder i en variabel

if (age < 18) { // om åldern är mindre än 18 så skriver den ut "barn"
  console.log("barn");
} else if (age >= 65) { // om åldern är 65 eller mer så skriver den ut "pansionär"
  console.log("pansionär");
} else { // annars skriver den ut "Vuxen"
  console.log("Vuxen");
}
