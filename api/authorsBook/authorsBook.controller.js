const express = require('express');

const router = express.Router();

const authorsBookHandler = require('./authorsBook.handler');

router.get("/", (req, res) => {
    res.json(authorsBookHandler.searchAuthorsBook())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(authorsBookHandler.searchAuthorBook(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(authorsBookHandler.createAuthorBook(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(authorsBookHandler.editAuthorBook(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(authorsBookHandler.deleteAuthorBook(id));
})

module.exports = router;