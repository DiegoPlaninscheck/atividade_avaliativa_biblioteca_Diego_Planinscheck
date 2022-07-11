const express = require('express');

const router = express.Router();

const authorsBookHandler = require('./authorsBook.handler');

router.get("/", async (req, res) => {
    res.json(await authorsBookHandler.searchAuthorsBook())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await authorsBookHandler.searchAuthorBook(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await authorsBookHandler.createAuthorBook(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await authorsBookHandler.editAuthorBook(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await authorsBookHandler.deleteAuthorBook(id));
})

module.exports = router;