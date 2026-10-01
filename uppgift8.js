//lösning till uppgift 8 av Hamid awaty
"use strict";

const book={
    title:"Harry Potter and the Philosopher's Stone",
    author:"J.K. Rowling",
    published:1997.
};
function bookInfo(book){
    console.log("Title: "+book.title);
    console.log("Author: "+book.author);
    console.log("Publish year: "+book.published);
}
bookInfo(book);