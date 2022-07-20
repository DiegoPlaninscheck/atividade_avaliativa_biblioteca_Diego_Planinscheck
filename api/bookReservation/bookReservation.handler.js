const crud = require("../../crud/index");

async function searchBookReservation() {
    return await crud.get("bookReservation");
}

async function searchBookReservation(id) {
    return await crud.getByID("bookReservation", id);
}

async function createBookReservation(data) {
   return await crud.save("bookReservation", false, data);
}

async function editBookReservation(data, id){
    return await crud.save("bookReservation", id, data);
}

async function deleteBookReservation(id){
    return await crud.remove("bookReservation", id);
}

module.exports = {
    searchBookReservation, searchBookReservation, createBookReservation, editBookReservation, deleteBookReservation
};
