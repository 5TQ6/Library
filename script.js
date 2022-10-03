let myLibrary = [];
var addbtn = document.getElementById('addBtn')
var overlay = document.getElementById('overlay')
var modal = document.getElementById('modal')

addbtn.onclick = function() {
    overlay.classList.toggle('active')
    modal.classList.toggle('active')
}

overlay.onclick = function() {
    overlay.classList.toggle('active')
    modal.classList.toggle('active')
}

function Book() {

}

function addBookToLibrary(author,title,pages,isRead) {

}