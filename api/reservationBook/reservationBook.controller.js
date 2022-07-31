const express = require('express');

const router = express.Router();

const reservationBookHandler = require('./reservationBook.handler');

router.get("/", async (req, res) => {
    res.json(await reservationBookHandler.searchReservationsBook())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservationBookHandler.searchReservationBookId(id))
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservationBookHandler.searchReservationBook(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await reservationBookHandler.createReservationBook(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await reservationBookHandler.editReservationBook(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservationBookHandler.deleteReservationBook(id));
})

module.exports = router;