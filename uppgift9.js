//lösning till uppgift 9 av Hamid awaty
"use strict";

const people = [
  {
    name: "Amber",
    age: 35,
    city: "Bollebygd",
  },
  {
    name: "Anton",
    age: 29,
    city: "France",
  },
  {
    name: "Jhon",
    age: 12,
    city: "Gothenberg",
  },
  {
    name: "Emma",
    age: 18,
    city: "Borås",
  },
];
/*
funktionen hämtar information från arrayen 
och använder if för att avgöra personens ålder
*/
function personInfo(person) {
  if (person.age < 18) {
    console.log(
      ` ${person.name} lives in ${person.city} and is not of legal age.`,
    );
  } else {
    console.log(` ${person.name} lives in ${person.city} and is of legal age.`);
  }
}

for (const person of people) {
  personInfo(person);
}
