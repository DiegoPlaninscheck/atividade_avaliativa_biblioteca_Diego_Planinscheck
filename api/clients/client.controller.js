const express = require('express');

const router = express.Router();

const clientHandler = require('./client.handler');

router.get("/", async (req, res) => {
    res.json(await clientHandler.searchClients())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clientHandler.searchClient(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await clientHandler.createClient(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await clientHandler.editClient(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await clientHandler.deleteClient(id));
})

module.exports = router;