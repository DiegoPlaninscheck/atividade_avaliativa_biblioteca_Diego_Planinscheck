const crud = require("../../crud/index");

async function searchReservationsBook() {
  return await crud.get("reservationBook");
}

async function searchReservationBookId(id){
    const reservation = await searchReservationsBook();
    return reservation.filter(r => r.reservation_id == id);
}

async function searchReservationBook(id) {
  return await crud.getByID("reservationBook", id);
}

async function createReservationBook(data) {
  return await crud.save("reservationBook", false, data);
}

async function editReservationBook(data, id) {
  return await crud.save("reservationBook", id, data);
}

async function deleteReservationBook(id) {
  return await crud.remove("reservationBook", id);
}

module.exports = {
  searchReservationsBook,
  searchReservationBookId,
  searchReservationBook,
  createReservationBook,
  editReservationBook,
  deleteReservationBook,
};
