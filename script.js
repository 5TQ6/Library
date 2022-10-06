var addbtn = document.getElementById('addBtn')
var overlay = document.getElementById('overlay')
var modal = document.getElementById('modal')
var formInputs = document.getElementsByClassName('formInputs')
var books = document.querySelector('.booksGrid')
var readStat = document.querySelector('.notRead')


let myLibrary = [{
    title: 'book1',
    author: 'me',
    pages: 500,
    isRead: true
},{
    title: 'book2',
    author: 'u',
    pages: 5030,
    isRead: false
}];

addbtn.onclick = function() {
    overlay.classList.toggle('active')
    modal.classList.toggle('active')
}

overlay.onclick = function() {
    overlay.classList.toggle('active')
    modal.classList.toggle('active')
}



function Book(author,title,pages,isRead) {
   
}

function addBookToLibrary() {
    
}

function createBookElement(el, content, className) {
    const element = document.createElement(el);
    element.textContent = content;
    element.setAttribute('class', className);
    return element;
}

function createBookItem(book, index) {
    const bookItem = document.createElement('div')
    bookItem.setAttribute('id', index)
    bookItem.setAttribute('key', index)
    bookItem.setAttribute('class', 'book')
    bookItem.appendChild(
        createBookElement('p', `Title: ${book.title}`, "title")
    )
    bookItem.appendChild(
        createBookElement('p', `author: ${book.author}`, "author")
    )
    bookItem.appendChild(
        createBookElement('p', `pages: ${book.pages}`, "pages")
    )
    bookItem.appendChild(
        createBookElement('button', 'Not read', "notRead")
    )
    bookItem.appendChild(
        createBookElement('button', 'Remove', "remove")
    )
    
    books.insertAdjacentElement('afterbegin', bookItem);
}

function renderBooks() {
    myLibrary.map( (book,index) => {
        createBookItem(book,index)
    } )
}

renderBooks();