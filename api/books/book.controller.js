const express = require('express');

const router = express.Router();

const bookHandler = require('./book.handler');

router.get("/", async (req, res) => {
    res.json(await bookHandler.searchBooks())
})

router.get("/:id", async  (req, res) => {
    const id = req.params.id;
    res.json(await bookHandler.searchBook(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await bookHandler.createBook(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await bookHandler.editBook(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await bookHandler.deleteBook(id));
})

module.exports = router;