const express = require('express');

const router = express.Router();

const bookReservationHandler = require('./bookReservation.handler');

router.get("/", async (req, res) => {
    res.json(await bookReservationHandler.searchBookReservation())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await bookReservationHandler.searchBookReservation(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await bookReservationHandler.createBookReservation(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await bookReservationHandler.editBookReservation(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await bookReservationHandler.deleteBookReservation(id));
})

module.exports = router;