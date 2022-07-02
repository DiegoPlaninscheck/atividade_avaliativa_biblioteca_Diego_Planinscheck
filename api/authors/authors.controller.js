const express = require('express');

const router = express.Router();

const authorsHandler = require('./authors.handler');

router.get("/", (req, res) => {
    res.json(authorsHandler.searchAuthors())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(authorsHandler.searchAuthor(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(authorsHandler.createAuthor(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(authorsHandler.editAuthor(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(authorsHandler.deleteAuthor(id));
})

module.exports = router;