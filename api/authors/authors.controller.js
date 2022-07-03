const express = require('express');

const router = express.Router();

const authorsHandler = require('./authors.handler');

router.get("/", async (req, res) => {
    res.json(await authorsHandler.searchAuthors())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await authorsHandler.searchAuthor(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await authorsHandler.createAuthor(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await authorsHandler.editAuthor(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await authorsHandler.deleteAuthor(id));
})

module.exports = router;