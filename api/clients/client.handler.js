const crud = require("../../crud/index");

function searchClients() {
    return crud.get("clients");
}

function searchClient(id) {
    return crud.get("clients", id);
}

function createClient(data) {
   return crud.save("clients", false, data);
}

function editClient(data, id){
    return crud.save("clients", id, data);
}

function deleteClient(id){
    return crud.remove("clients", id);
}


module.exports = {
    searchClients, searchClient, createClient, editClient, deleteClient
};
