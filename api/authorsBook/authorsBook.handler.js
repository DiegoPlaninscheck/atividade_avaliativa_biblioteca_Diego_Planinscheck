const crud = require("../../crud/index");

async function searchAuthorsBook() {
  return await crud.get("authors_Book");
}

async function searchAuthorBook(id) {
  return await crud.getByID("authors_Book", id);
}

async function createAuthorBook(data) {
  const list = [];
  const get = await crud.get("authors_Book");
  list.push(get);
  console.log(list);
  const test = list.filter(e => {
    console.log(e.id);
    console.log(e.book_id);
    if (e.author_id == data.author_id && e.book_id == data.book_id) {
        return {"message": "equals"}
    }
    return e;
  });
  console.log(test);
}

async function editAuthorBook(data, id) {
  return await crud.save("authors_Book", id, data);
}

async function deleteAuthorBook(id) {
  return await crud.remove("authors_Book", id);
}

module.exports = {
  searchAuthorsBook,
  searchAuthorBook,
  createAuthorBook,
  editAuthorBook,
  deleteAuthorBook,
};
