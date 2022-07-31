const crud = require("../../crud/index");
const reservationBook = require("../reservationBook/reservationBook.handler");
const books = require("../books/book.handler");
const { searchAuthorBook } = require("../authorsBook/authorsBook.handler");

async function searchReservations() {
  return await crud.get("reservation");
}

async function searchReservation(id) {
  return await crud.getByID("reservation", id);
}

async function createReservation(data) {
  const reservation = await searchReservations();
  const clientReservation = reservation.filter((c) => c.client_id == data.client_id);

  for (const client of clientReservation) {
    if (client != null) {
      const reservations = await reservationBook.searchReservationBookId(
        client.id
      );
      for (const reservation of reservations) {
        if (reservation.status == "pending") {
          return { message: "This client have a reservation!" };
        }
      }
    }
  }

  // const savedReservation = await crud.save("reservation", false, data);

  for(const book_id of data.book_id){
      const book = await books.searchBook(book_id);
      if(book.reservation){
        return {message: "This book have a reservation!"}
      }
      console.log(book_id);
      const author = await searchAuthorBook(book_id);
      const author_id = author.map(a => {
        return a.author_id
      });

      // const data_book = {
      //   book_id: book_id,
      //   reservation_id: savedReservation.id,
      //   status: "pending"
      // };

      // await reservationBook.createReservationBook(data_book);
  }
}

async function editReservation(data, id) {
  return await crud.save("reservation", id, data);
}

async function deleteReservation(id) {
  return await crud.remove("reservation", id);
}

module.exports = {
  searchReservations,
  searchReservation,
  createReservation,
  editReservation,
  deleteReservation,
};
