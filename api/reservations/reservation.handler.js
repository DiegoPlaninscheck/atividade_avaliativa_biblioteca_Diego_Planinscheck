const crud = require("../../crud/index");
const book = require("../books/book.handler");

async function searchreservations() {
  return await crud.get("reservation");
}

async function searchreservation(id) {
  return await crud.getByID("reservation", id);
}

async function createReservation(data) {
  const books = await book.searchBooks("books");
  const reservation = await crud.get("reservation");
  const clients = reservation.filter((c) => c.client_id == data.client_id);

  // for(const client of clients){
  //   if(){
          
  //   }
  // }

  if (client == "") {
    for (let i = 0; i < books.length; i++) {
      const book = books.filter(b => b.id == data.book_id[i]);
      console.log(book);
      if (book == "") {
        // return await crud.save("reservation", false, data);
      } else {
        return { message: "This book(s) has a reservation" };
      }
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
