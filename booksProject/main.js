// book class: represents a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

// UI Class: handle ui tasks

class UI {
    //display books
    static displayBooks() {
        const books = Store.getBooks();
        books.forEach((book) => UI.addBookToList(book))
    }
    // add book to list
    static addBookToList(book) {
        const list = document.querySelector('#book-list');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href='#'><i class="fas fa-times text-danger delete"></i></td>
        `;

        list.appendChild(row)
    }
    //clear fields
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
    //delete a boook
    static deleteBooks(elem){
        if (elem.classList.contains('delete')) {
            elem.parentElement.parentElement.parentElement.remove();
        }
    }

    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className} mt-4`;
        div.appendChild(document.createTextNode(message));

        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        container.insertBefore(div, form);
        //vanish after 3seconds
        setTimeout(() => document.querySelector('.alert').remove(), 3000)
    }

};

//store class: handles storage

class Store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books') === null){
            books = [];
        }
        else{
            books = JSON.parse(localStorage.getItem('books'));
            
        }
        return books
    }

    static addBook(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book, index) => {
            if(book.isbn === isbn){
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

//event: display books

document.addEventListener('DOMContentLoaded', UI.displayBooks)

//event: add a book

document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault(); //prevent form submit

    //Get form values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    //Validation
    if (title === '' || author === '' || isbn === ''){
        UI.showAlert('Please fill in all fields', 'danger')
    }
    else{  

        //instatiate boook
        const book = new Book(title, author, isbn);

        //add book to ui
        UI.addBookToList(book);

        //success alert
        UI.showAlert(`"${title}" Added`, 'success')

        //clear fields
        UI.clearFields();

        //add book to storage
        Store.addBook(book);
        
    }

});

//event: remove a book

document.querySelector('#book-list').addEventListener('click', (e) => {
    e.preventDefault();

    //remove book from ui
    UI.deleteBooks(e.target);

    //remove from storage
    Store.removeBook(e.target.parentElement.parentElement.previousElementSibling.textContent);

    //success alert
    if ((e.target).classList.contains('delete')){
        UI.showAlert('Book Removed', 'warning')
    };
    

});