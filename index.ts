class Book{
    title: string;
    author: string;
    year: number;
    isBorrowed: boolean;

    constructor(title: string, author: string, year: number) {
        this.title = title;
        this.author = author;  
        this.year = year;
        this.isBorrowed = false;
    }
}

class Library{
    members: members[];
    books: Book[];
    constructor(members: string, books: string) {
        this.members = [];
        this.books = [];
    }

    addBook(book: Book) {
        this.books.push(book);
        console.log(`Book ${book.title} added to the library.`);
    }

    addMember(member: members) {
        this.members.push(member);
        console.log(`Member ${member.name} added to the library.`);
    }

    borrowBook(memberId: number, bookTitle: string) {
        const member = this.members.find(m => m.id === memberId);
        const book = this.books.find(b => b.title === bookTitle);

        if (!member) {
            console.log(`Member with ID ${memberId} not found.`);
            return;
        }
        if (!book) {
            console.log(`Book ${bookTitle} not found.`);
            return;
        }

        book.isBorrowed = true
        member.borrowedBooks.push(book);
        console.log(`Book ${book.title} borrowed by member ${member.name}.`);
}

returnBook(memberId: number, bookTitle: string) {
    const member = this.members.find(m => m.id === memberId);
    const book = member?.borrowedBooks.find(b => b.title === bookTitle);

    if (!member) {
        console.log(`Member with ID ${memberId} not found.`);
        return;
    }

    if (!book) {
        console.log(`Book ${bookTitle} not borrowed by member ${member.name}.`);
        return;
    }

    const bookIndex = member.borrowedBooks.indexOf(book);
    
    if (bookIndex > -1) {
        member.borrowedBooks.splice(bookIndex, 1);
        console.log(`This member ${member.name} did not borrow this book.`);
        return;
    }

    member.borrowedBooks.splice(bookIndex, 1);
    book.isBorrowed = false;
    console.log(`Book ${book.title} returned by member ${member.name}.`);
  }
    listBooks() {
        console.log("Books in the library:");
        this.books.forEach(book => {
            console.log(`- ${book.title} by ${book.author} (${book.year}) - ${book.isBorrowed ? "Borrowed" : "Available"}`);
        });
    }

    listMembers() {
        console.log("Members of the library:");
        this.members.forEach(member => {
            console.log(`- ${member.name} (ID: ${member.id}) - Borrowed Books: ${member.borrowedBooks.length > 0 ? member.borrowedBooks.map(b => b.title).join(", ") : "None"}`);
        });
    }
}
class members{
    name: string;
    id: number;
    borrowedBooks: Book[];
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }
}


const library = new Library("members", "books");
const book1 = new Book("Things Fall Apart", "Chinua Achebe", 1958);
const book2 = new Book(" The Double", "Fyodor Dostoevsky", 2013);
const book3 = new Book("1984", "George Orwell", 1949);

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const member1 = new members("Racheal", 1);
const member2 = new members("Alice", 2);
const member3 = new members("Alice Johnson", 3);

library.addMember(member1);
library.addMember(member2);
library.addMember(member3);

library.borrowBook(1, "Things Fall Apart");
library.listBooks();
library.listMembers();

library.returnBook(1, "Things Fall Apart");
library.listBooks();
library.listMembers();

library.borrowBook(2, "The Double");
library.listBooks();
library.listMembers();

library.returnBook(2, "The Double");
library.listBooks();
library.listMembers();