const crud = require("../../crud/index");

async function searchreservations() {
    return await crud.get("reservation");
}

async function searchreservation(id) {
    return await crud.getByID("reservation", id);
}

async function createReservation(data) {
   return await crud.save("reservation", false, data);
}

async function editReservation(data, id){
    return await crud.save("reservation", id, data);
}

async function deleteReservation(id){
    return await crud.remove("reservation", id);
}

module.exports = {
    searchreservations, searchreservation, createReservation, editReservation, deleteReservation
};
