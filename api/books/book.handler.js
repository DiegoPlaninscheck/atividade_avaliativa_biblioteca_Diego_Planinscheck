const crud = require("../../crud/index");

function searchBooks() {
    return crud.get("books");
}

function searchBook(id) {
    return crud.get("books", id);
}

function createBook(data) {
   return crud.save("books", false, data);
}

function editBook(data, id){
    return crud.save("books", id, data);
}

function deleteBook(id){
    return crud.remove("books", id);
}


module.exports = {
    searchBooks, searchBook, createBook, editBook, deleteBook
};
