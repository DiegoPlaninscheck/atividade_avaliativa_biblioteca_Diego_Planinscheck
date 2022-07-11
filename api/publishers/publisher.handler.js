const crud = require("../../crud/index");

async function searchPublishers() {
    return await crud.get("publishers");
}

async function searchPublisher(id) {
    return await crud.getByID("publishers", id);
}

async function createPublisher(data) {
   return await crud.save("publishers", false, data);
}

async function editPublisher(data, id){
    return await crud.save("publishers", id, data);
}

async function deletePublisher(id){
    return await crud.remove("publishers", id);
}

module.exports = {
    searchPublishers, searchPublisher, createPublisher, editPublisher, deletePublisher
};
