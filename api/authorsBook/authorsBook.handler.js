const crud = require("../../crud/index");

function searchAuthorsBook() {
    return crud.get("authors_Book");
}

async function searchAuthorBook(id) {
    return await crud.getByID("authors_Book", id);
}

async function createAuthorBook(data) {
   return await crud.save("authors_Book", false, data);
}

async function editAuthorBook(data, id){
    return await crud.save("authors_Book", id, data);
}

async function deleteAuthorBook(id){
    return await crud.remove("authors_Book", id);
}

module.exports = {
    searchAuthorsBook, searchAuthorBook, createAuthorBook, editAuthorBook, deleteAuthorBook
};
