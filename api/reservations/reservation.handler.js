const crud = require("../../crud/index");
const reservationBook = require("../reservationBook/reservationBook.handler");
const books = require("../books/book.handler");

async function searchReservations() {
  return await crud.get("reservation");
}

async function searchReservation(id) {
  return await crud.getByID("reservation", id);
}

async function createReservation(data) {
  const reservation = await searchReservations();
  const clientReservation = reservation.filter(
    (c) => c.client_id == data.client_id
  );

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

  //verificar criacao de apenas uma reserva por cliente 
  let savedReservation;
  if(data.client_id != reservation.client_id){
    savedReservation = await crud.save("reservation", false, data);
  }

  for (const book_id of data.book_id) {
    const book = await books.searchBook(book_id);
    if (book.reservation) {
      return { message: "This book have a reservation!" };
    }

    const edited_book = {
      name: book.name,
      description:  book.description,
      number_of_pages: book.number_of_pages,
      gender: book.gender,
      lauch: book.lauch,
      publisher_id: book.publisher_id,
      reservation: true
  }

    const data_book = {
      book_id: book_id,
      reservation_id: savedReservation.id,
      status: "pending",
    };

    await books.editBook(edited_book, book_id);
    await reservationBook.createReservationBook(data_book);
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
