const express = require('express');

const router = express.Router();

const reservationHandler = require('./reservation.handler');

router.get("/", async (req, res) => {
    res.json(await reservationHandler.searchreservations())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservationHandler.searchreservation(id))
})

router.post("/", async (req, res) => {
    const data = req.body;
    res.json(await reservationHandler.createReservation(data));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const data = req.body;
    res.json(await reservationHandler.editReservation(data, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await reservationHandler.deleteReservation(id));
})

module.exports = router;