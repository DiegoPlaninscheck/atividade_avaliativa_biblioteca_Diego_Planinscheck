const crud = require("../../crud/index");

function searchAuthorsBook() {
    return crud.get("authors_Book");
}

function searchAuthorBook(id) {
    return crud.get("authors_Book", id);
}

function createAuthorBook(data) {
   return crud.save("authors_Book", false, data);
}

function editAuthorBook(data, id){
    return crud.save("authors_Book", id, data);
}

function deleteAuthorBook(id){
    return crud.remove("authors_Book", id);
}


module.exports = {
    searchAuthorsBook, searchAuthorBook, createAuthorBook, editAuthorBook, deleteAuthorBook
};
