"use strict";

// Q3: Library Management System
class Book {
    constructor(title, author, isbn, isIssued = false) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isIssued = isIssued;
    }

    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return;
        }
        this.isIssued = true;
        console.log(`You issued "${this.title}".`);
    }

    returnBook() {
        this.isIssued = false;
        console.log(`"${this.title}" has been returned.`);
    }
}

const books = [
    new Book("The Alchemist", "Paulo Coelho", "ISBN101"),
    new Book("Wings of Fire", "A. P. J. Abdul Kalam", "ISBN102"),
    new Book("Atomic Habits", "James Clear", "ISBN103", true)
];

console.log("Available books:");
books.filter(book => !book.isIssued).forEach(book => {
    console.log(`${book.title} by ${book.author} (${book.isbn})`);
});

// Change this ISBN to try issuing a different book.
const searchISBN = "ISBN102";
const selectedBook = books.find(book => book.isbn === searchISBN);

if (selectedBook) {
    selectedBook.issueBook();
} else {
    console.log("No book found with that ISBN.");
}
