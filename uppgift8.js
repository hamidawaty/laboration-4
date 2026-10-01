//lösning till uppgift 8 av Hamid awaty
"use strict";

const book={ // en obbjekt
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    published:1997.
};
function bookInfo(book){  //funktionen skriver ut egenskaper ut av objektet 
    console.log("Title: "+book.title);
    console.log("Author: "+book.author);
    console.log("Publish year: "+book.published);
}
bookInfo(book);