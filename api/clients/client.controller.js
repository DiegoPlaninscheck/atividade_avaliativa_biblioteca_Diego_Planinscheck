const express = require('express');

const router = express.Router();

const clientHandler = require('./client.handler');

router.get("/", (req, res) => {
    res.json(clientHandler.searchClients())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(clientHandler.searchClients(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(clientHandler.createClient(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(clientHandler.editClient(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(clientHandler.deleteClient(id));
})

module.exports = router;