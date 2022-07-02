const crud = require("../../crud/index");

function searchAuthors() {
    return crud.get("authors");
}

function searchAuthor(id) {
    return crud.get("authors", id);
}

function createAuthor(data) {
   return crud.save("authors", false, data);
}

function editAuthor(data, id){
    return crud.save("authors", id, data);
}

function deleteAuthor(id){
    return crud.remove("authors", id);
}


module.exports = {
    searchAuthors, searchAuthor, createAuthor, editAuthor, deleteAuthor
};
