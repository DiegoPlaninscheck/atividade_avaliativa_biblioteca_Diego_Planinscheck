const crud = require("../../crud/index");

async function searchClients() {
    return await crud.get("clients");
}

async function searchClient(id) {
    return await crud.getByID("clients", id);
}

async function createClient(data) {
   return await crud.save("clients", false, data);
}

async function editClient(data, id){
    return await crud.save("clients", id, data);
}

async function deleteClient(id){
    return await crud.remove("clients", id);
}

module.exports = {
    searchClients, searchClient, createClient, editClient, deleteClient
};
