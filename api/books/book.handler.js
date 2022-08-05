const crud = require("../../crud/index");
const authorsBook = require("../authorsBook/authorsBook.handler");

async function searchBooks() {
  return await crud.get("books");
}

async function searchBook(id) {
  return await crud.getByID("books", id);
}

async function createBook(data) {
  const infoBook = {
    name: data.name,
    description: data.description,
    number_of_pages: data.number_of_pages,
    gender: data.gender,
    lauch: data.lauch,
    publisher_id: data.publisher_id,
    reservation: false,
  };
  const savedBook = await crud.save("books", false, infoBook);

  console.log(data.author);

  for (const author of data.author) {
    const authorBook = {
      id_author: author,
      id_book: savedBook.id,
    };
    await authorsBook.createAuthorBook(authorBook);
  }
  return savedBook;
}

async function editBook(data, id) {
  return await crud.save("books", id, data);
}

async function deleteBook(id) {
  return await crud.remove("books", id);
}

module.exports = {
  searchBooks,
  searchBook,
  createBook,
  editBook,
  deleteBook,
};
