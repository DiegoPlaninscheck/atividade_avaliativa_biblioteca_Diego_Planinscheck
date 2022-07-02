const crud = require("../../crud/index");

function searchreservations() {
    return crud.get("reservation");
}

function searchreservation(id) {
    return crud.get("reservation", id);
}

function createReservation(data) {
   return crud.save("reservation", false, data);
}

function editReservation(data, id){
    return crud.save("reservation", id, data);
}

function deleteReservation(id){
    return crud.remove("reservation", id);
}


module.exports = {
    searchreservations, searchreservation, createReservation, editReservation, deleteReservation
};
