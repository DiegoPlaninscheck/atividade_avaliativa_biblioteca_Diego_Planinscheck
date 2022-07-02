const express = require('express');

const router = express.Router();

const bookHandler = require('./book.handler');

router.get("/", (req, res) => {
    res.json(bookHandler.searchBooks())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(bookHandler.searchBook(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(bookHandler.createBook(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(bookHandler.editBook(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(bookHandler.deleteBook(id));
})

module.exports = router;