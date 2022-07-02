const crud = require("../../crud/index");

function searchPublishers() {
    return crud.get("publishers");
}

function searchPublisher(id) {
    return crud.get("publishers", id);
}

function createPublisher(data) {
   return crud.save("publishers", false, data);
}

function editPublisher(data, id){
    return crud.save("publishers", id, data);
}

function deletePublisher(id){
    return crud.remove("publishers", id);
}


module.exports = {
    searchPublishers, searchPublisher, createPublisher, editPublisher, deletePublisher
};
