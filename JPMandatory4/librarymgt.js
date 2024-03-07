// Define a Book class to represent individual books in the library
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.available = true; // Initialize the book as available
    }
}

// Define a Library class to manage books and user interactions
class Library {
    constructor() {
        this.books = []; // Initialize an empty array to store books in the library
    }

    // Function to add a new book to the library
    addBook(title, author) {
        const newBook = new Book(title, author); // Create a new Book object
        this.books.push(newBook); // Add the new book to the library's collection
        console.log(`Book '${title}' by ${author} added to the library.`);
    }

    // Function to display a list of available books in the library
    displayAvailableBooks() {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`${book.title} by ${book.author}`);
            }
        });
    }

    // Function for a user to borrow a book from the library
    borrowBook(title) {
        const book = this.findBook(title); // Find the book in the library's collection

        if (book) {
            if (book.available) {
                book.available = false; // Set the book as unavailable (borrowed)
                console.log(`You have borrowed '${title}'. Enjoy your reading!`);
            } else {
                console.log(`Sorry, '${title}' is currently not available.`);
            }
        } else {
            console.log(`Book '${title}' not found in the library.`);
        }
    }

    // Function for a u
