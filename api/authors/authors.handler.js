const crud = require("../../crud/index");

async function searchAuthors() {
     return await crud.get("authors");
}

async function searchAuthor(id) {
    return await crud.getByID("authors", id);
}

async function createAuthor(data) {
   return await crud.save("authors", false, data);
}

async function editAuthor(data, id){
    return await crud.save("authors", id, data);
}

async function deleteAuthor(id){
    return await crud.remove("authors", id);
}


module.exports = {
    searchAuthors, searchAuthor, createAuthor, editAuthor, deleteAuthor
};
