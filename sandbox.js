const crud = require("./crud/index");

// async function saveData() {
//     const savedData =  await crud.save("books", "",
//     {name: "teste2", surname: "teste2"})
//     console.log(savedData);
// }

// saveData();

async function searchData() {
  const data = await crud.get("books");
  console.log(data);
}

searchData();

// async function getId() {
//   const data = await crud.getByID("books", "99LCFIWPuGFDGacwqQK1");
//   console.log(data);
// }

// getId();

// async function remove() {
//   const data = await crud.remove("books", "99LCFIWPuGFDGacwqQK1");
//   console.log(data);
// }

// remove();
