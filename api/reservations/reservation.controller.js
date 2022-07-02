const express = require('express');

const router = express.Router();

const reservationHandler = require('./reservation.handler');

router.get("/", (req, res) => {
    res.json(reservationHandler.searchreservations())
})

router.get("/:id", (req, res) => {
    const id = req.params.id;
    res.json(reservationHandler.searchreservation(id))
})

router.post("/", (req, res) => {
    const data = req.body;
    res.json(reservationHandler.createReservation(data));
})

router.put("/:id", (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(reservationHandler.editReservation(data, id))
})

router.delete("/:id", (req, res) => {
    const id = req.params.id;
    res.json(reservationHandler.deleteReservation(id));
})

module.exports = router;