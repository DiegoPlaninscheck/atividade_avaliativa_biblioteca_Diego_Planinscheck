const crud = require("../../crud/index");

async function searchBooks() {
    return await crud.get("books");
}

async function searchBook(id) {
    return await crud.getByID("books", id);
}

async function createBook(data) {
   return await crud.save("books", false, data);
}

async function editBook(data, id){
    return await crud.save("books", id, data);
}

async function deleteBook(id){
    return await crud.remove("books", id);
}

module.exports = {
    searchBooks, searchBook, createBook, editBook, deleteBook
};
