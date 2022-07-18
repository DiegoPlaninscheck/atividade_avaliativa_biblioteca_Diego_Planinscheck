const crud = require("../../crud/index");

async function searchreservations() {
  return await crud.get("reservation");
}

async function searchreservation(id) {
  return await crud.getByID("reservation", id);
}

async function createReservation(data) {
  const reservation = await crud.get("reservation");
  const client = reservation.filter((c) => c.client_id == data.client_id);
  if (client == "") {
    const book = reservation.filter((b) => b.book_id == data.book_id);
    if (book == "") {
      return await crud.save("reservation", false, data);
    } else {
      return { message: "This book has a reservation" };
    }
  } else {
    return { message: "This client has a reservation" };
  }
}

async function editReservation(data, id) {
  return await crud.save("reservation", id, data);
}

async function deleteReservation(id) {
  return await crud.remove("reservation", id);
}

module.exports = {
  searchreservations,
  searchreservation,
  createReservation,
  editReservation,
  deleteReservation,
};
